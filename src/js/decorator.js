var Todo = function(name) {
    this.name = name;
}

Todo.prototype.completed = function() {
    console.log("todo "+ this.name + " completed")
}

Todo.prototype.archive = function() {
    console.log("todo "+this.name+" archived")
}

var TodoExtended = function(name, state){
    Todo.call(this, name);
    this.state = state;
}


TodoExtended.prototype = Object.create(Todo.prototype);

TodoExtended.prototype.toggleState = function(){
    return !this.state
}

var todoext = new TodoExtended("todo1", true);
todoext.completed();
console.log(todoext.toggleState());
