---
slug: orchestrationvschoreography
title: Orchestration and Choreography
authors: nolo
tags: [architecture, design]

---

## Introduction

I have been involved in multiple orchestration vs choreography conversation. Conversation are normally about which one is better. At the end of most conversations, there’s no common ground, all goes down to preference. 

One Friday morning on my way to work I listened to [Design time coupling in microservices](https://www.infoq.com/podcasts/design-time-coupling-microservices/) podcast and Chris Richardson touched on this subject. When the host asked him to talk about orchestration and choreography he said “I use those terms in the context of a saga pattern”.
That’s when the penny dropped and I thought...this makes sense.

In this post I will define these concepts and explain the relation between saga,orchestration and choreography. 
<!--truncate-->

## Saga Pattern

Saga is a sequence of transactions that updates services. Each service publishes a message or event to trigger the next transaction in the saga [#2].
Saga provides transaction management using sequence of local transactions [#3].
 
Transaction is single unit of logic or work. Transaction can have one or more operations which we’ll refer to as local transactions in this post.

Let’s take an example where a user books a holiday via a web portal. Booking process will include:
1. Request booking
2. Making payment 
3. Send confirmation email

There are 2 ways to design the system:
1. Single service that perform all operations at once. Example, 2 phase commit (2PC) type of transaction where all services in the transaction are required to commit or rollback before transaction can commit.

![2pc transaction](/img/blog/transaction-2pc.png)

2. Multiple services performing local transactions (Saga Pattern).

![2pc transaction](/img/blog/transaction-saga.png)

There are 2 ways to implement a saga pattern, orchestration-based and choreography-based. 

## Orchestration
According to Cambridge dictionary, orchestration is “an arrangement of a piece of music to be played by an orchestra”.

When I think of orchestration, I see a group of musicians with their different instruments, playing a melodic tune that touches the heart. I also see a conductor, someone who directs the orchestra with a conducting baton.
![ochestraonstrage](/img/blog/orchestra.jpg)
<sub><sup>sso.org</sup></sub>

### Orchestration-based Saga
In orchestration-based saga, a centralised controller(orchestrator) tells services(saga participants) what local transactions to execute [#3]. The orchestrator then interprets state of each operation based on the feedback from the participant.

![choreographysaga](/img/blog/orchestration-design.png)

#### Advantages
1. Great for complex workflows with multiple services including long running local transactions.
2. Services participating in a workflow don't need to know about commands from other participants.
3. Single point to track the saga workflow

#### Disadvantages
1. Centralised coordinator adds another point of failure in the system
2. New coordinated design requires additional centralised service.  

## Choreography
According to Cambridge dictionary, choreography is “the skill of combining movements into dances to be performed”.
When I think of choreography I see group of dancers on stage, dancing to music in a well coordinated manner. Each dancer on the stage knows what to do. There is no central point to drive or command.


![choreographers](/img/blog/choreographers.jpg)
<sub><sup>countrytimes.co.uk</sup></sub>

### Choreography based saga
In choreography-based saga, services(saga participants) exchange messages or events without a centralised point of control. Each service publishes events that triggers activities in other services.**Note** Published event can trigger acitivities in multiple services.

![choreographysaga](/img/blog/choreography-design.png)

#### Advantages
1. Good for workflows that do not need  coordination logic.
2. Unlike orchestrations-based, it does not require additional additional service implementation.
3. Responsibilities are distributed across services participating in the saga therefore .

#### Disadvantages
1. It can be difficult to track which services listen to which commands.
2. Confusion when adding new services in the workflow.


## Conclusion

It is a good idea to look at orchestration and choreography as descendants of a saga pattern. This way it forces us to ask ourselves questions like:
1. What process/workflow are trying to create?
2. What activities do we want to trigger when "X" happens?

There's slight difference in terms of type of messages being exchanged between the patterns.
Orchestration-based saga utilised commands more and choreography-based saga can operate on events only. 

There’s no right or wrong in both orchestration and choreography. Both approaches works but it’s important to look at pros & cons for both. It’s also important to consider factors around implementing a saga pattern including:
1. Data consistency for processes spanning multiple services [#3].
2. Maintainability and ability to debug as more services are added in the process.
3. Idempotence to ensure data consistency and reduce side-effects.
4. Observability implementation is key.
5. Ability to track workflows.
6. Compensating transactions to undo changes that were made by other transactions.

## Reference
#1 InfoQ's [Chris Richardson on Design-Time Coupling in Microservices](https://www.infoq.com/podcasts/design-time-coupling-microservices/)

#2  [Patterns: Saga](https://microservices.io/patterns/data/saga.html) by miroservices.io

#3 Microsoft's [Saga distributed transactions pattern](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga)
