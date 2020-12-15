
function createFile() {
  localStorage.fullName=document.querySelector("#fullName").value;
  localStorage.phoneNumber=document.querySelector("#phoneNumber").value;
  localStorage.email=document.querySelector("#email").value;
  if (document.querySelector("#create"))
    document.querySelector("#formSubmit").innerHTML= "Your data has been stored";
    else  document.querySelector("#formSubmit").innerHTML= "Your data has been updated";
  document.querySelector("form").style.display="none"
}


function addAuthentication() {
    let authentic = new Date();
    authentic.setTime(authentic.getTime()+(1000*60*60*24*7));
    let expireString="expires="+authentic.toGMTString();
    document.cookie="authentication =Authenticated Page until "+authentic.toGMTString()+ "; expires=" + expireString + ";"
    console.log(expireString);
    console.log(document.cookie)
}

  function addCookie(tag, value) {
    var expireDate = new Date()
    var expireString = "";
    expireDate.setTime(expireDate.getTime() + (1000 * 60 * 60 * 24 * 365) );
    expireString = "expires="+ expireDate.toGMTString();
    console.log(expireString);
    document.cookie = tag + "=" + escape(value) + ";" + expireString + ";"
  }

  function getCookie(tag) {
    var value = null
    var myCookie = document.cookie + ";"
    var findTag = tag + "=";
    var endPos;
    if (myCookie.length > 0 ) {
      var beginPos = myCookie.indexOf(findTag);
      if (beginPos != -1) {
        beginPos = beginPos + findTag.length;
        endPos = myCookie.indexOf(";", beginPos);
        if (endPos == -1)
          endPos = myCookie.length
        value = unescape(myCookie.substring(beginPos, endPos))
      }
    }
   return value
  }


  function deleteCookie(tag) {
console.log("Deleting " + tag + " cookie");
    var Yesterday = 24 * 60 * 60 * 1000;
    var expireDate = new Date();
    expireDate.setTime (expireDate.getTime() - Yesterday);
    document.cookie = tag + "=nothing; expires=" + expireDate.toGMTString();
  }



    function deleteCookies() {
          let allCookies = document.cookie.split(';');
console.log(document.cookie);
      // The "expire" attribute of every cookie is
      //Set to "Thu, 01 Jan 1970 00:00:00 GMT"
      for (var i = 0; i < allCookies.length; i++) {
        let name=allCookies[i].split("=");
        deleteCookie(name[0]);
          }
    }
