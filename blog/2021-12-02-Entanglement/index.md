---
slug: entanglement
title: Entanglement
authors: nolo
tags: [architecture, design]
---

Imagine you are an engineer working in a application/system that has been operating for years. Your stakeholders asks  to implement a breaking change on the API.Assuming you joined the organisation less than a year ago, you ask around if anyone knows  about your API integration points and no one knows. You start feeling like an application you working on looks and feels like the picture below, "ENTANGLED".

![Cable Mess](./messy-cables.png)  
*Photo by mikemontague.com*
<!--truncate-->

## How do you know your application is entangled?
According to cambridge dictionary, entanglement is "a situation or relationship that you are involved in and that is difficult to escape from". The word was made popular in 2020 by famous couple in the US. In this document, we will discuss entaglement in IT applications. 

The minute you feel like you are diffusing a bomb when you are asked to implement a breaking changes on the API or switch off integration point, know that your application is entagled :smiley:.

![Diffuce bomb](./diffusebomb.jpg)  
*Photo by mikemontague.com*

## How to avoid entanglement
1. **Document current state of your application**  
There should be a simple highlevel documentation or design that outlines application integration points. It will also be beneficial to outline users/user groups interacting with the application.

2. **Keep you current state of your application alive**  
Documenting current state is one thing, keeping documentation alive is always a challenge.
I've worked on [C4](https://c4model.com) and love it. It's simple, maintainable especially if you focus only at "System Context" for organisation wide designs.

3. **Agree to certain format**  
Fact is different designers/architects/engineers document differently. There is a chance that most application have documentation somewhere in archives in word documents, wiki of some sort. We might be outdated, or might be difficult to find, or difficult to understand. Choose from formats/frameworks like [C4](https://c4model.com) and [4+1](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf)) 

4. **Be clear on design assets of the organisation**  
Code in organisation is treated as a first class citizen. Gone are the days where we used to panic when engineer's machine crashed and we loose days worth of code. Nowadays our code is in the repo, and we have CI/CD in place.
Just like code where we adhere to certain principles & standandards, it is important to agree on organisation level design assest, and give them first class citizen membership.

5. **Current state documenation must be accessible**
Current state provide answers to many questions asked in multiple meetings. Instead or reinventing the wheel or getting right people to answer questions like what are the integration points of the appliction? How do they integrate? Which users interact with the application? It's so cool to answer by a link to an up-to-date documentation/design.

## Conclusion
One might ask, why do we need to create more documents/design assets if we can read code and have a clear pictures. Statement is valid but it is important to remember that: 

- Sometimes we need answers in our finger tips to make decisions
- Applications we are building today will live beyond our time (we might leave the orgnisation, or join other teams)
- Applications you working on is part of the broader eco-system of applications
- It helps to provide basic application information to decision makers, non-techincal community within our organisation

If you would like to take it to the next level, checkout [Bounded Context Canvas](https://github.com/ddd-crew/bounded-context-canvas). 


