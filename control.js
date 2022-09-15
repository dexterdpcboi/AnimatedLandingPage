var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");


 function validateEmail(){
    emailLabel.style.bottom = "40px";

    if(!emailField.ariaValueMax.match(/^[A-Za-z\._\-]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "please enter valid email";
        return false
     }
 }
 

enrollBtn.onClick = function(){
    confirm ("you're about to enroll")
}

