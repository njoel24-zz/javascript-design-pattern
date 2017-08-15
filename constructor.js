var Todo = function(name) {
    this.name = name;
}

Todo.prototype.completed = function() {
    console.log("todo "+ this.name + " completed")
}

Todo.prototype.archive = function() {
    console.log("todo "+this.name+" archived")
}
module.export = Todo;
