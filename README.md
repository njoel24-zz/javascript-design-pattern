# javascript-design-pattern

Main design patterns used in Javascript application.

Thank you to Jonathan Mills for the useful lessons on PluralSight.
Follow the lessons to see additional patterns and more examples!

useful books: Gang of Four

A pattern:
- solve a problem
- it is  aproven concept
- the solution is not obvious
- it describes a relation
- it has a significant human component

Types of Patterns:
Creational : Constructor, Factory, Module and Singleton
Structural: Decorator, Facade
Behavioral: Observer, Mediator



Creational:
- creates a brand new object
- links to an object prototype
- binds this to the new object scope
- implicitly return this
- create a new scope
- create a copy

 Prototype:
  an encapsulation of properties that an obect links to

 Factory Pattern: 
  - simplified object creation
  - create different objects
 
 Singleton:
  - modules are cached after firsst time they are loaded
  - on Angular every service is singleton, in Node(CommonJS) a lot of mosules are singleton
 
 Module:
  - It creates private variables
  - return an object (revealing module pattern)


Structural:
  - how objects are made up and simplify relations between objects
  - two main types: extends functionalities(Decorator) and simplify functionalities (Facade).
  
 note: Jquery is a perfect example of the implementation of the Facade Pattern

 Flyweight Pattern (not implmented here):
   - Conserves memory by sharing portions of an object between objects.
   - It is useful in case of a large amount of tasks belonging to the same person.
   - to check memory usage: process.memoryUsage().heapUsed()
  
Behavioral patterns:
  - Concerned with the assignment of resposanbilities between objects and how they communicate.
  - help projects cooperation
  - assign clear hierarchy
  - can encapsulate requests

  Observer: 
    - allows a collection of objects to watch an object and be notified on changes
    - loosely coupled system
    - an object is the focal point (main difference with the mediator pattern)
  
  Mediator:
    - Controls communication between objects so neither object has to be coupled to the others
    - there is no focal point
    - loosely coupled system
    - an object manages all comunication 
    - many to many relation 
    - eg. Pub/Sub
    
  Command(not implemented here):
    Encapsulate the calling of a method as an object
    - fully decoupled the execution from the impleementation
    - allows for less fragile implementations
    - support undo operation
  

 


