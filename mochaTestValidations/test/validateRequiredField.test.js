// JavaScript Document

let assert = require('chai').assert;	//Chai assertion library
let validInput = require('../app/validateRequiredField');
let validatePhoneNumber = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){

	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));
	});

	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});

	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});

	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});

	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});

	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});

	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});

	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});

});	//end "Testing Input Required"


describe("Testing Valid Phone Number", function(){

	it("Input is required", function(){
		assert.isFalse(validatePhoneNumber(' '));
	});

	it("Input must be numeric", function(){
		assert.isFalse(validatePhoneNumber('yeah'));
	});

	it("Input must be integers", function(){
		assert.isFalse(validatePhoneNumber('%$#^&'));
	});

	it("Input must be 10 numbers", function(){
		assert.isFalse(validatePhoneNumber('123456789'));
	});

	it("Input 10 digits should work", function(){
		assert.isTrue(validatePhoneNumber('5154917865'));
	});

	it("Input 10 digits should work", function(){
		assert.isTrue(validatePhoneNumber('5159864078'));
	});

}); //end Testing Valid Phone Number
