var form = document.getElementById('form');
var username = document.getElementById('username');
var password = document.getElementById('pass');
var email = document.getElementById('email');
var password2 = document.getElementById('passc');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     checkInputs(); 
// });

function checkInputs() {
    //get the values from the inputs 
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    if(usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'username cannot be blank');
        return false;
    }
    else {
        // add success class
        setSuccessFor(username);
    }
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        return false;
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
        return false;
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password two cannot be blank');
        return false;
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
        return false;
	} else{
		setSuccessFor(password2);
	}
}
function setErrorFor(input,message) {
    var formControl = input.parentElement; //form-control
    var small = formControl.querySelector("small");

    //add error mesage inside the small tag
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    var formControl = input.parentElement; //form-control
    formControl.className = 'form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

