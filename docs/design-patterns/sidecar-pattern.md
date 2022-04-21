---
slug: sidecarpattern
sidebar_label: 'Sidecar'
sidebar_position: 2
---


# Sidecar Pattern
![Sidecar](/img/docs/sidecar.jpg)

Sometimes called a sidekick or decomposition pattern, it is a pattern where components of an application can be deployed into a separate process or container to provide isolation and encapsulation(#1).

Sidecar is attached to the core application just like how the sidecar is attached to the motorcycle in the picture above. It shares the same lifecycle as the core application therefore is cannot be considered to be a standalone application.

It provides supporting functionality like:
- Health checks
- Configuration
- Metrics
- Monitoring
- Logging

## Examples
**Ambassador services** can be deployed as a sidecar. In this case, consumers can call the application via the ambassador which handles logging, routing, circuit breaking and other connectivity related features (#1)

![Sidecar](/img/docs/sidecar-design1.png)

This pattern can also be used as an **offload proxy**. For example, in a case where your legacy application accepts http calls only and there's a requirement to implement https, sidecar can be built for SSL offloading. 

In a microservices architecture, multiple copies of a sidecar can be attached to each microservice. All inbound and outbound calls can flow through the sidecar proxy which could gather telementry and enforce certain policies. (#2)


## References
- #1 - https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar
- #2 - https://dzone.com/articles/sidecar-design-pattern-in-your-microservices-ecosy-1