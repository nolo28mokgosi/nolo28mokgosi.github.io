"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[3608],{3012:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(7294),n=a(4814),l=a(9960),c=a(5999);function i(e){var t=e.year,a=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function o(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(i,e))})))))}function m(e){var t,a,l=e.archive,i=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),m=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=(t=l.blogPosts,a=t.reduceRight((function(e,t){var a=t.metadata.date.split("-")[0],r=e.get(a)||[];return e.set(a,[t].concat(r))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(n.Z,{title:i,description:m},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},i),r.createElement("p",{className:"hero__subtitle"},m))),r.createElement("main",null,s.length>0&&r.createElement(o,{years:s})))}}}]);