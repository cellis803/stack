var instance = require('../index');

var chai = require('chai');
var assert = chai.assert;

describe('pop when there are no items on stack', function() {
    it('should return null', function() {
  
        assert(instance.pop(),null);
    })
})

describe('peek when there are no items on stack', function() {
    it('should return null', function() {
        assert(instance.peek(),null);
    })
})

describe('peek when there are items on stack', function() {
    instance.push('test');
    it('should return test', function() {
        assert(instance.peek(),'test');
    })
})

describe('pop when there are items on stack', function() {
    instance.push('test');
    it('should return test', function() {
        assert(instance.pop(),'test');
    })
})

describe('push when there are items on stack', function() {
    instance.push('test');
    instance.push('test 2');
    it('should return test 2 when I peek at it', function() {
        assert(instance.peek('test 2'),'test 2');
    })
})