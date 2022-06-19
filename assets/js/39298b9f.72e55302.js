"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[570],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={slug:"orchestrationvschoreography",title:"Orchestration and Choreography",authors:"nolo",tags:["architecture","design"]},s=void 0,l={permalink:"/blog/orchestrationvschoreography",source:"@site/blog/2022-06-17-orchestrationvschoreography.md",title:"Orchestration and Choreography",description:"Introduction",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"architecture",permalink:"/blog/tags/architecture"},{label:"design",permalink:"/blog/tags/design"}],readingTime:3.8,truncated:!0,authors:[{name:"Nolo Mokgosi",title:"admin",url:"https://github.com/nolo28mokgosi",imageURL:"/img/profile.png",key:"nolo"}],nextItem:{title:"Creating C4 diagrams",permalink:"/blog/createC4diagrams"}},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",children:[],level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"I have been involved in multiple orchestration vs choreography conversation. Conversation are normally about which one is better. At the end of most conversations, there\u2019s no common ground, all goes down to preference. "),(0,a.kt)("p",null,"One Friday morning on my way to work I listened to ",(0,a.kt)("a",{parentName:"p",href:"https://www.infoq.com/podcasts/design-time-coupling-microservices/"},"Design time coupling in microservices")," podcast and Chris Richardson touched on this subject. When the host asked him to talk about orchestration and choreography he said \u201cI use those terms in the context of a saga pattern\u201d.\nThat\u2019s when the penny dropped and I thought...this makes sense."),(0,a.kt)("p",null,"In this post I will define these concepts and explain the relation between saga,orchestration and choreography."))}m.isMDXComponent=!0}}]);