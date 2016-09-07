var StackObject = require('../index');

var chai = require('chai');
var assert = chai.assert;


function StackObjectConstructor() {
    var myStack = Object.create(StackObject);
    myStack.stack = [];
    return myStack;
    //return StackObject;

}

describe('pop when there are no items on stack', function() {
    
    it('should return null', function() {
        instance1 = StackObjectConstructor();
        assert.isNull(instance1.pop());
    })
})

describe('peek when there are no items on stack', function() {
    it('should return null', function() {
        var instance = StackObjectConstructor();
        assert.isNull(instance.peek());
    })
})

describe('peek when there are items on stack', function() {
    var instance = StackObjectConstructor();
    instance.push('test');
    it('should return test', function() {
        assert(instance.peek(),'test');
    })
})

describe('pop when there are items on stack', function() {
    it('should return test', function() {
        var instance = StackObjectConstructor();
        instance.push('test');
        assert(instance.pop(),'test');
    })
})

describe('push when there are items on stack', function() {
    var instance = StackObjectConstructor();
    instance.push('test');
    instance.push('test 2');
    it('should return test 2 when I peek at it', function() {
        assert(instance.peek(),'test 2');
    })
})

describe('failing test', function() {
    it('should fail', function() {
        assert.isFalse(false);
    })
})