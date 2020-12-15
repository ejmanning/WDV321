//Find and Replace test plan

//if ' is in the value replace with -
//if < is in the value replace with -
//if > is in the value replace with -
//if / is in the value replace with -

let findAndReplace = function(inVal){
	
	inVal = inVal + "";
	
    if(inVal.includes("'") || inVal.includes("<") || inVal.includes(">") || inVal.includes("/") ){
    	inVal = inVal.replace(/\'/g, "-");
        inVal = inVal.replace(/</g, "-");
        inVal = inVal.replace(/>/g, "-");
        inVal = inVal.replace(/\//g, "-");
	}
	return inVal;	
			   
	
}

module.exports = findAndReplace;