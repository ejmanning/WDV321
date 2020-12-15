//Zip Code Test Plan

//has to be 5 digits
//must be numbers only
//no more or less than 5

let validateZipCode = function(inZip){
		
	if(inZip == "" || inZip == 'null' || inZip == 'undefined' || inZip.toString().length > 5 || inZip.toString().length < 5 || isNaN(inZip)){
		return false;
	}
	return true;
}

module.exports = validateZipCode;