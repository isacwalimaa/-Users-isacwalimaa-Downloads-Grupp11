//gets the JSON and puts it in the right place
document.addEventListener('DOMContentLoaded',  () => {
    document.getElementById("contact-fname").value = localStorage.getItem("contact-fname");
    document.getElementById("contact-lname").value = localStorage.getItem("contact-lname");
    document.getElementById("contact-email").value = localStorage.getItem("contact-email");
    document.getElementById("contact-pnumber").value = localStorage.getItem("contact-pnumber");
    document.getElementById("contact-message").value = localStorage.getItem("contact-message");
})
//stores the different values taken from the contact form.
const form = document.getElementById("form");
const fname = document.getElementById("contact-fname");
const lname = document.getElementById("contact-lname");
const number = document.getElementById("contact-pnumber");
const email = document.getElementById("contact-email");
const message = document.getElementById("contact-message");


//submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();
        alert("We will be in contact shortly");
        fname.value='';
        lname.value='';
        number.value='';
        email.value='';
        message.value='';
});

//real time feedback.
form.addEventListener('keyup', function(e) {
    e.preventDefault();

    inputCheck();
    
});

function inputCheck() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();

    if (fnameValue === "") {
        //show error
        setErrorFor(fname, "First Name cannot be blank");
    } else {
        //success class is added
        setSuccessFor(fname);
    }


    if (lnameValue === "") {
        //show error
        setErrorFor(lname, "Last Name cannot be blank");
    } else {
        //success class is added
        setSuccessFor(lname);
    }

    if (!onlyDigits(numberValue)) {
        //show error
        setErrorFor(number, "Phone number can only contain digits");
    } else if (numberValue.length < 8 || numberValue.length > 10){
        
        setErrorFor(number, "Phone number can be between 8 to 10 digits long");
    } else {
        //success class is added
        setSuccessFor(number);
    }

    if (emailValue === "") {
        //show error
        setErrorFor(email, "E-mail cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "E-mail is not valid");
    } else {
        //success class is added
        setSuccessFor(email);
    }
}

function setErrorFor(input, errorMessage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //querySelector() to pick small from html.
    small.innerText = errorMessage;

    //add the error class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //add success class
    formControl.className = "form-control success";
}

function onlyDigits(number) {
    return /^[0-9]+$/.test(number);
}

function isEmail(email) {
    //regex on for a valid email example: john.smith@gmail.com
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function deleteInput(){

}

//listens to the form and updates the local JSON file in real time.
window.addEventListener('keyup', () =>{
    var fnamn = document.getElementById("contact-fname").value;
    var lnamn = document.getElementById("contact-lname").value;
    var number = document.getElementById("contact-pnumber").value;
    var email = document.getElementById("contact-email").value;
    var msg = document.getElementById("contact-message").value;
    localStorage.setItem("contact-fname", fnamn);
    localStorage.setItem("contact-lname", lnamn);
    localStorage.setItem("contact-pnumber", number);
    localStorage.setItem("contact-email", email);
    localStorage.setItem("contact-message", msg);
});