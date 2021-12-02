"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"entanglement","metadata":{"permalink":"/blog/entanglement","source":"@site/blog/2021-12-02-Entanglement/index.md","title":"Entanglement","description":"Imagine you are an engineer working in a application/system that has been operating for years. Your stakeholders asks  to implement a breaking change on the API.Assuming you joined the organisation less than a year ago, you ask around if anyone knows  about your API integration points and no one knows. You start feeling like an application you working on looks and feels like the picture below, \\"ENTANGLED\\".","date":"2021-12-02T00:00:00.000Z","formattedDate":"December 2, 2021","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"}],"readingTime":2.755,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}]},"content":"Imagine you are an engineer working in a application/system that has been operating for years. Your stakeholders asks  to implement a breaking change on the API.Assuming you joined the organisation less than a year ago, you ask around if anyone knows  about your API integration points and no one knows. You start feeling like an application you working on looks and feels like the picture below, \\"ENTANGLED\\".\\n\\n![Cable Mess](./messy-cables.png)  \\n*Photo by mikemontague.com*\\n\x3c!--truncate--\x3e\\n\\n## How do you know your application is entangled?\\nAccording to cambridge dictionary, entanglement is \\"a situation or relationship that you are involved in and that is difficult to escape from\\". The word was made popular in 2020 by famous couple in the US. In this document, we will discuss entaglement in IT applications. \\n\\nThe minute you feel like you are diffusing a bomb when you are asked to implement a breaking changes on the API or switch off integration point, know that your application is entagled :smiley:.\\n\\n![Diffuce bomb](./diffusebomb.jpg)  \\n*Photo by mikemontague.com*\\n\\n## How to avoid entanglement\\n1. **Document current state of your application**  \\nThere should be a simple highlevel documentation or design that outlines application integration points. It will also be beneficial to outline users/user groups interacting with the application.\\n\\n2. **Keep you current state of your application alive**  \\nDocumenting current state is one thing, keeping documentation alive is always a challenge.\\nI\'ve worked on [C4](https://c4model.com) and love it. It\'s simple, maintainable especially if you focus only at \\"System Context\\" for organisation wide designs.\\n\\n3. **Agree to certain format**  \\nFact is different designers/architects/engineers document differently. There is a chance that most application have documentation somewhere in archives in word documents, wiki of some sort. We might be outdated, or might be difficult to find, or difficult to understand. Choose from formats/frameworks like [C4](https://c4model.com) and [4+1](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf)) \\n\\n4. **Be clear on design assets of the organisation**  \\nCode in organisation is treated as a first class citizen. Gone are the days where we used to panic when engineer\'s machine crashed and we loose days worth of code. Nowadays our code is in the repo, and we have CI/CD in place.\\nJust like code where we adhere to certain principles & standandards, it is important to agree on organisation level design assest, and give them first class citizen membership.\\n\\n5. **Current state documenation must be accessible**\\nCurrent state provide answers to many questions asked in multiple meetings. Instead or reinventing the wheel or getting right people to answer questions like what are the integration points of the appliction? How do they integrate? Which users interact with the application? It\'s so cool to answer by a link to an up-to-date documentation/design.\\n\\n## Conclusion\\nOne might ask, why do we need to create more documents/design assets if we can read code and have a clear pictures. Statement is valid but it is important to remember that: \\n\\n- Sometimes we need answers in our finger tips to make decisions\\n- Applications we are building today will live beyond our time (we might leave the orgnisation, or join other teams)\\n- Applications you working on is part of the broader eco-system of applications\\n- It helps to provide basic application information to decision makers, non-techincal community within our organisation\\n\\nIf you would like to take it to the next level, checkout [Bounded Context Canvas](https://github.com/ddd-crew/bounded-context-canvas)."}]}')}}]);