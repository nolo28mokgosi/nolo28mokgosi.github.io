---
slug: buildrightthingright
title: Software that serves users and developers
authors: nolo
tags: [architecture, design, planning, strategy]

---

![rightandwrong](/img/blog/blackbrown.jpg)
<sub><sup>Geralt on pixabay</sup></sub>

I recently listened to InfoQ podcast where Susanne Kaiser spoke about DDD, Wardley Mapping & Team topologies. Responding to one of the questions she said, “when we are building systems in general, we are faced with challenges of building the right thing and building the thing right.”

I was fascinated by how swapping two words, “wrong” and “right,” makes such a huge difference, and I decided to dig deep.

<!--truncate-->

## Introduction
This post unpacks the following:
- Building the right thing (serving the users). 
- Building the thing right (serving the developers).
- Building the right thing wrong (serving the users, excluding developers).
- Building the wrong thing right(serving the developers, excluding users).



### Building the right thing
According to Susanne, building the right thing (serving the users) raises questions such as:
- How aligned is our solution with the users' needs?
- How aligned is our solution with the business need?
- Is the thing we are building valuable for our clients?
- Do we have understand the problem, and do we share common understanding with all stakeholders? 


### Building the thing right 
Building the thing right (serving the developers) focuses on the qualities of the thing we are building. Some call them non-functional requirements, or the “ilities” of the software, such as scalability, reliability, maintainability, security etc. It also focuses on regulation and organisational governance processes.

According to Susanne, building the thing right addresses the following:
- Efficiency of engineering practices e.g. CI-CD, Automated testing.
- Efficiency to deliver value.
- How fast and easy can we deliver the changes.

In one of his podcast, Dave Furley said, "The quality of the software we build is defined by our ability to change the system."


## Building the right thing wrong
Building the right thing wrong (serving the users, excluding developers) happens when we care and invest in the output, not how the thing is built. We focus on the deadline, ignoring the advice and recommendations from our technical team. We focus on popping champagne and giving great speeches on go-live day, forgetting that we need to build feature 2,3, 100 and more.

It is similar to building a house with wrong foundation. When the builder hands over the keys to the house owner (client), family and the builder pops champagne and upload pictures on Instagram. 2 years later, after few rainfalls, the lack of quality becomes evident, and house starts cracking. 
![wrongfoundation](/img/blog/wrongfoundation.webp)
<sub><sup>dryprosystems.com</sup></sub>


## Building the wrong thing right
Building the wrong thing right (serving the developers, excluding users) is same as building the house adhering to all building qualities, but being impractical to live in.
 
When the builder hand over the key to the client, no one is popping champagne. The two parties engage in heated arguments.
- Client: "What type of house is this? I mean how do you expect me to get my car in the garage?"
- Builder: "You wanted a garage with the ramp right? I built it to your specification. Exactly what you wanted and the foundation is very strong."
- Client: "Huuuuuusaaaaaa!"

![goodfoundation](/img/blog/goodfoundation.jpg)
<sub><sup>imgflip.com</sup></sub>


## Reality
Most organisations strive to build the right thing right. Reality is there are forces in play that disrupt the main objective. 

Some of this forces are created by the structure or divisions in the organisation. For example, consider an organisation with a sales team and technology team. In a case where by there's huge walls between this teams and both team are not interested on what other teams do and why, you end up with the following:
- Sales team cares about "building the thing right."
- Technology team cares about "building the right thing.

Due to these huge walls and 2 teams pulling opposite directions, you end up with one of the following:
1. Wrong thing built right (House with a weird garage ramp)
2. Right thing built wrong (House with the wrong foundation)



![disagreement](/img/blog/disagreement.webp)
<sub><sup>time.com</sup></sub>

#### Solution
There are multiple solutions to this problem, with many case studies and books written on the topic. Some solution items include:
- Breaking down the silos, or closing the gap between sales and technology teams.
- T shaped individuals within the organisation.
    - Sales teams understand the basics of what Technology team does.
    - Techonology team understand the basics of what Sales team does.
- Alignment and common understanding of the problem the organisation is trying to solve.
- Teams in the organisation working towards common goal.

In summary, this is what most startups got right and big organisation are still struggling to get right. 

## Conclusion

#### Building wrong thing right
Building wrong thing right means we are building something with no business value or benefits. We are showcasing our amazing technological skills, but the results are not relevant and might not be used by our clients.

#### Building right thing wrong
Building right thing wrong means we will end up with inflexible software with maintenance,scalability and adaptability issues. The minute it take long time to add small features to the system, we need to question if we built the thing wrong.

Building the thing wrong should not be confused with technical debt or transitional architecture. 
- Technical debt is something we are aware of and leave a room to refactor as we add more features.
- Transitional architecture is delivery 1 of many deliverables.

Technical debt and transitional architecture are normally driven by different constraints or forces like budget, cost or timelines.

#### Building right thing right
We always strive to build right thing right(serve both users and developers). It's our wish to build the right thing right however, experience and reality says otherwise. Constraints like cost, timelines can be the deciding factor. 

When we are faced with such constraints, the best approach is to avoid “Building the **whole** thing right”. Let's divide the **whole** thing into smaller deliveries and mode forward.

"The ultimate purpose of software is to serve users. But first, that same software should serve developers"~Eric Evans
 

## Reference
#1: [DDD, Wardley Mapping & Team topologies](https://www.infoq.com/podcasts/ddd-wardley-mapping-team-topologies/)

#2: [Non-functional requirements in software engineering](https://www.geeksforgeeks.org/non-functional-requirements-in-software-engineering/)