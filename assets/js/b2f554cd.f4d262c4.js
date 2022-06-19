"use strict";(self.webpackChunknolo_28_mokgosi=self.webpackChunknolo_28_mokgosi||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"orchestrationvschoreography","metadata":{"permalink":"/blog/orchestrationvschoreography","source":"@site/blog/2022-06-17-orchestrationvschoreography.md","title":"Orchestration and Choreography","description":"Introduction","date":"2022-06-17T00:00:00.000Z","formattedDate":"June 17, 2022","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"}],"readingTime":3.8,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}],"nextItem":{"title":"Creating C4 diagrams","permalink":"/blog/createC4diagrams"}},"content":"## Introduction\\n\\nI have been involved in multiple orchestration vs choreography conversation. Conversation are normally about which one is better. At the end of most conversations, there\u2019s no common ground, all goes down to preference. \\n\\nOne Friday morning on my way to work I listened to [Design time coupling in microservices](https://www.infoq.com/podcasts/design-time-coupling-microservices/) podcast and Chris Richardson touched on this subject. When the host asked him to talk about orchestration and choreography he said \u201cI use those terms in the context of a saga pattern\u201d.\\nThat\u2019s when the penny dropped and I thought...this makes sense.\\n\\nIn this post I will define these concepts and explain the relation between saga,orchestration and choreography. \\n\x3c!--truncate--\x3e\\n\\n## Saga Pattern\\n\\nSaga is a sequence of transactions that updates services. Each service publishes a message or event to trigger the next transaction in the saga [#2].\\nSaga provides transaction management using sequence of local transactions [#3].\\n \\nTransaction is single unit of logic or work. Transaction can have one or more operations which we\u2019ll refer to as local transactions in this post.\\n\\nLet\u2019s take an example where a user books a holiday via a web portal. Booking process will include:\\n1. Request booking\\n2. Making payment \\n3. Send confirmation email\\n\\nThere are 2 ways to design the system:\\n1. Single service that perform all operations at once. Example, 2 phase commit (2PC) type of transaction where all services in the transaction are required to commit or rollback before transaction can commit.\\n\\n![2pc transaction](/img/blog/transaction-2pc.png)\\n\\n2. Multiple services performing local transactions (Saga Pattern).\\n\\n![2pc transaction](/img/blog/transaction-saga.png)\\n\\nThere are 2 ways to implement a saga pattern, orchestration-based and choreography-based. \\n\\n## Orchestration\\nAccording to Cambridge dictionary, orchestration is \u201can arrangement of a piece of music to be played by an orchestra\u201d.\\n\\nWhen I think of orchestration, I see a group of musicians with their different instruments, playing a melodic tune that touches the heart. I also see a conductor, someone who directs the orchestra with a conducting baton.\\n![ochestraonstrage](/img/blog/orchestra.jpg)\\n<sub><sup>sso.org</sup></sub>\\n\\n### Orchestration-based Saga\\nIn orchestration-based saga, a centralised controller(orchestrator) tells services(saga participants) what local transactions to execute [#3]. The orchestrator then interprets state of each operation based on the feedback from the participant.\\n\\n![choreographysaga](/img/blog/orchestration-design.png)\\n\\n#### Advantages\\n1. Great for complex workflows with multiple services including long running local transactions.\\n2. Services participating in a workflow don\'t need to know about commands from other participants.\\n3. Single point to track the saga workflow\\n\\n#### Disadvantages\\n1. Centralised coordinator adds another point of failure in the system\\n2. New coordinated design requires additional centralised service.  \\n\\n## Choreography\\nAccording to Cambridge dictionary, choreography is \u201cthe skill of combining movements into dances to be performed\u201d.\\nWhen I think of choreography I see group of dancers on stage, dancing to music in a well coordinated manner. Each dancer on the stage knows what to do. There is no central point to drive or command.\\n\\n\\n![choreographers](/img/blog/choreographers.jpg)\\n<sub><sup>countrytimes.co.uk</sup></sub>\\n\\n### Choreography based saga\\nIn choreography-based saga, services(saga participants) exchange messages or events without a centralised point of control. Each service publishes events that triggers activities in other services.**Note** Published event can trigger acitivities in multiple services.\\n\\n![choreographysaga](/img/blog/choreography-design.png)\\n\\n#### Advantages\\n1. Good for workflows that do not need  coordination logic.\\n2. Unlike orchestrations-based, it does not require additional additional service implementation.\\n3. Responsibilities are distributed across services participating in the saga therefore .\\n\\n#### Disadvantages\\n1. It can be difficult to track which services listen to which commands.\\n2. Confusion when adding new services in the workflow.\\n\\n\\n## Conclusion\\n\\nIt is a good idea to look at orchestration and choreography as descendants of a saga pattern. This way it forces us to ask ourselves questions like:\\n1. What process/workflow are trying to create?\\n2. What activities do we want to trigger when \\"X\\" happens?\\n\\nThere\'s slight difference in terms of type of messages being exchanged between the patterns.\\nOrchestration-based saga utilised commands more and choreography-based saga can operate on events only. \\n\\nThere\u2019s no right or wrong in both orchestration and choreography. Both approaches works but it\u2019s important to look at pros & cons for both. It\u2019s also important to consider factors around implementing a saga pattern including:\\n1. Data consistency for processes spanning multiple services [#3].\\n2. Maintainability and ability to debug as more services are added in the process.\\n3. Idempotence to ensure data consistency and reduce side-effects.\\n4. Observability implementation is key.\\n5. Ability to track workflows.\\n6. Compensating transactions to undo changes that were made by other transactions.\\n\\n## Reference\\n#1 InfoQ\'s [Chris Richardson on Design-Time Coupling in Microservices](https://www.infoq.com/podcasts/design-time-coupling-microservices/)\\n\\n#2  [Patterns: Saga](https://microservices.io/patterns/data/saga.html) by miroservices.io\\n\\n#3 Microsoft\'s [Saga distributed transactions pattern](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga)"},{"id":"createC4diagrams","metadata":{"permalink":"/blog/createC4diagrams","source":"@site/blog/2022-05-14-CreateC4Diagrams.md","title":"Creating C4 diagrams","description":"Introduction","date":"2022-05-14T00:00:00.000Z","formattedDate":"May 14, 2022","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"},{"label":"diagramming","permalink":"/blog/tags/diagramming"},{"label":"modelling","permalink":"/blog/tags/modelling"},{"label":"c4","permalink":"/blog/tags/c-4"}],"readingTime":2.985,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}],"prevItem":{"title":"Orchestration and Choreography","permalink":"/blog/orchestrationvschoreography"},"nextItem":{"title":"Sequence on C4","permalink":"/blog/sequencediagramonc4"}},"content":"## Introduction\\nWhen I was introduced to C4 in 2019 there were few tools that supported it. Today there\'s multiple and I\'ll go through few tools in this post. \\n\\nIt is ok to create c4 in a tool of your choice. The most important part of creating C4 diagrams is to follow notation and recommended guidelines.\\n\x3c!--truncate--\x3e\\n### Notation\\nIt is recommended that every element in the diagrams includes\\n- Name\\n- Type (Person, system, container)\\n- Descriptive text\\n- Technology choice where appropriate (e.g. on a container)\\n![notation](/img/blog/c4notation.jpeg)\\n<sub><sup>#1 infoQ.com</sup></sub>\\n\\n### Guidelines\\n\\nAs illustrated in my [previous blog post](https://nolomokgosi.com/blog/introductiontoc4),\\n- Each diagram should have title describing diagram type and scope (e.g. Context diagram of Travel Sko).\\n- Each diagram should have a legend.\\n- Acronyms and abbreviations should be understandable, otherwise avoid them.\\n- Every container should have technology explicitly specified. (e.g Azure function, React Web app)\\n- Every relationship should be label with direction and intent\\n- Diagrams should not be stale. I prefer to only create Context and Container diagram because their rate of change is very low and easy to keep them fresh.  \\n\\n## Tools\\nThis sections outlines tools that can be used to create C4 diagrams. \\n\\n### Gliffy, Draw.io, Ms Visio\\nGliffy, Draw.io, Ms Visio are all in the same category. You can draw elements as illustrated in the notation, or you can search for c4 plugin of the tool and start creating c4 diagrams, nothing complex.\\n\\nGliffy documented how to create c4 on [this blog post](https://www.gliffy.com/blog/c4-model)\\n\\n### Archimate\\nOn [archimatetool.com](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/) post, Jean-Baptiste Sarrodie explains how to create C4 diagrams using archimate. \\nHe further highlights that c4 diagrams can be created by mapping c4 elements to archimate elements as outlined below:\\n- Person = Business Actor\\n- Software System or Container = Application Component\\n- Component = Application function\\n- Code Element = Application function\\n- Relationship = Triggering Relationship\\n\\n### Structurizr\\nStructurizr is a \\"Diagram as Code\\" tool that allows you to create architecture diagrams, focusing mainly on C4.\\nAccording to [structurizr](https://structurizr.com)structurizr allows you to create multiple diagrams from single model. The tool was designed to support C4.\\n\\nFor example, this code creates the design below the code\\n```\\nworkspace {\\n\\n    model {\\n        user = person \\"User\\"\\n        softwareSystem = softwareSystem \\"Software System\\" {\\n            webapp = container \\"Web Application\\" {\\n                user -> this \\"Uses\\"\\n            }\\n            container \\"Database\\" {\\n                webapp -> this \\"Reads from and writes to\\"\\n            }\\n        }\\n    }\\n\\n    views {\\n        systemContext softwareSystem {\\n            include *\\n            autolayout lr\\n        }\\n\\n        theme default\\n    }\\n\\n}\\n```\\n![structurizr](/img/blog/structuruzrSample.png)\\n\\nStructurizr support other architecture artifacts including ADR as illustrated on [structurizr](https://structurizr.com/share/39459/decisions/adr-tools).\\n\\nThe tool is not free, check out [pricing](https://structurizr.com/pricing)\\n### Plant UML\\nPlantUML is an open-source tool that allows users to create diagrams as code. \\n[C4-PlantUml](https://github.com/plantuml-stdlib/C4-PlantUML) package brings C4 into plantuml. \\n\\nThis code creates the picture below the code.\\n```\\n@startuml C4_Elements\\n!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml\\n\\nPerson(personAlias, \\"Label\\", \\"Optional Description\\")\\nContainer(containerAlias, \\"Label\\", \\"Technology\\", \\"Optional Description\\")\\nSystem(systemAlias, \\"Label\\", \\"Optional Description\\")\\n\\nRel(personAlias, containerAlias, \\"Label\\", \\"Optional Technology\\")\\n@enduml\\n```\\n![plantUmlSample](/img/blog/plantUmlSample.png)\\n\\nMore information on [Github](https://github.com/plantuml-stdlib/C4-PlantUML)\\n\\n## Conclusion\\n\\nC4 diagrams can be created using any tool. The most important thing is to follow the notation. I use Gliffy or DrawIO for diagrams with short life span or for clarificaiton in a workshop session.\\n\\nI\'m currently using C4-PlatUml which allows me to define all components (System, persons, containers) in a a base file and reuse them in multiple diagrams.\\nReuse is very important because components has descriptions that changes as I get clarifications. Changing description in one place and getting to reflect in multiple diagrams is cool.\\n\\n\\n## Reference\\n#1: [https://www.infoq.com/articles/C4-architecture-model/](https://www.infoq.com/articles/C4-architecture-model/)\\n\\n#2: [https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/)\\n\\n#3: [https://github.com/plantuml-stdlib/C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML)"},{"id":"sequencediagramonc4","metadata":{"permalink":"/blog/sequencediagramonc4","source":"@site/blog/2022-04-09-SequenceOnC4.md","title":"Sequence on C4","description":"Introduction","date":"2022-04-09T00:00:00.000Z","formattedDate":"April 9, 2022","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"},{"label":"diagramming","permalink":"/blog/tags/diagramming"},{"label":"modelling","permalink":"/blog/tags/modelling"},{"label":"c4","permalink":"/blog/tags/c-4"}],"readingTime":2.245,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}],"prevItem":{"title":"Creating C4 diagrams","permalink":"/blog/createC4diagrams"},"nextItem":{"title":"Introduction to C4 Diagramming","permalink":"/blog/introductiontoc4"}},"content":"## Introduction\\n\\n \\"Architects ride the Architect Elevator from the penthouse, where the business strategy is set, to the engine room, where the enabling technologies are implemented\\" ~ Gregor Hohpe\\n\\n![Penthouse Elevator](/img/blog/elevator.jpeg)\\n<sub><sup>Credit roysrise.com</sup></sub>\\n\\n\x3c!--truncate--\x3e\\n\\n C4 diagrams are some of the best artefacts to carry in your briefcase while riding the elevator up and down. Amongst other artefacts like conceptual design and business capability map, C4 context and container diagrams are perfect for the pent house discussion.\\n\\n The discussions with the engineers & analysts in the engine room needs a full story, from the top to the lower details. This is where we need artefacts that connects user journeys to technology components. The connection is established by creating communication diagram or sequence diagram.\\n\\nThis posts outlines how to create sequence diagram that aligns with a container diagram.\\n\\n## Creating a Sequence diagram\\nIn this section we\'ll create a sequence diagram for a registration process. We\'ll use and application called TravelSko with allows clients to manage their travel goals and calculates travel score from those records.\\n\\nBefore creating sequence diagram, we create context and container diagram to highlight the connection between 3 diagrams.\\n\\n## Context Diagram\\nApplication is simple and context diagram is self explanatory. Check out [previous post](https://nolomokgosi.com/blog/introductiontoc4) if you would like to know more about context diagram\\n![Context Diagram](/img/blog/tskoContext.png)\\n\\n\\n## Container Diagram\\nCheck out [previous post](https://nolomokgosi.com/blog/introductiontoc4) if you would like to know more about container diagram\\n\\n![Context Diagram](/img/blog/tskoContainer.png)\\n\\n\\n## Sequence diagram\\n\\n![Sequence Diagram](/img/blog/tskoRegSequence.png)\\n\\nTo ensure that sequence diagram aligns we container diagram, we need to:\\n- Ensure all the containers in sequence diagram are in container diagram\\n- Box the containers in the application name if the sequence diagram includes more than one application\\n- Follow C4 colour concepts. External system should also be grey and keep containers blue\\n\\n### Plant UML Code for the sequence diagram\\n```\\n@startuml\\nactor TSKO_Client\\n\\nautonumber\\ntitle Registration Process\\n\\nbox \\"TravelSko Application\\" #FFFFFF\\nparticipant Mobile_App #66B2FF\\nparticipant Profile_Service #66B2FF\\nparticipant Database #66B2FF\\nparticipant Internal_Event_Stream #66B2FF\\nparticipant Communication_Handler #66B2FF\\nend box\\n\\nparticipant Communication_Application #CCC\\n\\nTSKO_Client -> Mobile_App: Create Account\\nMobile_App -> Profile_Service: Send create account command\\nProfile_Service -> Database: Save account details\\nProfile_Service -> Internal_Event_Stream: Publish \\"AccountCreated\\" event\\nInternal_Event_Stream -> Communication_Handler: Publish \\"AccountCreated\\" event\\nCommunication_Handler -> Communication_Handler: Create email from template\\nCommunication_Handler -> Communication_Application: Send verification email\\nCommunication_Application --\x3e Communication_Handler: Send email response\\nCommunication_Handler -> Database: Save communication response\\n@enduml\\n```\\n\\n## Conclusion\\nYears ago if I had to choose between a sequence and communication diagram I always chose communication diagram. Since I started C4 I found it easy to create simple sequence diagrams derived from container diagram as highlighted in the previous session.\\n\\nI prefer creating communication diagram at high-level interaction between applications."},{"id":"introductiontoc4","metadata":{"permalink":"/blog/introductiontoc4","source":"@site/blog/2022-03-27-Introduction-to-c4.md","title":"Introduction to C4 Diagramming","description":"Scenarios","date":"2022-03-27T00:00:00.000Z","formattedDate":"March 27, 2022","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"},{"label":"diagramming","permalink":"/blog/tags/diagramming"},{"label":"modelling","permalink":"/blog/tags/modelling"}],"readingTime":6.6,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}],"prevItem":{"title":"Sequence on C4","permalink":"/blog/sequencediagramonc4"},"nextItem":{"title":"Understanding Boundaries","permalink":"/blog/understandingboundaries"}},"content":"## Scenarios\\nScenario 1: Imagine you are at the airport in a **foreign country** and about to fly to your home country.A stranger sits next to you, greets you and ask you where are you from. What will be your response?\\n\\nScenario 2: Imagine you are at the domestic terminal in your **home country**, and you are about to fly to another city. A stranger greets you and ask you where are you from. What will be your response?\\n\\nScenario 3: You are in a coffee shop at local shopping centre and stranger asks you where are you from, what will be your response?\\n\\nDo you have different answers in the 3 scenarios? If so why?\\n\\n![Airport wait](/img/blog/airport.png)\\n<sub><sup>Credit rgbstock</sup></sub>\\n\\n\x3c!--truncate--\x3e\\n\\n**If I had to respond**\\n\\nI\u2019m from a village called Mabeskraal, classified under Rusternburg town/district in South Africa. My response in 3 scenarios:\\n1. In a foreign country : I\u2019m from South Africa\\n2. In my home country: I\u2019m from Rusternburg\\n3. At local shopping mall: I\u2019m from Mabeskraal\\n\\nAnswers are different because \\"it depends\\" on where I am are at the particular point, and who\'s asking.\\nIn a case where the stranger is familiar with South Africa, dialog might go like this:\\n- Stranger: Where in South Africa?\\n- Me: In Rusternburg (Zooming 1 level down)\\n- Stranger: Oh I\u2019ve been to Rusternburg, where exactly? \\n- Me: In a village called Mabeskraal (Zooming another level down)\\n\\n\\n## C4 Modelling\\nHow does C4 fit in all of this? It is all about the ability to zoom in and out \\"depending\\" on where you are and the people you are talking to.\\n\\nAccording to [C4Model.com](https://c4model.com), C4 is a way of creating maps of your software at various levels of detail just like what you would do on google maps. In google maps, you can zoom in & out to different levels of detail.\\n\\nC4 model, inspired by UML and 4+1 model , is a simplified and practical way of describing systems from different levels of abstractions.\\n\\n## C4 Core Diagrams\\nCore diagrams provides a static view of a **single software system**. Core diagrams includes context, container, component and code. \\n\\n![Core Diagram](/img/blog/corediagram.png)\\n\\nThe next sections discusses each diagram in detail.\\n\\n\\n### 1: System Context Diagram\\nContext diagram allows you to take a step back and see the bigger picture. It highlights the system we focusing on(hence the color blue), and the other systems and actors it integrates with. Each connection or relationship to actors or systems must have the purpose.\\n\\nThe diagram is what we use at the beginning of the story before zooming into details. The diagram is good for both technical and non-technical people, but I\u2019ve seen more value when presented to non-technical people. \\n\\nIt is important **not** to add technical details or the components that makes up the system in this diagram. No need to mention Azure, AWS, API, Database details etc. Those details are mentioned as we zoom into the next level of details, the container diagram.    \\n\\n\\n![Context Diagram](/img/blog/context.png)<sub><sup>Credit c4model.com</sup></sub>\\n\\nBecause c4 represents a static view of a single software system, the \\"system in focus\\" is always blue. Other systems are gray in color because they are not the \\"single software system\\" we focusing on. If we need to focus on them, we need to create separate diagrams for them.\\n\\n### 2: Container Diagram\\nA container diagram is a high-level technology focused diagram that zooms a level down into the focus system (Blue Box) highlighted in System Context Diagram. \\n\\nAccording to C4Model.com, a container represent an application or data store. It is a piece of software that we deploy in order for the whole system to work. Example of a container includes web app, mobile app, lamda function, azure functions, database, blob storage etc.\\n\\nContainer != Docker Container (!= not equals to)\\nContainer does not represent a  dll/jar, its represent application which can be collections of dlls or Jars\\n\\nWe can add technical details to containers like React Native Mobile App, Azure Function, Mongo DB etc. The diagram  **does not** highlight any network related concepts like fail over, clustering, deployment scenarios etc.\\n\\n![Container Diagram](/img/blog/containers.png)<sub><sup>Credit c4model.com</sup></sub>\\n\\n### 3: Component Diagram\\nComponent diagram is a level 3 diagram that drills down into a a container, highlighting the building blocks of a container. \\n\\nA component is a collection of implementation classes behind an interface.\\n\\nImportant to note: Components are not separate deployable pieces of software, container is.\\n\\nI\'m not a big fan of component diagram and I have not seen the need for them. It\u2019s not recommended to create them unless they add value to you and your team. If anyone is interested in this level of details, it\u2019s better they jump into the repo and see it fresh. \\n\\n![Component Diagram](/img/blog/components.png)<sub><sup>Credit c4model.com</sup></sub>\\n\\n### 4: Code\\nIt is the last level of C4 model where yo zoom into each component to show how it\u2019s implemented as code.\\n\\nIt is not recommended to create this model since some IDE can automatically generate them from code. \\n\\n![Classes Diagram](/img/blog/classes.png)<sub><sup>Credit c4model.com</sup></sub>\\n\\n## Supplementary Diagrams\\nSamples of supplementary diagrams mentioned below are available on [C4Model.com](https://c4model.com)\\n### System Landscape Diagram\\nSystem landscape Diagram is a context diagram without focus in a single system.\\n\\nIn some cases especially in projects, we need to present multiple applications in a single picture. Because C4 Core Diagrams focuses on a a static view of a **single system**, it might not be relevant.\\n\\nIn my experience, this is one of the simple pictures to design provided you have core diagrams of all application within your organization.\\n\\n\\n### Dynamic Diagram\\nJust like on UML communication/collaboration diagram, it\u2019s a diagram that shows sequence or numbered interactions between actors and applications. \\n\\nI find it useful to describe simple scenarios. Where lots of containers are involved, traditional sequence diagram is simpler to understand.\\n\\n### Deployment Diagram\\nShows how systems and containers are mapped to infrastructure. \\nIt\u2019s based on UML Deployment diagram.\\n\\nThis is where we show networks, load balancers, firewalls etc.\\n\\n## Guidelines when creating c4 diagrams\\n\\nAccording to [C4Model.com](https://c4model.com),\\n- Each diagram should have title describing diagram type and scope (e.g. Context diagram of Travel Sko).\\n- Each diagram should have a legend.\\n- Acronyms and abbreviations should be understandable, otherwise avoid them.\\n- Every container should have technology explicitly specified. (e.g Azure function, React Web app)\\n- Every relationship should be label with direction and intent\\n- Diagrams should not be stale. I prefer to only create Context and Container diagram because their rate of change is very low and easy to keep them fresh.  \\n\\n## Conclusion\\nSome of the reasons why I like C4 diagramming/modelling\\n- It is a simplified UML.\\n- It\u2019s practical, easy to understand.\\n- Promote distributed design within the organizations. \\n- Most important, it clarifies the System Boundary, which can be a struggle as highlighted on [understanding boundaries](https://nolomokgosi.com/blog/understandingboundaries) post.\\n\\nThe first 2 diagrams (Context and Container) are key and can bring clarity and alignment needed through out the organization. If each system in the organization has this 2 diagrams (fresh not stale), there would not be a need to have meetings & meetings where architects or engineers explains  details (structure, integration, relationships, deployed containers) of the system they look after. Most importantly, some conversations would not need architect or engineer to be present.\\n\\nIt is important to note that C4 does not cover all architecture artifacts. Missing link:\\n- Sequence Diagram: Dynamic diagram can replace a sequence diagram but lots of lines/activities will complicate it. I still feel there\u2019s a room for sequence and I\u2019ll cover it in my next post. \\n- Business processes, workflows, state machines, domain models, \\n- Data models\\n\\nAs we close, let\u2019s marry our scenarios to c4\\n1. In a foreign country : I\u2019m from South Africa = Context Diagram\\n2. In my home country: I\u2019m from Rusternburg = Container Diagram\\n3. At local shopping mall: I\u2019m from Mabeskraal = Component Diagram\\n\\n\\n\\n\\n\\n## Reference \\n[https://c4model.com](https://c4model.com)"},{"id":"understandingboundaries","metadata":{"permalink":"/blog/understandingboundaries","source":"@site/blog/2022-01-09-Boundaries/index.md","title":"Understanding Boundaries","description":"\\"One of the undecided problems of software development is deciding what the boundaries of a piece of software is\\" - Martin Fowler. This is statement is so true, creeps into most of my design conversation.","date":"2022-01-09T00:00:00.000Z","formattedDate":"January 9, 2022","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"},{"label":"Domain Driven Design","permalink":"/blog/tags/domain-driven-design"}],"readingTime":2.79,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}],"prevItem":{"title":"Introduction to C4 Diagramming","permalink":"/blog/introductiontoc4"},"nextItem":{"title":"Entanglement","permalink":"/blog/entanglement"}},"content":"\\"One of the undecided problems of software development is deciding what the boundaries of a piece of software is\\" - [Martin Fowler](https://martinfowler.com/bliki/ApplicationBoundary.html). This is statement is so true, creeps into most of my design conversation. \\n\\n![Cable Mess](/img/blog/boundaries.jpg)\\n\\n*Photo by goodtherapy.org*\\n\x3c!--truncate--\x3e\\n\\nIf we step out of tech world for a moment, we\'ll realise that boundaries are applied in our everyday life. Some of those boundaries has unwritten rules or principles.\\n\\nLet\'s zoom into John\'s life as an example. John is a 14 year old boy who lives with his parents and younger sister in a 4 bedroom house. He loves football and has posters all over the bedroom he shares with his younger sister. John\'s mother is strict and likes order in her house. John\'s father is chilled. \\n\\n\\n\\n## John\'s house\\n\\n- **Bedroom 1:** Parents bedroom, always clean and organised. It is clear that mother\'s standards and principles are followed.\\n- **Bedroom 2:** A room John shares with his sister. Through constant screaming and ruling with terror, John\'s mother tried to instill her standards and principles and failed dismallly. John implemented his own standard & principles\\n\\n- **Kitchen & Lounge:** Just like John\'s parents bedroom, always organised. It is clear that mother\'s standards and principles are followed. Kitchen is for cooking. Lounge is where family watches 7de laan everyday at 7. \\n\\nLooking at this example, and zooming into our everyday life, you will realise our space has boundaries and most of the rules or principles are not written down. For example, only sleep in the bedroom, cook in the kitchen.\\n\\n\\n## In Software World\\n\\nIn large organisations where teams write software each and every day, it is important to define and document boundaries. Since teams have different stakeholders, you might find teams writing duplicate capabilities in the same organisation. \\n\\nTake this example: \\n- Stakeholder: Can you create a screen where i can manage client data?\\n- Engineer: Say no more.\\n- Stakeholder: I would like to send an email to client after completing this task.\\n- Engineer: I got it, its a simple functionality to build.\\n- Stakeholder: Can you make sure that I can see all the holidays on the system?\\n- Engineer: We know what to to build. We\'ll be done next week. \\n\\nIn this case, tech team is writing software to fulfil stakeholder needs without checking if the capablility exists in the organisation. Since  boundaries are not applied, the team will end up with an application that manages client data, execute client communications & managing holiday data. \\n\\nIt does not mean it\'s bad to have such application. It\'s only bad if the boundary is not defined, it\'s done in isolation or leads to refactoring and data clean up projects in future. \\n \\n## Conclusion\\nDefining boundaries in large organisations can be a difficult task but it is a good investment.\\n\\n The absence of software or application boundaries leads to\\n - Data being duplicated & managed in different applications.\\n - Increase in cost at organisational level\\n - Bad client experience e.g. where client updates address or contact details and the update does not filter down to other applications\\n\\nThe results of boundary definition exercise should include this major points:\\n- Application is responsible for ABC capability/function\\n- Application is NOT responsible for XYZ capability/function\\n\\n[Team Topologies](https://teamtopologies.com/book) and [Domain Driven Design](https://www.amazon.co.uk/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215) books shines the light in this subject."},{"id":"entanglement","metadata":{"permalink":"/blog/entanglement","source":"@site/blog/2021-12-02-Entanglement/index.md","title":"Entanglement","description":"Imagine you are an engineer working in a application/system that has been operating for years. Your stakeholders asks  to implement a breaking change on the API.Assuming you joined the organisation less than a year ago, you ask around if anyone knows  about your API integration points and no one knows. You start feeling like an application you working on looks and feels like the picture below, \\"ENTANGLED\\".","date":"2021-12-02T00:00:00.000Z","formattedDate":"December 2, 2021","tags":[{"label":"architecture","permalink":"/blog/tags/architecture"},{"label":"design","permalink":"/blog/tags/design"}],"readingTime":2.755,"truncated":true,"authors":[{"name":"Nolo Mokgosi","title":"admin","url":"https://github.com/nolo28mokgosi","imageURL":"/img/profile.png","key":"nolo"}],"prevItem":{"title":"Understanding Boundaries","permalink":"/blog/understandingboundaries"}},"content":"Imagine you are an engineer working in a application/system that has been operating for years. Your stakeholders asks  to implement a breaking change on the API.Assuming you joined the organisation less than a year ago, you ask around if anyone knows  about your API integration points and no one knows. You start feeling like an application you working on looks and feels like the picture below, \\"ENTANGLED\\".\\n\\n![Cable Mess](./messy-cables.png)  \\n*Photo by mikemontague.com*\\n\x3c!--truncate--\x3e\\n\\n## How do you know your application is entangled?\\nAccording to cambridge dictionary, entanglement is \\"a situation or relationship that you are involved in and that is difficult to escape from\\". The word was made popular in 2020 by famous couple in the US. In this document, we will discuss entaglement in IT applications. \\n\\nThe minute you feel like you are diffusing a bomb when you are asked to implement a breaking changes on the API or switch off integration point, know that your application is entagled :smiley:.\\n\\n![Diffuce bomb](./diffusebomb.jpg)  \\n*Photo by mikemontague.com*\\n\\n## How to avoid entanglement\\n1. **Document current state of your application**  \\nThere should be a simple highlevel documentation or design that outlines application integration points. It will also be beneficial to outline users/user groups interacting with the application.\\n\\n2. **Keep you current state of your application alive**  \\nDocumenting current state is one thing, keeping documentation alive is always a challenge.\\nI\'ve worked on [C4](https://c4model.com) and love it. It\'s simple, maintainable especially if you focus only at \\"System Context\\" for organisation wide designs.\\n\\n3. **Agree to certain format**  \\nFact is different designers/architects/engineers document differently. There is a chance that most application have documentation somewhere in archives in word documents, wiki of some sort. We might be outdated, or might be difficult to find, or difficult to understand. Choose from formats/frameworks like [C4](https://c4model.com) and [4+1](https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf)) \\n\\n4. **Be clear on design assets of the organisation**  \\nCode in organisation is treated as a first class citizen. Gone are the days where we used to panic when engineer\'s machine crashed and we loose days worth of code. Nowadays our code is in the repo, and we have CI/CD in place.\\nJust like code where we adhere to certain principles & standandards, it is important to agree on organisation level design assest, and give them first class citizen membership.\\n\\n5. **Current state documenation must be accessible**\\nCurrent state provide answers to many questions asked in multiple meetings. Instead or reinventing the wheel or getting right people to answer questions like what are the integration points of the appliction? How do they integrate? Which users interact with the application? It\'s so cool to answer by a link to an up-to-date documentation/design.\\n\\n## Conclusion\\nOne might ask, why do we need to create more documents/design assets if we can read code and have a clear pictures. Statement is valid but it is important to remember that: \\n\\n- Sometimes we need answers in our finger tips to make decisions\\n- Applications we are building today will live beyond our time (we might leave the orgnisation, or join other teams)\\n- Applications you working on is part of the broader eco-system of applications\\n- It helps to provide basic application information to decision makers, non-techincal community within our organisation\\n\\nIf you would like to take it to the next level, checkout [Bounded Context Canvas](https://github.com/ddd-crew/bounded-context-canvas)."}]}')}}]);