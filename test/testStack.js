var StackObject = require('../index').StackObject;
var StackObjectConstructor = require('../index').StackObjectConstructor;

var chai = require('chai');
var assert = chai.assert;


describe('pop when there are no items on stack', function () {

    it('should return null', function () {
        instance1 = StackObjectConstructor();
        assert.isNull(instance1.pop());
    })
})

describe('peek when there are no items on stack', function () {
    it('should return null', function () {
        var instance = StackObjectConstructor();
        assert.isNull(instance.peek());
    })
})

describe('peek when there are items on stack', function () {
    it('should return test', function () {
        var instance = StackObjectConstructor();
        instance.push('test');
        assert(instance.peek(), 'test');
    })
})

describe('pop when there are items on stack', function () {
    it('should return test', function () {
        var instance = StackObjectConstructor();
        instance.push('test');
        assert(instance.pop(), 'test');
    })
})

describe('push when there are items on stack', function () {

    it('should return test 2 when I peek at it', function () {
        var instance = StackObjectConstructor();
        instance.push('test');
        instance.push('test 2');
        assert(instance.peek(), 'test 2');
    })
})

describe('failing test', function () {
    it('should fail', function () {
        assert.isFalse(false);
    })
})