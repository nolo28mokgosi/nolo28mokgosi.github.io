---
slug: createC4diagrams
title: Creating C4 diagrams
authors: nolo
tags: [architecture, design, diagramming, modelling,c4]

---

## Introduction
When I was introduced to C4 in 2019 there were few tools that supported it. Today there's multiple and I'll go through few tools in this post. 

It is ok to create c4 in a tool of your choice. The most important part of creating C4 diagrams is to follow notation and recommended guidelines.
### Notation
It is recommended that every element in the diagrams includes
- Name
- Type (Person, system, container)
- Descriptive text
- Technology choice where appropriate (e.g. on a container)
![notation](/img/blog/c4notation.jpeg)
<sub><sup>#1 infoQ.com</sup></sub>

### Guidelines

As illustrated in my [previous blog post](https://nolomokgosi.com/blog/introductiontoc4),
- Each diagram should have title describing diagram type and scope (e.g. Context diagram of Travel Sko).
- Each diagram should have a legend.
- Acronyms and abbreviations should be understandable, otherwise avoid them.
- Every container should have technology explicitly specified. (e.g Azure function, React Web app)
- Every relationship should be label with direction and intent
- Diagrams should not be stale. I prefer to only create Context and Container diagram because their rate of change is very low and easy to keep them fresh.  

## Tools
This sections outlines tools that can be used to create C4 diagrams. 

### Gliffy, Draw.io, Ms Visio
Gliffy, Draw.io, Ms Visio are all in the same category. You can draw elements as illustrated in the notation, or you can search for c4 plugin of the tool and start creating c4 diagrams, nothing complex.

Gliffy documented how to create c4 on [this blog post](https://www.gliffy.com/blog/c4-model)

### Archimate
On [archimatetool.com](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/) post, Jean-Baptiste Sarrodie explains how to create C4 diagrams using archimate. 
He further highlights that c4 diagrams can be created by mapping c4 elements to archimate elements as outlined below:
- Person = Business Actor
- Software System or Container = Application Component
- Component = Application function
- Code Element = Application function
- Relationship = Triggering Relationship

### Structurizr
Structurizr is a "Diagram as Code" tool that allows you to create architecture diagrams, focusing mainly on C4.
According to [structurizr](https://structurizr.com)structurizr allows you to create multiple diagrams from single model. The tool was designed to support C4.

For example, this code creates the design below the code
```
workspace {

    model {
        user = person "User"
        softwareSystem = softwareSystem "Software System" {
            webapp = container "Web Application" {
                user -> this "Uses"
            }
            container "Database" {
                webapp -> this "Reads from and writes to"
            }
        }
    }

    views {
        systemContext softwareSystem {
            include *
            autolayout lr
        }

        theme default
    }

}
```
![structurizr](/img/blog/structuruzrSample.png)

Structurizr support other architecture artifacts including ADR as illustrated on [structurizr](https://structurizr.com/share/39459/decisions/adr-tools).

The tool is not free, check out [pricing](https://structurizr.com/pricing)
### Plant UML
PlantUML is an open-source tool that allows users to create diagrams as code. 
[C4-PlantUml](https://github.com/plantuml-stdlib/C4-PlantUML) package brings C4 into plantuml. 

This code creates the picture below the code.
```
@startuml C4_Elements
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

Person(personAlias, "Label", "Optional Description")
Container(containerAlias, "Label", "Technology", "Optional Description")
System(systemAlias, "Label", "Optional Description")

Rel(personAlias, containerAlias, "Label", "Optional Technology")
@enduml
```
![plantUmlSample](/img/blog/plantUmlSample.png)

More information on [Github](https://github.com/plantuml-stdlib/C4-PlantUML)

## Conclusion

C4 diagrams can be created using any tool. The most important thing is to follow the notation. I use Gliffy or DrawIO for diagrams with short life span or for clarificaiton in a workshop session.

I'm currently using C4-PlatUml which allows me to define all components (System, persons, containers) in a a base file and reuse them in multiple diagrams.
Reuse is very important because components has descriptions that changes as I get clarifications. Changing description in one place and getting to reflect in multiple diagrams is cool.


## Reference
#1: [https://www.infoq.com/articles/C4-architecture-model/](https://www.infoq.com/articles/C4-architecture-model/)

#2: [https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/)

#3: [https://github.com/plantuml-stdlib/C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML)