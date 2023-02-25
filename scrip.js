function validateName() {
    let name = document.getElementById('username').value;
    let errormsg = document.getElementById('usr-error');
    if (name.trim() == "") {
        errormsg.innerHTML = "User Name Cant'be blank"
        return false;
    } else if (name.length < 5) {
        errormsg.innerHTML = "User Name must not be less than 5 charactor";
        return false;
    }
    else {
        errormsg.innerHTML = "";
        return true;
    }
}
function validateEmail() {
    let email = document.getElementById('email').value;
    let errormsg = document.getElementById('email-error');
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() == "") {
        errormsg.innerHTML = "Email Cant'be blank"
        return false;
    } else if (!email.match(regExp)) {
        errormsg.innerHTML = "Email not in global format";
        return false;
    }
    else {
        errormsg.innerHTML = "";
        return true;
    }
}
function validatePassword() {
    let pass = document.getElementById('password').value;
    let errormsg = document.getElementById('pass-error');
    if (pass.trim() == "") {
        errormsg.innerHTML = "Password Cant'be blank"
        return false;
    } else if (pass.length < 6 || pass.length > 20) {
        errormsg.innerHTML = "Password Should be 6-20 characters";
        return false;
    }
    else {
        errormsg.innerHTML = "";
        return true;
    }
}
function validateRepeat() {
    let pass = document.getElementById('password').value;
    let re_pass = document.getElementById('repeat').value;
    let errormsg = document.getElementById('rep-error');
    if (re_pass != pass) {
        errormsg.innerHTML = "Password Doesn't match"
        return false;
    }
    else {
        errormsg.innerHTML = "";
        return true;
    }
}
function validateForm() {

    let errormsg = document.getElementById('sub-error');

    if (!validateName() || !validateEmail() || !validatePassword() || !validateRepeat()) {
        errormsg.innerHTML = "Please Resolve the Errors";
        return false;
    } else{
        errormsg.innerHTML = "";
        return true;
    }

}