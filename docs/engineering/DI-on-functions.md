---
slug: dependencyinjectiononfunctions
sidebar_label: 'DI on function'
sidebar_position: 1
---


# Dependency injection on azure functions
![di](/img/docs/sidecar.jpg)

This document summarizes the microsoft's dependency injection [tutorial](https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection).
Following steps must be followed to achieve IoC(Inversion of control) in Azure functions.
1. Install prerequisites
2. Register services

## Prerequisites
- Microsoft.Azure.Functions.Extensions
- Microsoft.NET.Sdk.Functions: Don't install if you already have sdK installed. 
- Microsoft.Extensions.DependencyInjection

## Registering Services

```
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(MyNamespace.Startup))]

namespace MyNamespace
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddSingleton<IMyService>((s) => {
                return new MyService();
            });
        }
    }
}
```

## Using dependencies

GetMessage method can be invoked from injected class "IMyService"
```
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using System.Threading.Tasks;

namespace MyNamespace
{
    public class MyHttpTrigger
    {
        private readonly HttpClient _client;
        private readonly IMyService _service;

        public MyHttpTrigger(IMyService service)
        {
            this._service = service;
        }

        [FunctionName("MyHttpTrigger")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            var message = _service.GetMessage();

            return new OkObjectResult("Response from function with injected dependencies.");
        }
    }
}
```
## Issues

Should you get an error like this “Could not load file or assembly 'Microsoft.Extensions.DependencyInjection.Abstractions, Version=6.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60'. The system cannot find the file specified”

You need to downgrade Microsoft.Extensions* to 3.1.0

https://stackoverflow.com/questions/64809716/could-not-load-file-or-assembly-microsoft-extensions-configuration-abstractions




## Conclusion
It's important to note available service lifeline
- Transient: Created upon resolution of each service.
- Scope: Created once per function execution. Further requests during execution uses the same instance.
- Singleton: matches the lifetime of the host and it's reused across multiple executions

## References

#1: [Use dependency injection in .NET Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection)