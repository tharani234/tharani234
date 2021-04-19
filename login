<html>

<head>
    <title>Form validation</title>

    <link rel="stylesheet" href="login1.css">
    <div id="box">
        <h2>sign in</h2>
        <h4>Use your Google Account</h4>


        <script type="text/javascript">

            function validate() {
                var username = document.getElementById ("uname");
                var password = document.getElementById("pass");
                var pass = /^(?=.[A-Z])$/;
                

                if (username.value == "") {
                    alert("please enter the username");
                    return false;
                }

                if (password.value == "") {
                    alert("please enter the password");
                    return false;
                }
                if (password.value.length < 6) {
                    alert("Password must be at least 6 characters long");
                    return false;
                }

                if (password.value.pass) {

                    alert("check the password value")
                    return false;
                }
                else {
                    alert("Go to the next page")
                    return true;
                }
            }
        </script>
</head>
<body>
    <div id="inputBox">
        <form onsubmit="return validate()" action="messagae.html">
            <input id="uname" placeholder="username" type="email">
            <input id="pass" placeholder="password" type="password">
            <button type="submit">submit</button>
        </form>
    </div>
</body>

</html>

//css


*body{
    
    background-position: center;
    font-family:sans-serif ;
    background-size: cover;
    position: absolute;
    
}
#box{
    width: 450px;
    margin: 300px;
    

    background:rgb (0,0,0,0,8) ;
    border: 1px solid lightslategray;
    border-radius: 8px;
    position: relative;
    height: 550px;
    align-items: center;
margin-left:650px ;
margin-top: 200px;

    
}
#box h2{
text-align: center;
    padding-left: 15px;
    font-size: 24px;
    font-weight:400;
    font-family: sans-serif;
    padding-top: 60px;
}
#box h4{
    color: black;
    font-weight: 200;
    letter-spacing: 1px;
    text-align: center;
    font-size: 16px;
    font-family: sans-serif;
background-color:transparent;
font-size: bold;
}
#inputBox{
    margin: 20px;
    border-radius:3px;   
    padding:10px 10px;
    font-size: 16px;
    text-align: center;
    border-width: small;
}
.email{
    height: 50px;
    width: 350px;
    font-size: larger;
    padding: 9px;
    border-radius: 8px;
    border-color: lightslategray;
    
}
.password{
    height: 50px;
    width: 350px;
    font-size: larger;
    padding: 9px;
    border-radius: 8px;
    border-color: lightslategray;
    }
.email:focus{
    outline: none;
    border: 2px solid rgb(8, 118, 228);
    color: black;
}
.password:focus{
    outline: none;
    border:2px solid rgb(8, 118, 228);
    color: black;
}
button{
padding:50px 10px;
background-color: dodgerblue;
color: white;
border-radius: 5px;
position: absolute;
padding: 13px 10px;
margin-top: 10px;
margin: 12px ;
margin-left: 200px;
align-items: center;
font-size: small;
display: block;
border-color:dodgerblue ;
width: 90px;
height: 45px;
}
*:focus{
    outline: none;
}
