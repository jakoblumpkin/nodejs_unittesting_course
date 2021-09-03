'use strict';

// jshint expr: true

var chai = require('chai'),
 expect = chai.expect;

chai.should();

describe('number tests', function() {
    function isEven(num) {
        return num % 2 === 0;
    }

    describe('unit tests', function() {
        it('should return true when number is even', function() {
        isEven(4).should.be.true;
        })

        it('should return false when number is odd', function() {
            expect(isEven(5)).to.be.false;
            //Another way of doing it
        })
    });

    function add(num1, num2) {
        num1 + num2;
    }

    //can put skip here
    describe('add without setup/teardown', function() {
        var num;

        beforeEach(function() {
            num = 5;
        });

        it.skip('should be ten when adding 5 to 5', function() {
        num = add(num, 5);
        num.should.equal(10);
        });
        //Not working

        it.skip('should be twelve when adding 7 to 5', function() {
            add(num, 7).should.equal(12);
        });
        //Not working
    });
});