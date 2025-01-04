const form = document.querySelector("#form");
const userInp = document.querySelector("#username");
const emailInp = document.querySelector("#email");
const passInp = document.querySelector("#password");
const conPInp = document.querySelector("#Cpassword");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const hasErrors = validateInputs(); 
    if (!hasErrors) { 
        alert("Form registered successfully");
        form.reset();
        clearSuccessStates(); 
    }
});

const validateInputs = () => {
    let hasErrors = false;
    const userVal = userInp.value.trim();
    const emailVal = emailInp.value.trim();
    const passVal = passInp.value.trim();
    const CpassVal = conPInp.value.trim();

    if (userVal === "") {
        setError(userInp, "Username is required");
        hasErrors = true;
    } else {
        setSuccess(userInp);
    }

    if (emailVal === "") {
        setError(emailInp, "Email is required");
        hasErrors = true;
    } else if (!isValidEmail(emailVal)) {
        setError(emailInp, "Provide a valid email address");
        hasErrors = true;
    } else {
        setSuccess(emailInp);
    }

    if (passVal === "") {
        setError(passInp, "Password is required");
        hasErrors = true;
    } else if (passVal.length < 8) {
        setError(passInp, "Password must be at least 8 characters");
        hasErrors = true;
    } else {
        setSuccess(passInp);
    }

    if (CpassVal === "") {
        setError(conPInp, "Confirmation password is required");
        hasErrors = true;
    } else if (CpassVal !== passVal) {
        setError(conPInp, "Passwords do not match");
        hasErrors = true;
    } else {
        setSuccess(conPInp);
    }

    return hasErrors; 
};

const setError = (element, message) => {
    const inputCtrl = element.parentElement;
    const errorDisplay = inputCtrl.querySelector(".error");
    errorDisplay.innerText = message;

    inputCtrl.classList.remove("success");
    inputCtrl.classList.add("error");
};

const setSuccess = (element) => {
    const inputCtrl = element.parentElement;
    const errorDisplay = inputCtrl.querySelector(".error");
    errorDisplay.innerText = "";

    inputCtrl.classList.remove("error");
    inputCtrl.classList.add("success");
};

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email); 
}