
/sign-log function/
const log_button = document.getElementById("btnLogin");
var sign_status= false;
const forgotPass= document.getElementById("forgotPass");
function logToSign(){
    if(sign_status==false){
        document.getElementById("loginSlide").classList.remove("sign");
        document.getElementById("loginSlide").classList.add("log");
        document.getElementById("signTrans").classList.add("d-none");
        document.getElementById("loginTrans").classList.remove("d-none");
    }
};
function signToLog() {
    if(sign_status){
        document.getElementById("loginSlide").classList.remove("log");
        document.getElementById("loginSlide").classList.add("sign");
        document.getElementById("loginTrans").classList.add("d-none");
        document.getElementById("signTrans").classList.remove("d-none");
    }
}
log_button.addEventListener('click',()=>{
    let userNameLog= document.getElementById("userName");
    let passwordInput= document.getElementById("passwordInput");
    if(userNameLog.value!="" && passwordInput.value!=""){
        document.location.assign("home.html");
    }
    
})
let invalidPass= document.getElementById("invalidPass");
let invalidUser = document.getElementById("invalidUser");
let notMatchPass= document.getElementById("notMatchPass");
function checkUsername() {
    let userName = document.getElementById("userNameSignup").value;
    let reSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (userName === "") { 
        invalidUser.innerHTML = ""; 
        invalidUser.classList.remove("invisible");
        invalidUser.innerHTML = "Enter user name*";
        return false;
    }
    if (reSpecial.test(userName)) { 
        invalidUser.innerHTML = ""; 
        invalidUser.classList.remove("invisible");
        invalidUser.innerHTML = "User name cannot contain special characters*";
        return false;
    }
    return true; 
}
function checkPassword(){
    let reLength = /(?=.*\d).{8,}/;
    let reUpCase= /(?=.*[A-Z])/;
    let reLowCase= /(?=.*[a-z])/;
    let reNum= /(?=.*[0-9])/;
    let reSpecial= /(?=.*[@#$%^&+=*])/;
    let pass= document.getElementById("passwordSignupInput").value;
    invalidUser.classList.add("invisible");
    if(reLength.test(pass)==false){
        invalidPass.innerHTML="";
        invalidPass.classList.remove("invisible");
        invalidPass.innerHTML="Minimum length must be 8*";
        return false;
    }
    if(reUpCase.test(pass)==false){
        invalidPass.innerHTML="";
        invalidPass.classList.remove("invisible");
        invalidPass.innerHTML="";
        invalidPass.innerHTML="Password must include uppercase letter*";
        return false;
    }
    if(reNum.test(pass)==false){
        invalidPass.innerHTML="";
        invalidPass.classList.remove("invisible");
        invalidPass.innerHTML="";
        invalidPass.innerHTML="Password must include number*";
        return false;
    }
    if(reLowCase.test(pass)==false){
        invalidPass.innerHTML="";
        invalidPass.classList.remove("invisible");
        invalidPass.innerHTML="";
        invalidPass.innerHTML="Password must include lowercase letter*";
        return false;
    }
    if(reSpecial.test(pass)==false){
        invalidPass.innerHTML="";
        invalidPass.classList.remove("invisible");
        invalidPass.innerHTML="";
        invalidPass.innerHTML="Password must include @#$%^&+=*";
        return false;
    }
        return true;
        
}
function checkConfirmPass(){
    invalidPass.classList.add("invisible");
        if(document.getElementById("confirmPasswordInput").value!=document.getElementById("passwordSignupInput").value){
            notMatchPass.innerHTML="";
            notMatchPass.classList.remove("invisible");
            notMatchPass.innerHTML= "Password not match*";
            return false;
        }
        else{
            return true;
        }
}
function submit(){
        if(checkUsername() && checkPassword() && checkConfirmPass()){
            document.querySelector(".input-form").classList.add("visually-hidden");
            document.querySelector(".success-form").classList.remove("visually-hidden");
            sign_status=true;
        }
}

