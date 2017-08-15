var todo = {
    name: "todo1",
    state: false
}


todoService = function() {
    return {
        get: function (){
            console.log("get todo")
        },
        notify: function() {
            console.log("notify")
        }
    }
}

todoServiceWrapper = function() {
    return {
        getAndNotify: function() {
            todoService = new todoService();
            todoService.get(); 
            todoService.notify();
        }
    }
}

todoServiceWrapper = new todoServiceWrapper();
todoServiceWrapper.getAndNotify();
