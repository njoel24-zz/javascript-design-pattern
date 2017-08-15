var Todo = function(name) {
    this.name = name;
}

Todo.prototype.completed = function() {
    console.log("todo "+ this.name + " completed")
}

Todo.prototype.archive = function() {
    console.log("todo "+this.name+" archived")
}

var Observer = function () {
    this.observers = [];
}

Observer.prototype.getObservers = function(){
    return this.observers;
}

Observer.prototype.addObserver = function (obs) {
    this.observers.push(obs)
}

Observer.prototype.removeObserver = function(obs) {
    for(i = 0; i < this.observers.length; i++){
        if (this.observers[i] === obs ){
            this.observers.splice(i, 1);
        }
    }
}

ObserverTodo = function(name) {
    this.todo = new Todo(name);
    this.observer = new Observer();
}

ObserverTodo.prototype.addObserver = function(obs) {
    this.observer.addObserver(obs);
}

ObserverTodo.prototype.observerCompleted = function() {
    this.todo.completed.call(this);
    var observers = this.observer.getObservers();
    for(i = 0; i < observers.length; i++) {
        observers[i]();
    }
}

var Notify = function(){
    return {
        save: function() { 
            console.log("I was notified");
        }
    }
}

var notify = new Notify();
var observerTodo = new ObserverTodo("todo1")
observerTodo.addObserver(notify.save);
observerTodo.observerCompleted();