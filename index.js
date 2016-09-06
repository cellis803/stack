console.log("hello world");
var StackObject = {

    stack : [],
    push : function (obj) {

    },
    pop : function() {
        return null;
    },
    peek : function() {
        return 'test';
    }
}

function StackObjectConstructor() {
    return Object.create(StackObject);

}

var myStack = StackObjectConstructor();
console.log(myStack.peek());

