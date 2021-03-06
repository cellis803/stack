// StackObject.prototype = {
//     stack : []
// };

var StackObject = {

    push : function (obj) {
        this.stack.push(obj);

    },
    pop : function() {
        if (this.stack.length > 0) {
            var elem = this.stack[0];
            this.stack.slice(0,1)
            return elem;
        } else {
            return null;
        }
    },
    peek : function() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        } else {
            return null;
        }
    }
}

function StackObjectConstructor() {
    var myStack = Object.create(StackObject);
    myStack.stack = [];
    return myStack;

}

exports.StackObject = StackObject;
exports.StackObjectConstructor = StackObjectConstructor;