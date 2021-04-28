function validate()
{

var name=document.myForm.first.value;
if(name=="")
{
    alert('enter first name');
    return false;
}
var name=document.myForm.last.value;
if(name=="")
{
    alert('enter last name');
    return false;
}
    var username=document.myForm.uname.value;
    if(username=="")
    {
        alert('Username cannot be blank');
        return false;
    }
var password=document.myForm.password.value;
if(password.length<8)
{
    alert('Password must be at least 8 characters long');
    return false;
}
var password=document.myForm.confirm.value;
if(password.length<8)
{
    alert('Confirm password must be at least 8 characters long');
    return false;
}
var pwd = /^(?=.*[0-9])$/;
var password = document.myForm.password.value;
  if(password.value.match(pwd)) {  
    alert('check password value');
    return false;
  }
var pwd = /^(?=.*[A-Z])$/;
var password = document.myForm.password.value;
  if(password.value.match(pwd)) {  
    alert('check password value');
    return false;
  }
}
