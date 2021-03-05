function login()
 {
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pass").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (uname == null || username == '')
     {
        alert("Please enter the username.");
     }
    else if (pass == null || password == '')
     {
        alert("Please enter the password.");
     }
    else if(!filter.test(uname))
	{
		alert("Enter valid email id.");
	}
    else if(pass.length<6 || pass.length>6)
    {
        alert("password length must be 6-8 characters");
    }
    else
    {
        alert("Enter password to login");
    }

}

function reset(){
    document.getElementById("uname").value="";
		document.getElementById("pass").value="";
}