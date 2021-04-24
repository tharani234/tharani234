function validate()
{
    var username=document.getElementById("uname");
    if(username.value=="")
    {
        setErrorFor(username, 'Username cannot be blank');
   return false;
}
var password=document.getElementById("pass");
if(password.value=="")
{
    setErrorFor(password, 'Password cannot be blank')
    return false;
}
}