---
slug: sequencediagramonc4
title: Sequence on C4
authors: nolo
tags: [architecture, design, diagramming, modelling,c4]

---

## Introduction

 "Architects ride the Architect Elevator from the penthouse, where the business strategy is set, to the engine room, where the enabling technologies are implemented" ~ Gregor Hohpe

![Penthouse Elevator](/img/blog/elevator.jpeg)
<sub><sup>Credit roysrise.com</sup></sub>

<!--truncate-->

 C4 diagrams are some of the best artefacts to carry in your briefcase while riding the elevator up and down. Amongst other artefacts like conceptual design and business capability map, C4 context and container diagrams are perfect for the pent house discussion.

 The discussions with the engineers & analysts in the engine room needs a full story, from the top to the lower details. This is where we need artefacts that connects user journeys to technology components. The connection is established by creating communication diagram or sequence diagram.

This posts outlines how to create sequence diagram that aligns with a container diagram.

## Creating a Sequence diagram
In this section we'll create a sequence diagram for a registration process. We'll use and application called TravelSko with allows clients to manage their travel goals and calculates travel score from those records.

Before creating sequence diagram, we create context and container diagram to highlight the connection between 3 diagrams.

## Context Diagram
Application is simple and context diagram is self explanatory. Check out [previous post](https://nolomokgosi.com/blog/introductiontoc4) if you would like to know more about context diagram
![Context Diagram](/img/blog/tskoContext.png)


## Container Diagram
Check out [previous post](https://nolomokgosi.com/blog/introductiontoc4) if you would like to know more about container diagram

![Context Diagram](/img/blog/tskoContainer.png)


## Sequence diagram

![Sequence Diagram](/img/blog/tskoRegSequence.png)

To ensure that sequence diagram aligns we container diagram, we need to:
- Ensure all the containers in sequence diagram are in container diagram
- Box the containers in the application name if the sequence diagram includes more than one application
- Follow C4 colour concepts. External system should also be grey and keep containers blue

### Plant UML Code for the sequence diagram
```
@startuml
actor TSKO_Client

autonumber
title Registration Process

box "TravelSko Application" #FFFFFF
participant Mobile_App #66B2FF
participant Profile_Service #66B2FF
participant Database #66B2FF
participant Internal_Event_Stream #66B2FF
participant Communication_Handler #66B2FF
end box

participant Communication_Application #CCC

TSKO_Client -> Mobile_App: Create Account
Mobile_App -> Profile_Service: Send create account command
Profile_Service -> Database: Save account details
Profile_Service -> Internal_Event_Stream: Publish "AccountCreated" event
Internal_Event_Stream -> Communication_Handler: Publish "AccountCreated" event
Communication_Handler -> Communication_Handler: Create email from template
Communication_Handler -> Communication_Application: Send verification email
Communication_Application --> Communication_Handler: Send email response
Communication_Handler -> Database: Save communication response
@enduml
```

## Conclusion
Years ago if I had to choose between a sequence and communication diagram I always chose communication diagram. Since I started C4 I found it easy to create simple sequence diagrams derived from container diagram as highlighted in the previous session.

I prefer creating communication diagram at high-level interaction between applications. 

