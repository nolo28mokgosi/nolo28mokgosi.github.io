"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[755],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),a=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=a(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=a(t),f=r,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?i.createElement(g,s(s({ref:n},l),{},{components:t})):i.createElement(g,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var a=2;a<o;a++)s[a]=t[a];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2172:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return l},default:function(){return d}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],c={slug:"dependencyinjectiononfunctions",sidebar_label:"DI on function",sidebar_position:1},u="Dependency injection on azure functions",a={unversionedId:"engineering/DI-on-functions",id:"engineering/DI-on-functions",isDocsHomePage:!1,title:"Dependency injection on azure functions",description:"di",source:"@site/docs/engineering/DI-on-functions.md",sourceDirName:"engineering",slug:"/engineering/dependencyinjectiononfunctions",permalink:"/docs/engineering/dependencyinjectiononfunctions",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"dependencyinjectiononfunctions",sidebar_label:"DI on function",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CAP Theorem",permalink:"/docs/nuggets-design/CAP Theorem"},next:{title:"Firebase Token Validation in Azure",permalink:"/docs/engineering/jwttokenvalidationonazurefunction"}},l=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Registering Services",id:"registering-services",children:[],level:2},{value:"Using dependencies",id:"using-dependencies",children:[],level:2},{value:"Issues",id:"issues",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:l};function d(e){var n=e.components,c=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependency-injection-on-azure-functions"},"Dependency injection on azure functions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"di",src:t(6988).Z})),(0,o.kt)("p",null,"This document summarizes the microsoft's dependency injection ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"},"tutorial"),".\nFollowing steps must be followed to achieve IoC(Inversion of control) in Azure functions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install prerequisites"),(0,o.kt)("li",{parentName:"ol"},"Register services")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microsoft.Azure.Functions.Extensions"),(0,o.kt)("li",{parentName:"ul"},"Microsoft.NET.Sdk.Functions: Don't install if you already have sdK installed. "),(0,o.kt)("li",{parentName:"ul"},"Microsoft.Extensions.DependencyInjection")),(0,o.kt)("h2",{id:"registering-services"},"Registering Services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"using Microsoft.Azure.Functions.Extensions.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection;\n\n[assembly: FunctionsStartup(typeof(MyNamespace.Startup))]\n\nnamespace MyNamespace\n{\n    public class Startup : FunctionsStartup\n    {\n        public override void Configure(IFunctionsHostBuilder builder)\n        {\n            builder.Services.AddSingleton<IMyService>((s) => {\n                return new MyService();\n            });\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"using-dependencies"},"Using dependencies"),(0,o.kt)("p",null,'GetMessage method can be invoked from injected class "IMyService"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Azure.WebJobs;\nusing Microsoft.Azure.WebJobs.Extensions.Http;\nusing Microsoft.Extensions.Logging;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nnamespace MyNamespace\n{\n    public class MyHttpTrigger\n    {\n        private readonly HttpClient _client;\n        private readonly IMyService _service;\n\n        public MyHttpTrigger(IMyService service)\n        {\n            this._service = service;\n        }\n\n        [FunctionName("MyHttpTrigger")]\n        public async Task<IActionResult> Run(\n            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,\n            ILogger log)\n        {\n            var message = _service.GetMessage();\n\n            return new OkObjectResult("Response from function with injected dependencies.");\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"issues"},"Issues"),(0,o.kt)("p",null,"Should you get an error like this \u201cCould not load file or assembly 'Microsoft.Extensions.DependencyInjection.Abstractions, Version=6.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60'. The system cannot find the file specified\u201d"),(0,o.kt)("p",null,"You need to downgrade Microsoft.Extensions* to 3.1.0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/64809716/could-not-load-file-or-assembly-microsoft-extensions-configuration-abstractions"},"https://stackoverflow.com/questions/64809716/could-not-load-file-or-assembly-microsoft-extensions-configuration-abstractions")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"It's important to note available service lifeline"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transient: Created upon resolution of each service."),(0,o.kt)("li",{parentName:"ul"},"Scope: Created once per function execution. Further requests during execution uses the same instance."),(0,o.kt)("li",{parentName:"ul"},"Singleton: matches the lifetime of the host and it's reused across multiple executions")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"#1: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"},"Use dependency injection in .NET Azure Functions")))}d.isMDXComponent=!0},6988:function(e,n,t){n.Z=t.p+"assets/images/sidecar-c82818ca56341f2c21b5b5119fd41f60.jpg"}}]);