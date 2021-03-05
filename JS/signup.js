function registCheckXXXXXXXXXXX(){
    var textValue = document.getElementsByName('phone')[0].value;
    
    if(textValue.length != 10){
        document.getElementById('phonemsg').innerHTML = 'Please fill in 10 digits.'
    }            
    else{
        for(var i = 0; i < textValue.length; i++){
            if(textValue.substr(i,1) < "0" || textValue.substr(i,1) > "9"){
                document.getElementById('phonemsg').innerHTML = 'Only digits please.'
            }
        }    
    }

    var textValue1 = document.getElementsByName('password')[0].value;
    if(textValue1.length < 8){
        document.getElementById('passwordmsg').innerHTML='No shorter than 8 digits';
    }
    var textValue2 = document.getElementsByName('passwordDoubleCheck')[0].value;
    if(textValue2.length < 8){
    document.getElementById('passwordDoubleCheckmsg').innerHTML = 'No shorter than 8 digits';
}
    else{
        if(textValue1 != textValue2){
            document.getElementById('passwordDoubleCheckmsg').innerHTML = 'Not the same password';
        }
    }
    var textValue3 = document.getElementsByName('username')[0].value;
    if(textValue3.length > 10){
        document.getElementById('usernamemsg').innerHTML = 'No longer than 10 digits';
    }
    var textValue4 = document.getElementsByName('sign')[0].value;
    if(textValue4.length >10){
        document.getElementById('signmsg').innerHTML = 'No longer than 10 digits';
    }

}

function clearPhoneMsg(){
    document.getElementById('phonemsg').innerHTML = '';
}

function phoneOnfocus(){
   
    document.getElementById('phonemsg').innerHTML = '';
}
function phoneOnblur(){
   var textValue = document.getElementsByName('phone')[0].value;      
   if(textValue.length != 10){
        document.getElementById('phonemsg').innerHTML = 'Must be 10 digits';
   }
   else{
        for(var i = 0; i < textValue.length; i++){
            if(textValue.substr(i,1)<"0" || textValue.substr(i,1) > "9"){
                document.getElementById('phonemsg').innerHTML = 'ONLY number';
            }
        }
    }    
}
function passwordOnfocus(){
    document.getElementById('passwordmsg').innerHTML = '';
}
function passwordOnblur(){
    var textvalue1 = document.getElementsByName('password')[0].value;
    if(textvalue1.length < 8){
        document.getElementById('passwordmsg').innerHTML = 'No shorter than 8 digits';
    }  
}

function passwordDoubleCheckOnfocus(){
    document.getElementById('passwordDoubleCheckmsg').innerHTML = '';
}
function passwordDoubleCheckOnblur(){
    var textValue1 = document.getElementsByName('password')[0].value; 
    
    
    var textValue2 = document.getElementsByName('passwordDoubleCheck')[0].value;
    if(textValue2.length < 8){
        document.getElementById('passwordDoubleCheckmsg').innerHTML = 'No shorter than 8 digits';
    }
    else{
        if(textValue1  !=  textValue2){
            document.getElementById('passwordDoubleCheckmsg').innerHTML = 'Not the same password';
        }
    }
}
function usernameOnfocus(){
    document.getElementById('usernamemsg').innerHTML = "";
}
function usernameOnblur(){
    var textValue3 = document.getElementsByName('username')[0].value;
    if(textValue3.length > 10){
        document.getElementById('usernamemsg').innerHTML = "No longer than 10 digits";
    }
}
function signOnfocus(){
    document.getElementById('signmsg').innerHTML = "";
}
function signOnblur(){
    var textvalue4 = document.getElementsByName('sign')[0].value;
    if(textvalue4.length > 10){
        document.getElementById('signmsg').innerHTML = "No longer than 10 digits";
    }
}

function registCheck(){
     phoneOnblur();
     passwordOnblur();
     passwordDoubleCheckOnblur();
     usernameOnblur();
     signOnblur();
    
}














