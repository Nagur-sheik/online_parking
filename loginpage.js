function validateForm() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    alert('Login successful');

  }