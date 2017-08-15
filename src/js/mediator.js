var Todo = function(name) {
    this.name = name;
}

Todo.prototype.completed = function() {
    console.log("todo "+ this.name + " completed")
}

Todo.prototype.archive = function() {
    console.log("todo "+this.name+" archived")
}

var Notify = function () {
    this.save = function (task) {
        console.log("I am notified");
    }
};

var mediator = (function(){
    var channels = {};
    
    var subscribe = function(channel, context, func){
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = []
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };
    
    var publish = function(channel){
        if (!this.channels[channel]) {
            return false
        }
        
        var args = Array.prototype.slice.call(arguments, 1);
        
        for(var i = 0; i < mediator.channels[channel].length; i++)
        {
            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args)
        }
    }
    return{
        channels: {},
        subscribe:subscribe,
        publish:publish
    };
}());

var todo = new Todo('todo1');

var not = new Notify();

mediator.subscribe('complete', not, not.save)

todo.save = function(){
    mediator.publish('complete', this);
    Todo.prototype.completed.call(this);
}
todo.save();
