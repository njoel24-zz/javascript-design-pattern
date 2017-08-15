var todoCount = function(count) {

    var  count = count

    getCount = function(){
        console.log(count)
        return count;
    }

    incrementCount = function() {
        count++
    }

    return {
        getCount: getCount,
        incrementCount: incrementCount
    }
}

var t = new todoCount(0);
t.incrementCount()
t.incrementCount()
t.incrementCount()
t.incrementCount()
t.getCount();