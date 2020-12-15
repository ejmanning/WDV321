//Email Address Test Plan

//Contains @ after characters
//before the @ sign can contain
//letters a-z
//numbers 0-9
//characters !# $ % & ' * + - / = ? ^ _ ` { | } ~

// ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
//valid top level domain can contain letters, digits, hyphens, and dots

let validateEmailAddress = function(inEmail){
	
	let email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(inEmail.match(email)){
		return true;
	}
	else {
		return false;
	}
	
}

module.exports = validateEmailAddress;
