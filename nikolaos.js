function containsOnlyLetters(string) {
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] >= 'A' && string[i] <= 'Z') && !(string[i] >= 'a' && string[i] <= 'z')) {
            return false;
        }
    }
    return true;
}


document.getElementById('quizForm').addEventListener('submit', function(event){

    event.preventDefault();

    var isValid = true;

    document.getElementById('firstNameError').textContent = "";
    document.getElementById('lastNameError').textContent = "";
    document.getElementById('email').textContent = "";
    document.getElementById('messageDiv').textContent = "";

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var emailAddress = document.getElementById('email').value;

    if (!containsOnlyLetters(firstName)) {
        document.getElementById('firstNameError').textContent = "Please use only letters for first name!";
        isValid = false;
    }

    if (!containsOnlyLetters(lastName)) {
        document.getElementById('lastNameError').textContent = "Please use only letters for last name!";
        isValid = false;
    }

    if (!emailAddress.includes("@")){
        document.getElementById('emailError').textContent = "Please use a valid email address(include @)!";
        isValid = false;
    }

    if (isValid) {
        document.getElementById('quizForm').submit();
        document.getElementById("messageDiv").textContent = "Form submitted succesfully!";
    }   
})