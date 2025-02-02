"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[3215],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>c});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},h=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=g(i),c=r,p=d["".concat(s,".").concat(c)]||d[c]||u[c]||a;return i?n.createElement(p,l(l({ref:t},h),{},{components:i})):n.createElement(p,l({ref:t},h))}));function c(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var g=2;g<a;g++)l[g]=i[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},624:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var n=i(7462),r=(i(7294),i(3905));const a={slug:"buildrightthingright",title:"Software that serves users and developers",authors:"nolo",tags:["architecture","design","planning","strategy"]},l=void 0,o={permalink:"/blog/buildrightthingright",source:"@site/blog/2022-07-17-buldrightthingright.md",title:"Software that serves users and developers",description:"rightandwrong",date:"2022-07-17T00:00:00.000Z",formattedDate:"July 17, 2022",tags:[{label:"architecture",permalink:"/blog/tags/architecture"},{label:"design",permalink:"/blog/tags/design"},{label:"planning",permalink:"/blog/tags/planning"},{label:"strategy",permalink:"/blog/tags/strategy"}],readingTime:5.08,hasTruncateMarker:!0,authors:[{name:"Nolo Mokgosi",title:"admin",url:"https://github.com/nolo28mokgosi",imageURL:"/img/profile.png",key:"nolo"}],frontMatter:{slug:"buildrightthingright",title:"Software that serves users and developers",authors:"nolo",tags:["architecture","design","planning","strategy"]},prevItem:{title:"Business Capabilities Map",permalink:"/blog/businesscapabilities"},nextItem:{title:"Orchestration and Choreography",permalink:"/blog/orchestrationvschoreography"}},s={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"Building the right thing",id:"building-the-right-thing",level:3},{value:"Building the thing right",id:"building-the-thing-right",level:3},{value:"Building the right thing wrong",id:"building-the-right-thing-wrong",level:2},{value:"Building the wrong thing right",id:"building-the-wrong-thing-right",level:2},{value:"Reality",id:"reality",level:2},{value:"Solution",id:"solution",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Building wrong thing right",id:"building-wrong-thing-right",level:4},{value:"Building right thing wrong",id:"building-right-thing-wrong",level:4},{value:"Building right thing right",id:"building-right-thing-right",level:4},{value:"Reference",id:"reference",level:2}],h={toc:g};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rightandwrong",src:i(6797).Z,width:"640",height:"427"})),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"Geralt on pixabay")),(0,r.kt)("p",null,"I recently listened to InfoQ podcast where Susanne Kaiser spoke about DDD, Wardley Mapping & Team topologies. Responding to one of the questions she said, \u201cwhen we are building systems in general, we are faced with challenges of building the right thing and building the thing right.\u201d"),(0,r.kt)("p",null,"I was fascinated by how swapping two words, \u201cwrong\u201d and \u201cright,\u201d makes such a huge difference, and I decided to dig deep."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This post unpacks the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Building the right thing (serving the users). "),(0,r.kt)("li",{parentName:"ul"},"Building the thing right (serving the developers)."),(0,r.kt)("li",{parentName:"ul"},"Building the right thing wrong (serving the users, excluding developers)."),(0,r.kt)("li",{parentName:"ul"},"Building the wrong thing right(serving the developers, excluding users).")),(0,r.kt)("h3",{id:"building-the-right-thing"},"Building the right thing"),(0,r.kt)("p",null,"According to Susanne, building the right thing (serving the users) raises questions such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How aligned is our solution with the users' needs?"),(0,r.kt)("li",{parentName:"ul"},"How aligned is our solution with the business need?"),(0,r.kt)("li",{parentName:"ul"},"Is the thing we are building valuable for our clients?"),(0,r.kt)("li",{parentName:"ul"},"Do we have understand the problem, and do we share common understanding with all stakeholders? ")),(0,r.kt)("h3",{id:"building-the-thing-right"},"Building the thing right"),(0,r.kt)("p",null,"Building the thing right (serving the developers) focuses on the qualities of the thing we are building. Some call them non-functional requirements, or the \u201cilities\u201d of the software, such as scalability, reliability, maintainability, security etc. It also focuses on regulation and organisational governance processes."),(0,r.kt)("p",null,"According to Susanne, building the thing right addresses the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Efficiency of engineering practices e.g. CI-CD, Automated testing."),(0,r.kt)("li",{parentName:"ul"},"Efficiency to deliver value."),(0,r.kt)("li",{parentName:"ul"},"How fast and easy can we deliver the changes.")),(0,r.kt)("p",null,'In one of his podcast, Dave Furley said, "The quality of the software we build is defined by our ability to change the system."'),(0,r.kt)("h2",{id:"building-the-right-thing-wrong"},"Building the right thing wrong"),(0,r.kt)("p",null,"Building the right thing wrong (serving the users, excluding developers) happens when we care and invest in the output, not how the thing is built. We focus on the deadline, ignoring the advice and recommendations from our technical team. We focus on popping champagne and giving great speeches on go-live day, forgetting that we need to build feature 2,3, 100 and more."),(0,r.kt)("p",null,"It is similar to building a house with wrong foundation. When the builder hands over the keys to the house owner (client), family and the builder pops champagne and upload pictures on Instagram. 2 years later, after few rainfalls, the lack of quality becomes evident, and house starts cracking.\n",(0,r.kt)("img",{alt:"wrongfoundation",src:i(6602).Z,width:"1024",height:"724"})),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"dryprosystems.com")),(0,r.kt)("h2",{id:"building-the-wrong-thing-right"},"Building the wrong thing right"),(0,r.kt)("p",null,"Building the wrong thing right (serving the developers, excluding users) is same as building the house adhering to all building qualities, but being impractical to live in."),(0,r.kt)("p",null,"When the builder hand over the key to the client, no one is popping champagne. The two parties engage in heated arguments."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Client: "What type of house is this? I mean how do you expect me to get my car in the garage?"'),(0,r.kt)("li",{parentName:"ul"},'Builder: "You wanted a garage with the ramp right? I built it to your specification. Exactly what you wanted and the foundation is very strong."'),(0,r.kt)("li",{parentName:"ul"},'Client: "Huuuuuusaaaaaa!"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"goodfoundation",src:i(8204).Z,width:"609",height:"500"})),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"imgflip.com")),(0,r.kt)("h2",{id:"reality"},"Reality"),(0,r.kt)("p",null,"Most organisations strive to build the right thing right. Reality is there are forces in play that disrupt the main objective. "),(0,r.kt)("p",null,"Some of this forces are created by the structure or divisions in the organisation. For example, consider an organisation with a sales team and technology team. In a case where by there's huge walls between this teams and both team are not interested on what other teams do and why, you end up with the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Sales team cares about "building the thing right."'),(0,r.kt)("li",{parentName:"ul"},'Technology team cares about "building the right thing.')),(0,r.kt)("p",null,"Due to these huge walls and 2 teams pulling opposite directions, you end up with one of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wrong thing built right (House with a weird garage ramp)"),(0,r.kt)("li",{parentName:"ol"},"Right thing built wrong (House with the wrong foundation)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"disagreement",src:i(9565).Z,width:"800",height:"593"})),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"time.com")),(0,r.kt)("h4",{id:"solution"},"Solution"),(0,r.kt)("p",null,"There are multiple solutions to this problem, with many case studies and books written on the topic. Some solution items include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breaking down the silos, or closing the gap between sales and technology teams."),(0,r.kt)("li",{parentName:"ul"},"T shaped individuals within the organisation.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sales teams understand the basics of what Technology team does."),(0,r.kt)("li",{parentName:"ul"},"Techonology team understand the basics of what Sales team does."))),(0,r.kt)("li",{parentName:"ul"},"Alignment and common understanding of the problem the organisation is trying to solve."),(0,r.kt)("li",{parentName:"ul"},"Teams in the organisation working towards common goal.")),(0,r.kt)("p",null,"In summary, this is what most startups got right and big organisation are still struggling to get right. "),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("h4",{id:"building-wrong-thing-right"},"Building wrong thing right"),(0,r.kt)("p",null,"Building wrong thing right means we are building something with no business value or benefits. We are showcasing our amazing technological skills, but the results are not relevant and might not be used by our clients."),(0,r.kt)("h4",{id:"building-right-thing-wrong"},"Building right thing wrong"),(0,r.kt)("p",null,"Building right thing wrong means we will end up with inflexible software with maintenance,scalability and adaptability issues. The minute it take long time to add small features to the system, we need to question if we built the thing wrong."),(0,r.kt)("p",null,"Building the thing wrong should not be confused with technical debt or transitional architecture. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Technical debt is something we are aware of and leave a room to refactor as we add more features."),(0,r.kt)("li",{parentName:"ul"},"Transitional architecture is delivery 1 of many deliverables.")),(0,r.kt)("p",null,"Technical debt and transitional architecture are normally driven by different constraints or forces like budget, cost or timelines."),(0,r.kt)("h4",{id:"building-right-thing-right"},"Building right thing right"),(0,r.kt)("p",null,"We always strive to build right thing right(serve both users and developers). It's our wish to build the right thing right however, experience and reality says otherwise. Constraints like cost, timelines can be the deciding factor. "),(0,r.kt)("p",null,"When we are faced with such constraints, the best approach is to avoid \u201cBuilding the ",(0,r.kt)("strong",{parentName:"p"},"whole")," thing right\u201d. Let's divide the ",(0,r.kt)("strong",{parentName:"p"},"whole")," thing into smaller deliveries and mode forward."),(0,r.kt)("p",null,'"The ultimate purpose of software is to serve users. But first, that same software should serve developers"~Eric Evans'),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"#1: ",(0,r.kt)("a",{parentName:"p",href:"https://www.infoq.com/podcasts/ddd-wardley-mapping-team-topologies/"},"DDD, Wardley Mapping & Team topologies")),(0,r.kt)("p",null,"#2: ",(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/non-functional-requirements-in-software-engineering/"},"Non-functional requirements in software engineering")))}u.isMDXComponent=!0},6797:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/blackbrown-ac76ae17fd0ed91618c155cb0fb94682.jpg"},9565:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/disagreement-14dcd9cf30785c885e19bc52158e3f15.webp"},8204:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/goodfoundation-df2c0af2e8eab2c4256e9f2e957104ee.jpg"},6602:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/wrongfoundation-29aadd2de4ae8117ac0923c25d7f1f6f.webp"}}]);