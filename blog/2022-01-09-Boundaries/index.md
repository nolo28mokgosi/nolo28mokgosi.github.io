---
slug: understandingboundaries
title: Understanding Boundaries
authors: nolo
tags: [architecture, design, Domain Driven Design]

---
"One of the undecided problems of software development is deciding what the boundaries of a piece of software is" - [Martin Fowler](https://martinfowler.com/bliki/ApplicationBoundary.html). This is statement is so true, creeps into most of my design conversation. 

![Cable Mess](/img/blog/boundaries.jpg)

*Photo by goodtherapy.org*
<!--truncate-->

If we step out of tech world for a moment, we'll realise that boundaries are applied in our everyday life. Some of those boundaries has unwritten rules or principles.

Let's zoom into John's life as an example. John is a 14 year old boy who lives with his parents and younger sister in a 4 bedroom house. He loves football and has posters all over the bedroom he shares with his younger sister. John's mother is strict and likes order in her house. John's father is chilled. 



## John's house

- **Bedroom 1:** Parents bedroom, always clean and organised. It is clear that mother's standards and principles are followed.
- **Bedroom 2:** A room John shares with his sister. Through constant screaming and ruling with terror, John's mother tried to instill her standards and principles and failed dismallly. John implemented his own standard & principles

- **Kitchen & Lounge:** Just like John's parents bedroom, always organised. It is clear that mother's standards and principles are followed. Kitchen is for cooking. Lounge is where family watches 7de laan everyday at 7. 

Looking at this example, and zooming into our everyday life, you will realise our space has boundaries and most of the rules or principles are not written down. For example, only sleep in the bedroom, cook in the kitchen.


## In Software World

In large organisations where teams write software each and every day, it is important to define and document boundaries. Since teams have different stakeholders, you might find teams writing duplicate capabilities in the same organisation. 

Take this example: 
- Stakeholder: Can you create a screen where i can manage client data?
- Engineer: Say no more.
- Stakeholder: I would like to send an email to client after completing this task.
- Engineer: I got it, its a simple functionality to build.
- Stakeholder: Can you make sure that I can see all the holidays on the system?
- Engineer: We know what to to build. We'll be done next week. 

In this case, tech team is writing software to fulfil stakeholder needs without checking if the capablility exists in the organisation. Since  boundaries are not applied, the team will end up with an application that manages client data, execute client communications & managing holiday data. 

It does not mean it's bad to have such application. It's only bad if the boundary is not defined, it's done in isolation or leads to refactoring and data clean up projects in future. 
 
## Conclusion
Defining boundaries in large organisations can be a difficult task but it is a good investment.

 The absence of software or application boundaries leads to
 - Data being duplicated & managed in different applications.
 - Increase in cost at organisational level
 - Bad client experience e.g. where client updates address or contact details and the update does not filter down to other applications

The results of boundary definition exercise should include this major points:
- Application is responsible for ABC capability/function
- Application is NOT responsible for XYZ capability/function

[Team Topologies](https://teamtopologies.com/book) and [Domain Driven Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215) books shines the light in this subject. 






