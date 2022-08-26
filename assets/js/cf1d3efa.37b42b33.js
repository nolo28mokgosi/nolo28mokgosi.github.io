"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[3734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={slug:"jwttokenvalidationonazurefunction",sidebar_label:"Firebase Token Validation in Azure",sidebar_position:1},o="Firebase Token Validation in Azure",l={unversionedId:"engineering/azurefunction-firebase-auth",id:"engineering/azurefunction-firebase-auth",title:"Firebase Token Validation in Azure",description:"This note documents a case where Firebase is used as Auth Server and Azure Function as the backend of the mobile application.",source:"@site/docs/engineering/azurefunction-firebase-auth.md",sourceDirName:"engineering",slug:"/engineering/jwttokenvalidationonazurefunction",permalink:"/docs/engineering/jwttokenvalidationonazurefunction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"jwttokenvalidationonazurefunction",sidebar_label:"Firebase Token Validation in Azure",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DI on function",permalink:"/docs/engineering/dependencyinjectiononfunctions"},next:{title:"Expo Deployment",permalink:"/docs/engineering/expodeployment"}},c={},s=[{value:"React Native Setup",id:"react-native-setup",level:2},{value:"Authenticating in Azure function",id:"authenticating-in-azure-function",level:2},{value:"Generating Key",id:"generating-key",level:3},{value:"Setup in Azure Function",id:"setup-in-azure-function",level:3},{value:"Dependency Injection",id:"dependency-injection",level:3},{value:"Verify Token",id:"verify-token",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Reference",id:"reference",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firebase-token-validation-in-azure"},"Firebase Token Validation in Azure"),(0,i.kt)("p",null,"This note documents a case where Firebase is used as Auth Server and Azure Function as the backend of the mobile application. "),(0,i.kt)("h2",{id:"react-native-setup"},"React Native Setup"),(0,i.kt)("p",null,"I followed ",(0,i.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/react-native-firebase-tutorial/"},"freecodecamp")," blog post for registration and login. It's quick and simple to setup."),(0,i.kt)("p",null,"Successful login will return a JWT token which can be used for secure communication with the backend."),(0,i.kt)("h2",{id:"authenticating-in-azure-function"},"Authenticating in Azure function"),(0,i.kt)("p",null,"To use firebase in .Net you have to install Firebase Admin .Net SDK.\nSDK enables access to firebase in .Net. The SDK provides custom authentication support at the moment. More details on reference point #2"),(0,i.kt)("p",null,"SETUP\nInstall FirebaseAdmin package from Nuget"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dotnet add package FirebaseAdmin --version $VERSION\n")),(0,i.kt)("p",null,"According to #3, to authenticate service account and authorise it to Firebase services we need a private key."),(0,i.kt)("h3",{id:"generating-key"},"Generating Key"),(0,i.kt)("p",null,"If you don\u2019t have a firebase project go to firebase.google.com to create one. Once created, follow below steps to generate a key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Log in to firebase console, open Settings, then go to Service Accounts"),(0,i.kt)("li",{parentName:"ul"},"Click \u201cGenerate New Private Key\u201d"),(0,i.kt)("li",{parentName:"ul"},"Store the JSON file containing the Key in a secure place..")),(0,i.kt)("h3",{id:"setup-in-azure-function"},"Setup in Azure Function"),(0,i.kt)("p",null,"To setup environment variables you can follow steps on ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/admin/setup/#windows"},"google document"),". I implemented it differently"),(0,i.kt)("h3",{id:"dependency-injection"},"Dependency Injection"),(0,i.kt)("p",null,"On my function code, local.settigns.json file, I added a global variable GOOGLE_APPLICATION_CREDENTIALS_STRING and assigned private key to it as illustrated below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\"GOOGLE_APPLICATION_CREDENTIALS_STRING\": \"{ 'type': 'service_account','project_id': \u2026}\u201d\n")),(0,i.kt)("p",null,"I then created a startup class where I startup firebase app using confit mentioned above"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[assembly: FunctionsStartup(typeof(MyNameSpace.Startup))]\nnamespace MyNameSpace\n{\n    public class Startup : FunctionsStartup\n    {\n        public override void Configure(IFunctionsHostBuilder builder)\n        {\n            try\n            {\n                builder.Services.AddSingleton<ITokenValidator,TokenValidator>();\n\n                string json = Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS_STRING");\n                if (json == null)\n                {\n                    throw new Exception(\n                        "GOOGLE_APPLICATION_CREDENTIALS_STRING environment variable with JSON is not set");\n                }\n\n                FirebaseApp.Create(new AppOptions()\n                {\n                    Credential = GoogleCredential.FromJson(json),\n                });\n\n                builder.Services.AddSingleton<ITokenValidator>((s) =>\n                {\n                    return new TokenValidator();\n                });\n            }\n            catch(Exception ex)\n            {\n                throw new Exception($"Failed to start the host.{ex}");\n            }\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"verify-token"},"Verify Token"),(0,i.kt)("p",null,"This section covers 2 points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating of TokenValidator Class"),(0,i.kt)("li",{parentName:"ul"},"Validating Token at Azure function")),(0,i.kt)("p",null,"I creates a class Token Validator which is used at function level"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace MyNameSpace\n{\n    public class TokenValidator : ITokenValidator\n    {\n        public async Task<string> ValidateAccessToken(string token)\n        {\n            if (string.IsNullOrEmpty(token))\n                throw new Exception("Token not set");\n\n            if (!token.Contains("Bearer"))\n            {\n                throw new Exception("Invalid token");\n            }\n\n            var accessToken = token.Substring("Bearer ".Length);\n\n            FirebaseToken decodedToken = await FirebaseAuth.DefaultInstance\n                .VerifyIdTokenAsync(accessToken);\n            return  decodedToken.Uid;\n        }\n    }\n}\n')),(0,i.kt)("p",null,"On the function, I used below code to validate the token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'public  class GetFeedById\n{\n    private readonly ITokenValidator _tokenValidator;\n\n    public GetFeedById(ITokenValidator tokenValidator)\n    {\n        _tokenValidator = tokenValidator;\n    }\n\n    [FunctionName("GetFeedById")]\n    public  async Task<IActionResult> Run(\n        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,\n        ILogger log)\n    {\n        string token = req.Headers["Authorization"];\n        string userId = await _tokenValidator.ValidateAccessToken(token);\n        \n        ....\n    }\n}\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Other useful documentation includes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.markvincze.com/secure-an-asp-net-core-api-with-firebase/"},"Securing azure function")," by Mark"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://damienbod.com/2020/09/24/securing-azure-functions-using-azure-ad-jwt-bearer-token-authentication-for-user-access-tokens/"},"Securing azure function")," by Damien"),(0,i.kt)("li",{parentName:"ul"},"Jacob documented a nice piece on basics of ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@jwngr/demystifying-firebase-auth-tokens-e0c533ed330c"},"Firebase Auth Tokens"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"#1 - ",(0,i.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/react-native-firebase-tutorial/"},"https://www.freecodecamp.org/news/react-native-firebase-tutorial/")),(0,i.kt)("p",null,"#2 - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Firebase/firebase-admin-dotnet"},"https://github.com/Firebase/firebase-admin-dotnet")),(0,i.kt)("p",null,"#3 - ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/admin/setup/#windows"},"https://firebase.google.com/docs/admin/setup/#windows")),(0,i.kt)("p",null,"#4 - ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth/admin/verify-id-tokens#c"},"https://firebase.google.com/docs/auth/admin/verify-id-tokens#c")))}p.isMDXComponent=!0}}]);