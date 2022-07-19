---
slug: buildrightthingright
title: Bulding right thing right
authors: nolo
tags: [architecture, design, planning, strategy]

---

![rightandwrong](/img/blog/rightandwrong.webp)
<sub><sup>fee.org</sup></sub>

I recently listened to InfoQ podcast where Susanne Kaiser spoke about DDD, Wardley Mapping & Team topologies. Responding to one of the questions she said, “when we are building systems in general, we are faced with challenges of building the right thing and building the thing right”.

I was fascinated by the use of the words “wrong” and “right” and I decided to dig deep.

<!--truncate-->

## Introduction
This post unpacks the following:
- Building the right thing. 
- Building the thing right.
- Building the right thing wrong.
- Building the wrong thing right.



### Building the right thing
According to Susanne, building the right thing questions:
- How aligned is our solution to the users needs?
- How aligned is our solution to the business need?
- Is the thing we are building valuable for our client?
- Do we have understand the problem and do we share common understanding with all stakeholders? 


### Building the thing right 
Building the right thing focuses on the qualities of the thing we are building. Some call them non-functional requirement, or the “ilities” of the software e.g. scalability, reliability, maintainability, security etc. It also focuses on regulation and organisational governance processes.

According to Susanne, building the thing right addresses the following:
- Efficiency of engineering practices e.g. CI-CD, Automated testing
- Efficiency to deliver value.
- How fast and easy can we deliver the changes.


## Building the right thing wrong
Building the right thing wrong happens when we care and invest on the output, not how the thing is built.

It is the same as building the house with wrong foundation. When the builder hands over the keys to the house owner (client), family and the builder pops champagne and upload pictures on Instagram. 2 years later after few rainfalls, the lack of quality pops up and house starts cracking. 
![wrongfoundation](/img/blog/wrongfoundation.webp)
<sub><sup>dryprosystems.com</sup></sub>


## Building the wrong thing right
Building the wrong thing right is same as building the house adhereing to all building qualities, but impractical to live in.
 
When the builder hand over the key to the client, no one is popping champagne. The 2 parties engage in heated argument
- Client: What type of house is this? I mean how do you expect me to get my car in the garage?
- Builder: You wanted a garage with the ramp right? I built it to your specification. Exactly what you wanted and the foundation is very strong.
- Client: Huuuuuusaaaaaa!

![goodfoundation](/img/blog/goodfoundation.jpg)
<sub><sup>imgflip.com</sup></sub>


## Reality
Most organisations strive to build the right thing right. Reality is there are forces in play that disrupts the main objective. 

Some of this forces are created by the structure or divisions in the organisation. For example, take an organisation that has a sales team and technology team. In a case where by there's huge walls between this teams and both team are not interested on what other teams do and why, you end up with the following:
- Sales team cares about: Building the thing right.
- Technology team cares about : Building the right thing.

As an organisation, you'll have 2 teams pulling opposite directions which leads to:
1. Wrong thing built right (House with weird garage ramp)
2. Right thing built wrong (House with wrong foundation)



![disagreement](/img/blog/disagreement.webp)
<sub><sup>time.com</sup></sub>

#### Solution
There are multiple solutions to this problem. There are lots of case studies and books written. Some of solution items includes:
- Breaking down the silos between sales and technology.
- T shaped individuals within the organisation.
    - Sales teams understand the basics of what Technology team does.
    - Techonology team understand the basics of what Sales team does.
- Alignment and common understading of the problem the organisation is trying to solve.
- Teams in the organisation working towards common goal.

In summary, this is what most startups got right and big organisation are still struggling to get right. 

## Conclusion

#### Building wrong thing right
I’m not a fan of building the wrong thing right. It means we are building something for the sake of building. We are showing off our amazing technology skills but the results are not relevant and might not be used by our customers.

#### Building right thing wrong
Sometimes it is ok to build right thing wrong “PROVIDED” we are aware and what we deem wrong is reversable. 

Different constraints can lead us to this route
- Budget or Cost
- Timelines
- MVP (testing the waters)

Based on those trade-offs, we can be comfortable with version 0.01 of what we are building knowing that we will fix where necessary.

#### Building right thing right
We always strive to build right thing right. It's our wish to build the right thing right however, experience and reality says otherwise. Constraints like cost, timelines can be the deciding factor. 

When we are faced with such contraints, the best approach is to avoid “Building the **whole** thing right”. Let's divide the **whole** thing into smaller deliveries and crack on.
 

## Reference
#1: [DDD, Wardley Mapping & Team topologies](https://www.infoq.com/podcasts/ddd-wardley-mapping-team-topologies/)

#2: [Non-functional requirements in software engineering](https://www.geeksforgeeks.org/non-functional-requirements-in-software-engineering/)