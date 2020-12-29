---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

## Vision

NodeArch is a Node.js backend framework targeting to solve the design and architectural problems when creating Node.js APPs for the backend. 

Using Typescript and dependency injection, we bring the concepts we used to in languages like Java, C# etc. While still getting the best out of Javascript flexibility and Node.js non-blocking I/O model. 

There is also a big focus on wiring everything together, so our intention is not to reinvent/rewrite the tools/frameworks we already know and use. Instead, our target is to wire everything together and leverage the opensource community behind Node.js and Javascript. 

You can think of NodeArch as the glue that links all your tools and libraries together and helps create a readable, maintainable and scalable application architecture.

## How it works
Built-in a modular way, NodeArch allows you only to pick what you need to get the job done. No unnecessary dependencies and libraries.


## Stack
NodeArch is the glue for existing open-source technologies. The following is a list of the key technologies and libraries running and powering the framework.

### Node.js
We love Node.js and use it extensively in production. It's easy to get started with, get the job done fast, and yet very flexible and powerful.

>Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.


For more info, visit the official [website](https://nodejs.org) for node.js 


### Typescript

TODO

### Inversify

TODO