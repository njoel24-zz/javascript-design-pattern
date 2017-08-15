# javascript-design-pattern

Main design patterns used in Javascript application.

Thank you to Jonathan Mills for the useful lessons on PluralSight.
Follow the lessons to see additional patterns and more examples!

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
  
  
