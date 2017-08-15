var Todo = require("./constructor");

var TodoWithState = function(name, state) {
    this.name = name;
    this.state = state;
}

TodoWithState.prototype.completed = function() {
    console.log("todo "+ this.name + " completed with state "+ this.state)
}

var factory = function(type, pars) {
    switch(type) {
        case "todo":
            return new Todo(pars.name)
        break;
        case "todoState":
            return new TodoWithState(pars.name, pars.state)
        break;
    }
}

var todo5 = factory("todoState", {name: "todo5", state: true})

todo5.completed();
