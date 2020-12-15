// JavaScript Document

let assert = require('chai').assert;	//Chai assertion library
let validInput = require('../app/validateRequiredField');
let validatePhoneNumber = require('../app/validatePhoneNumber');
let validateEmailAddress = require('../app/validateEmailAddress');
let validateZipCode = require('../app/validateZipCode');
let findAndReplace = require('../app/findAndReplace');

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

describe("Testing Valid Email Address", function(){

	it("Input is required", function(){
		assert.isFalse(validateEmailAddress(' '));
	});

	it("@ is not present", function(){
		assert.isFalse(validateEmailAddress('mysite.ourearth.com'));
	});

	it("TLD can not start with dot", function(){
		assert.isFalse(validateEmailAddress('mysite@.com.my'));
	});

	it("No character before @", function(){
		assert.isFalse(validateEmailAddress('@you.me.net'));
	});

	it("should work", function(){
		assert.isTrue(validateEmailAddress('my.ownsite@ourearth.org'));
	});

	it("should work", function(){
		assert.isTrue(validateEmailAddress('mysite@you.me.net'));
	});

}); //end Testing Valid Email Address

describe("Testing Valid Zip Code", function(){

	it("Input is required", function(){
		assert.isFalse(validateZipCode(' '));
	});

	it("Greater than 5 digits", function(){
		assert.isFalse(validateZipCode('50796884'));
	});

	it("Less than 5 digits", function(){
		assert.isFalse(validateZipCode('5012'));
	});

	it("Not a number", function(){
		assert.isFalse(validateZipCode('you'));
	});

	it("should work", function(){
		assert.isTrue(validateZipCode('50111'));
	});

	it("should work", function(){
		assert.isTrue(validateZipCode('50109'));
	});

}); //end Testing Valid Zip Code

describe("Testing Find '/<> and Replace with -", function(){

	it("No input returns the same", function(){
		assert.equal(findAndReplace(' '), ' ');
	});

	it("Contains <", function(){
		assert.equal(findAndReplace('Yes < Sir'), 'Yes - Sir');
	});
	
	it("Contains >", function(){
		assert.equal(findAndReplace('No > Sir'), 'No - Sir');
	});
	
	it("Contains '", function(){
		assert.equal(findAndReplace("Hello ' there"), 'Hello - there');
	});
	
	it("Contains /", function(){
		assert.equal(findAndReplace('No / Yes'), 'No - Yes');
	});
	
	it("Should be the same", function(){
		assert.equal(findAndReplace('Erica - Hello!'), 'Erica - Hello!');
	});
	
	it("Should be the same", function(){
		assert.equal(findAndReplace('Yes Sir'), 'Yes Sir');
	});
}); //end Testing Find and Replace

