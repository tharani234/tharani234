function validate() {
   var name=document.getElementById("first");
   if(name.value==""){
      document.getElementById("message1").innerHTML="Enter first name";
return false;
   }
   var name=document.getElementById("last");
   if(name.value==""){
      document.getElementById("message2").innerHTML="Enter last name";
return false;
   }
    var username= document.getElementById("uname");
    if(username.value== "") {
       document.getElementById("message3").innerHTML = "Choose a Gmail address";
       return false;
    }

    var password= document.getElementById("pass");
    if(password.value== "") {
       document.getElementById("message4").innerHTML = "Enter a password";
       return false;
    }

    var password=document.getElementById("pass");
       if(password.value.length < 8) {
       document.getElementById("message4").innerHTML = "Password must be at least 8 characters long";
       return false;
    }
    var password= document.getElementById("conf");
    if(password.value== "") {
       document.getElementById("message5").innerHTML = "Confirm your password";
       return false;
    }

    var password=document.getElementById("conf");
       if(password.value.length < 8) {
       document.getElementById("message5").innerHTML = "Confirm password must be at least 8 characters long";
       return false;
    }
   }