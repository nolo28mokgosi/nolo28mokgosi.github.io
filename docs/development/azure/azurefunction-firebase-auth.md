---
slug: jwttokenvalidationonazurefunction
sidebar_label: 'Firebase Token Validation in Azure'
sidebar_position: 1
---

# Firebase Token Validation in Azure

This note documents a case where Firebase is used as Auth Server and Azure Function as the backend of the mobile application. 

## React Native Setup
I followed [freecodecamp](https://www.freecodecamp.org/news/react-native-firebase-tutorial/) blog post for registration and login. It's quick and simple to setup.

Successful login will return a JWT token which can be used for secure communication with the backend.

## Authenticating in Azure function
To use firebase in .Net you have to install Firebase Admin .Net SDK.
SDK enables access to firebase in .Net. The SDK provides custom authentication support at the moment. More details on reference point #2

SETUP
Install FirebaseAdmin package from Nuget

```
$ dotnet add package FirebaseAdmin --version $VERSION
```

According to #3, to authenticate service account and authorise it to Firebase services we need a private key.

### Generating Key
If you don’t have a firebase project go to firebase.google.com to create one. Once created, follow below steps to generate a key
- Log in to firebase console, open Settings, then go to Service Accounts
- Click “Generate New Private Key”
- Store the JSON file containing the Key in a secure place..

### Setup in Azure Function
To setup environment variables you can follow steps on [google document](https://firebase.google.com/docs/admin/setup/#windows). I implemented it differently

### Dependency Injection
On my function code, local.settigns.json file, I added a global variable GOOGLE_APPLICATION_CREDENTIALS_STRING and assigned private key to it as illustrated below.
```
"GOOGLE_APPLICATION_CREDENTIALS_STRING": "{ 'type': 'service_account','project_id': …}”
```

I then created a startup class where I startup firebase app using confit mentioned above
```
[assembly: FunctionsStartup(typeof(MyNameSpace.Startup))]
namespace MyNameSpace
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            try
            {
                builder.Services.AddSingleton<ITokenValidator,TokenValidator>();

                string json = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS_STRING");
                if (json == null)
                {
                    throw new Exception(
                        "GOOGLE_APPLICATION_CREDENTIALS_STRING environment variable with JSON is not set");
                }

                FirebaseApp.Create(new AppOptions()
                {
                    Credential = GoogleCredential.FromJson(json),
                });

                builder.Services.AddSingleton<ITokenValidator>((s) =>
                {
                    return new TokenValidator();
                });
            }
            catch(Exception ex)
            {
                throw new Exception($"Failed to start the host.{ex}");
            }
        }
    }
}
```

### Verify Token
This section covers 2 points
- Creating of TokenValidator Class
- Validating Token at Azure function

I creates a class Token Validator which is used at function level
```
namespace MyNameSpace
{
    public class TokenValidator : ITokenValidator
    {
        public async Task<string> ValidateAccessToken(string token)
        {
            if (string.IsNullOrEmpty(token))
                throw new Exception("Token not set");

            if (!token.Contains("Bearer"))
            {
                throw new Exception("Invalid token");
            }

            var accessToken = token.Substring("Bearer ".Length);

            FirebaseToken decodedToken = await FirebaseAuth.DefaultInstance
                .VerifyIdTokenAsync(accessToken);
            return  decodedToken.Uid;
        }
    }
}
```
On the function, I used below code to validate the token

```
public  class GetFeedById
{
    private readonly ITokenValidator _tokenValidator;

    public GetFeedById(ITokenValidator tokenValidator)
    {
        _tokenValidator = tokenValidator;
    }

    [FunctionName("GetFeedById")]
    public  async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        string token = req.Headers["Authorization"];
        string userId = await _tokenValidator.ValidateAccessToken(token);
        
        ....
    }
}
```

## Conclusion
Other useful documentation includes
- [Securing azure function](https://blog.markvincze.com/secure-an-asp-net-core-api-with-firebase/) by Mark
- [Securing azure function](https://damienbod.com/2020/09/24/securing-azure-functions-using-azure-ad-jwt-bearer-token-authentication-for-user-access-tokens/) by Damien
- Jacob documented a nice piece on basics of [Firebase Auth Tokens](https://medium.com/@jwngr/demystifying-firebase-auth-tokens-e0c533ed330c)

## Reference
#1 - https://www.freecodecamp.org/news/react-native-firebase-tutorial/

#2 - https://github.com/Firebase/firebase-admin-dotnet

#3 - https://firebase.google.com/docs/admin/setup/#windows

#4 - https://firebase.google.com/docs/auth/admin/verify-id-tokens#c