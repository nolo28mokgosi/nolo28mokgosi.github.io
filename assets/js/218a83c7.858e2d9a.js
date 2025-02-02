"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[755],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=i.createContext({}),u=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return i.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,g=d["".concat(a,".").concat(f)]||d[f]||p[f]||r;return t?i.createElement(g,s(s({ref:n},l),{},{components:t})):i.createElement(g,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<r;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const r={slug:"dependencyinjectiononfunctions",sidebar_label:"DI on function",sidebar_position:1},s="Dependency injection on azure functions",c={unversionedId:"engineering/DI-on-functions",id:"engineering/DI-on-functions",title:"Dependency injection on azure functions",description:"di",source:"@site/docs/engineering/DI-on-functions.md",sourceDirName:"engineering",slug:"/engineering/dependencyinjectiononfunctions",permalink:"/docs/engineering/dependencyinjectiononfunctions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"dependencyinjectiononfunctions",sidebar_label:"DI on function",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CAP Theorem",permalink:"/docs/design/CAP Theorem"},next:{title:"Firebase Token Validation in Azure",permalink:"/docs/engineering/jwttokenvalidationonazurefunction"}},a={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Registering Services",id:"registering-services",level:2},{value:"Using dependencies",id:"using-dependencies",level:2},{value:"Issues",id:"issues",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],l={toc:u};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dependency-injection-on-azure-functions"},"Dependency injection on azure functions"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"di",src:t(5737).Z,width:"450",height:"300"})),(0,o.kt)("p",null,"This document summarizes the microsoft's dependency injection ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"},"tutorial"),".\nFollowing steps must be followed to achieve IoC(Inversion of control) in Azure functions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install prerequisites"),(0,o.kt)("li",{parentName:"ol"},"Register services")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microsoft.Azure.Functions.Extensions"),(0,o.kt)("li",{parentName:"ul"},"Microsoft.NET.Sdk.Functions: Don't install if you already have sdK installed. "),(0,o.kt)("li",{parentName:"ul"},"Microsoft.Extensions.DependencyInjection")),(0,o.kt)("h2",{id:"registering-services"},"Registering Services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"using Microsoft.Azure.Functions.Extensions.DependencyInjection;\nusing Microsoft.Extensions.DependencyInjection;\n\n[assembly: FunctionsStartup(typeof(MyNamespace.Startup))]\n\nnamespace MyNamespace\n{\n    public class Startup : FunctionsStartup\n    {\n        public override void Configure(IFunctionsHostBuilder builder)\n        {\n            builder.Services.AddSingleton<IMyService>((s) => {\n                return new MyService();\n            });\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"using-dependencies"},"Using dependencies"),(0,o.kt)("p",null,'GetMessage method can be invoked from injected class "IMyService"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'using Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Azure.WebJobs;\nusing Microsoft.Azure.WebJobs.Extensions.Http;\nusing Microsoft.Extensions.Logging;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nnamespace MyNamespace\n{\n    public class MyHttpTrigger\n    {\n        private readonly HttpClient _client;\n        private readonly IMyService _service;\n\n        public MyHttpTrigger(IMyService service)\n        {\n            this._service = service;\n        }\n\n        [FunctionName("MyHttpTrigger")]\n        public async Task<IActionResult> Run(\n            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,\n            ILogger log)\n        {\n            var message = _service.GetMessage();\n\n            return new OkObjectResult("Response from function with injected dependencies.");\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"issues"},"Issues"),(0,o.kt)("p",null,"Should you get an error like this \u201cCould not load file or assembly 'Microsoft.Extensions.DependencyInjection.Abstractions, Version=6.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60'. The system cannot find the file specified\u201d"),(0,o.kt)("p",null,"You need to downgrade Microsoft.Extensions* to 3.1.0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/64809716/could-not-load-file-or-assembly-microsoft-extensions-configuration-abstractions"},"https://stackoverflow.com/questions/64809716/could-not-load-file-or-assembly-microsoft-extensions-configuration-abstractions")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"It's important to note available service lifeline"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transient: Created upon resolution of each service."),(0,o.kt)("li",{parentName:"ul"},"Scope: Created once per function execution. Further requests during execution uses the same instance."),(0,o.kt)("li",{parentName:"ul"},"Singleton: matches the lifetime of the host and it's reused across multiple executions")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"#1: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"},"Use dependency injection in .NET Azure Functions")))}p.isMDXComponent=!0},5737:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sidecar-c82818ca56341f2c21b5b5119fd41f60.jpg"}}]);