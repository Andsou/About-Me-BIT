function validate(e){
	hideErrors();

	if (formErrors()) {
		e.preventDefault();
		return false;
	}

	return true;
}

function formErrors() {
    let errorFlag = false;

    let userInput = ["fullname", "email", "phone", "message"];

    for (let i = 0; i < userInput.length; i++) {
        let input = document.getElementById(userInput[i]);

        if (input.value == "") {
            document.getElementById(userInput[i] + "_error").style.display = "block";

            if (!errorFlag) {
				document.getElementById(userInput[i]).focus();
			}

            errorFlag = true;
        }
    }

    let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	let email = document.getElementById('email').value;

    if(!emailRegex.test(email)){
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").focus();
            document.getElementById("email").select();
		}

		errorFlag = true;
	}

    let phoneRegex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    let phone = document.getElementById('phone').value;

    if(!phoneRegex.test(phone)){
		document.getElementById("phoneformat_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("phone").focus();
            document.getElementById("phone").select();
		}

		errorFlag = true;
	}

    return errorFlag;
}

function resetForm(e) {
    hideErrors();

    document.getElementById('fullname').focus();
}

function load() {
    hideErrors()

    document.getElementById('reset').addEventListener('click', resetForm);
	document.getElementById('submit').addEventListener('click', validate);

    document.getElementById('fullname').focus();
}

function hideErrors() {
    let error = document.getElementsByClassName("errors");

	for (let i = 0; i < error.length; i++) {
		error[i].style.display = 'none';
	}
}

document.addEventListener("DOMContentLoaded", load);