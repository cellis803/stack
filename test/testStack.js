var index = require('../index');

var chai = require('chai');
var assert = chai.assert;


describe('push', function() {
    it('should do something', function() {
        var instance = index;
        instance.push('test');
        assert(instance.peek(),'test');
    })
})