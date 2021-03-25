	//Validation Code For Inputs

    var email = document.getElementById("usname");
    var password = document.getElementById("pass");
    
    
    var email_error = document.getElementById("email_error");
    var pass_error = document.getElementById("pass_error");
    
    email.addEventListener('textInput', email_Verify);
    password.addEventListener('textInput', pass_Verify);  
    
    function validated() {
        var emailValue = email.value.trim();
        var passwordValue = password.value.trim();
        var atpos = email.value.indexOf("@");
        var dotpos = email.value.lastIndexOf(".");
        if (emailValue === '') {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (passwordValue === '') {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
        } 
        if (atpos < 1 || ( dotpos - atpos < 2 ) ){
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (emailValue.length < 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
        }
        if (passwordValue.length < 6) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
        }
    
    }
    function email_Verify(){
        if (email.value.length >= 8) {
            email.style.border = "1px solid #485e74";
            email_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid #485e74";
            pass_error.style.display = "none";
            return true;
        }
    }
    
    