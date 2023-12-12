function validateForm(){
    var userNameRegx=/^[a-zA-Z 0-9_]{3,}$/
    var phoneRegx=/^\d{10}$/
    const emailRegx=/^[a-zA-z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   const passwordRegx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const username=document.getElementById('username').value;
const phone=document.getElementById('phone').value;
const email=document.getElementById('email').value;
const password=document.getElementById('pswd').value;
const pswrd=document.getElementById('pswrd').value;
// document.write(username);
// document.write(phone);
// document.write(email);
// document.write(password);
// document.write(pswrd);



resetErrorMessages();

//validation of username
if(!userNameRegx.test(username)){
    document.getElementById("usernameError").innerText="Invalid User Name";
    return;
}
//validation of phone num
if(!phoneRegx.test(phone)){
    document.getElementById("phoneError").innerText="Invalid Phone number";
    return;
}

//validation of email
if(!emailRegx.test(email)){
    document.getElementById("emailError").innerText="Invalid Mail ID";
    return;
}

//validation of password
if(!passwordRegx.test(pswrd)){
    document.getElementById("passwordError").innerText="Password must carry 8 characters"
    return;
}

if(password!=pswrd){
    document.getElementById("confirmpasswordError").innerText="password does not match"
    return;
}
alert("Form submitted successfully");
}

function resetForm(){
    document.getElementById('registrationForm').reset();;
    resetErrorMessages();
}
function resetErrorMessages(){
    const ErrorMessages=document.querySelectorAll(".error-message");
    ErrorMessages.forEach(message=>message.innerText="");
}