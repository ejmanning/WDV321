let validatePhoneNumber = function(inPhone) {
  let phone = /^\d{10}$/;
  if(inPhone.match(phone)) {
    return true;
  }
  else {
    return false;
  }

};

module.exports = validatePhoneNumber;
