var Todo = function(name) {
    this.name = name;
}

Todo.prototype.completed = function() {
    console.log("todo "+ this.name + " completed")
}

Todo.prototype.archive = function() {
    console.log("todo "+this.name+" archived")
}

var singleton = function () {
    var todo = null
    return {
        create : function(name) { 
            if(!todo) {
                console.log("no singleton has been created");
                todo = new Todo(name);
                return todo;
            } else {
                console.log("singleton has been created. Returning the instance");
                return todo;
            }
        }   
    }
}

var singleton = new singleton();
var todo1 = singleton.create("todo1");
todo1.completed();
var todo2 = singleton.create("todo2");
todo2.completed();
