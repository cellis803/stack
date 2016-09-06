console.log("hello world");

var StackObject = {

    stack : [],

    push : function (obj) {
        stack.push(obj);

    },

    pop : function() {
        if (stack.length > 0) {
            var elem = stack[0];
            stack.slice(0,1)
            return elem;
        } else {
            return null;
        }
    },

    peek : function() {
        if (stack.length > 0) {
            return stack[stack.length - 1];
        } else {
            return null;
        }
    }
}

function StackObjectConstructor() {
    return Object.create(StackObject);
}

var instance = StackObjectConstructor();