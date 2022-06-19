"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[124],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"createC4diagrams",title:"Creating C4 diagrams",authors:"nolo",tags:["architecture","design","diagramming","modelling","c4"]},s=void 0,c={permalink:"/blog/createC4diagrams",source:"@site/blog/2022-05-14-CreateC4Diagrams.md",title:"Creating C4 diagrams",description:"Introduction",date:"2022-05-14T00:00:00.000Z",formattedDate:"May 14, 2022",tags:[{label:"architecture",permalink:"/blog/tags/architecture"},{label:"design",permalink:"/blog/tags/design"},{label:"diagramming",permalink:"/blog/tags/diagramming"},{label:"modelling",permalink:"/blog/tags/modelling"},{label:"c4",permalink:"/blog/tags/c-4"}],readingTime:2.985,truncated:!0,authors:[{name:"Nolo Mokgosi",title:"admin",url:"https://github.com/nolo28mokgosi",imageURL:"/img/profile.png",key:"nolo"}],prevItem:{title:"Orchestration and Choreography",permalink:"/blog/orchestrationvschoreography"},nextItem:{title:"Sequence on C4",permalink:"/blog/sequencediagramonc4"}},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",children:[{value:"Notation",id:"notation",children:[],level:3},{value:"Guidelines",id:"guidelines",children:[],level:3}],level:2},{value:"Tools",id:"tools",children:[{value:"Gliffy, Draw.io, Ms Visio",id:"gliffy-drawio-ms-visio",children:[],level:3},{value:"Archimate",id:"archimate",children:[],level:3},{value:"Structurizr",id:"structurizr",children:[],level:3},{value:"Plant UML",id:"plant-uml",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],m={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"When I was introduced to C4 in 2019 there were few tools that supported it. Today there's multiple and I'll go through few tools in this post. "),(0,o.kt)("p",null,"It is ok to create c4 in a tool of your choice. The most important part of creating C4 diagrams is to follow notation and recommended guidelines."),(0,o.kt)("h3",{id:"notation"},"Notation"),(0,o.kt)("p",null,"It is recommended that every element in the diagrams includes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name"),(0,o.kt)("li",{parentName:"ul"},"Type (Person, system, container)"),(0,o.kt)("li",{parentName:"ul"},"Descriptive text"),(0,o.kt)("li",{parentName:"ul"},"Technology choice where appropriate (e.g. on a container)\n",(0,o.kt)("img",{alt:"notation",src:n(2195).Z}),(0,o.kt)("sub",null,(0,o.kt)("sup",null,"#1 infoQ.com")))),(0,o.kt)("h3",{id:"guidelines"},"Guidelines"),(0,o.kt)("p",null,"As illustrated in my ",(0,o.kt)("a",{parentName:"p",href:"https://nolomokgosi.com/blog/introductiontoc4"},"previous blog post"),","),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each diagram should have title describing diagram type and scope (e.g. Context diagram of Travel Sko)."),(0,o.kt)("li",{parentName:"ul"},"Each diagram should have a legend."),(0,o.kt)("li",{parentName:"ul"},"Acronyms and abbreviations should be understandable, otherwise avoid them."),(0,o.kt)("li",{parentName:"ul"},"Every container should have technology explicitly specified. (e.g Azure function, React Web app)"),(0,o.kt)("li",{parentName:"ul"},"Every relationship should be label with direction and intent"),(0,o.kt)("li",{parentName:"ul"},"Diagrams should not be stale. I prefer to only create Context and Container diagram because their rate of change is very low and easy to keep them fresh.  ")),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("p",null,"This sections outlines tools that can be used to create C4 diagrams. "),(0,o.kt)("h3",{id:"gliffy-drawio-ms-visio"},"Gliffy, Draw.io, Ms Visio"),(0,o.kt)("p",null,"Gliffy, Draw.io, Ms Visio are all in the same category. You can draw elements as illustrated in the notation, or you can search for c4 plugin of the tool and start creating c4 diagrams, nothing complex."),(0,o.kt)("p",null,"Gliffy documented how to create c4 on ",(0,o.kt)("a",{parentName:"p",href:"https://www.gliffy.com/blog/c4-model"},"this blog post")),(0,o.kt)("h3",{id:"archimate"},"Archimate"),(0,o.kt)("p",null,"On ",(0,o.kt)("a",{parentName:"p",href:"https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/"},"archimatetool.com")," post, Jean-Baptiste Sarrodie explains how to create C4 diagrams using archimate.\nHe further highlights that c4 diagrams can be created by mapping c4 elements to archimate elements as outlined below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Person = Business Actor"),(0,o.kt)("li",{parentName:"ul"},"Software System or Container = Application Component"),(0,o.kt)("li",{parentName:"ul"},"Component = Application function"),(0,o.kt)("li",{parentName:"ul"},"Code Element = Application function"),(0,o.kt)("li",{parentName:"ul"},"Relationship = Triggering Relationship")),(0,o.kt)("h3",{id:"structurizr"},"Structurizr"),(0,o.kt)("p",null,'Structurizr is a "Diagram as Code" tool that allows you to create architecture diagrams, focusing mainly on C4.\nAccording to ',(0,o.kt)("a",{parentName:"p",href:"https://structurizr.com"},"structurizr"),"structurizr allows you to create multiple diagrams from single model. The tool was designed to support C4."),(0,o.kt)("p",null,"For example, this code creates the design below the code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'workspace {\n\n    model {\n        user = person "User"\n        softwareSystem = softwareSystem "Software System" {\n            webapp = container "Web Application" {\n                user -> this "Uses"\n            }\n            container "Database" {\n                webapp -> this "Reads from and writes to"\n            }\n        }\n    }\n\n    views {\n        systemContext softwareSystem {\n            include *\n            autolayout lr\n        }\n\n        theme default\n    }\n\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"structurizr",src:n(6817).Z})),(0,o.kt)("p",null,"Structurizr support other architecture artifacts including ADR as illustrated on ",(0,o.kt)("a",{parentName:"p",href:"https://structurizr.com/share/39459/decisions/adr-tools"},"structurizr"),"."),(0,o.kt)("p",null,"The tool is not free, check out ",(0,o.kt)("a",{parentName:"p",href:"https://structurizr.com/pricing"},"pricing")),(0,o.kt)("h3",{id:"plant-uml"},"Plant UML"),(0,o.kt)("p",null,"PlantUML is an open-source tool that allows users to create diagrams as code.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/plantuml-stdlib/C4-PlantUML"},"C4-PlantUml")," package brings C4 into plantuml. "),(0,o.kt)("p",null,"This code creates the picture below the code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@startuml C4_Elements\n!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml\n\nPerson(personAlias, "Label", "Optional Description")\nContainer(containerAlias, "Label", "Technology", "Optional Description")\nSystem(systemAlias, "Label", "Optional Description")\n\nRel(personAlias, containerAlias, "Label", "Optional Technology")\n@enduml\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"plantUmlSample",src:n(2066).Z})),(0,o.kt)("p",null,"More information on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/plantuml-stdlib/C4-PlantUML"},"Github")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"C4 diagrams can be created using any tool. The most important thing is to follow the notation. I use Gliffy or DrawIO for diagrams with short life span or for clarificaiton in a workshop session."),(0,o.kt)("p",null,"I'm currently using C4-PlatUml which allows me to define all components (System, persons, containers) in a a base file and reuse them in multiple diagrams.\nReuse is very important because components has descriptions that changes as I get clarifications. Changing description in one place and getting to reflect in multiple diagrams is cool."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"#1: ",(0,o.kt)("a",{parentName:"p",href:"https://www.infoq.com/articles/C4-architecture-model/"},"https://www.infoq.com/articles/C4-architecture-model/")),(0,o.kt)("p",null,"#2: ",(0,o.kt)("a",{parentName:"p",href:"https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/"},"https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/")),(0,o.kt)("p",null,"#3: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/plantuml-stdlib/C4-PlantUML"},"https://github.com/plantuml-stdlib/C4-PlantUML")))}d.isMDXComponent=!0},2195:function(e,t,n){t.Z=n.p+"assets/images/c4notation-db7c287cd171c22cf3cbb75d6b920d44.jpeg"},2066:function(e,t,n){t.Z=n.p+"assets/images/plantUmlSample-efb2c0dd0b9e5d5030756137c1cc8150.png"},6817:function(e,t,n){t.Z=n.p+"assets/images/structuruzrSample-9dae9f444a6dea71b1014c6c33dd66d0.png"}}]);