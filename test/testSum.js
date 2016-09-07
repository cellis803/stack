var sum = require('../sum').sum;

var chai = require('chai');
var assert = chai.assert;


describe('add two numbers', function () {

    it('should return the sum', function () {
        var result = sum(1,1);
        assert.equal(2, result);
    })
})

describe('add three numbers', function () {

    it('should return the sum', function () {
        var result = sum(1,1,1);
        assert.equal(3, result);
    })
})

describe('add one number', function () {

    it('should return the sum', function () {
        var result = sum(1);
        assert.equal(1, result);
    })
})

describe('add zero numbers', function () {

    it('should return the sum', function () {
        var result = sum();
        assert.equal(0, result);
    })
})

describe('passing in strings', function () {

    it('should return an error', function () {
        var error = false;
        try {
            
            sum('test','test');
        } catch (err) {
            error = true;
        }

        assert.isTrue(error);
        
    })
})