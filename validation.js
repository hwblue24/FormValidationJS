// required for submit event listener
const form = document.querySelector("#myForm");
const paragraphs = document.querySelectorAll("p")


paragraphs.forEach( function (p) {
    const inputField = p.children[1]
    const spanError = p.children[2]
    inputField.addEventListener("input",(event) => { 
        if (inputField.validity.valid) {
            spanError.textContent = ""
            spanError.className = "error"
        }else if (inputField.id === "mail")  { 
            emailValidationError(inputField, spanError)
        }else if (inputField.id === "country") {
            countryValidationError(inputField, spanError)
        } else if (inputField.id === "postal") { 
            postalValidationError(inputField, spanError)
        }else if (inputField.id === "password") { 
            passwordValidationError(inputField, spanError) 
        } else if (inputField.id === "confirmPassword") { 
            confirmPasswordValidationError(inputField, spanError) 
        }

    }) 
    
    
})



function emailValidationError (inputField, spanError) {
    if (inputField.validity.valueMissing) {
    // If empty
    spanError.textContent = "Cannot leave blank.";
  } else if (inputField.validity.typeMismatch) {
    // If it's not an email address,
    spanError.textContent = "Entered value needs to be an email address.";
  } 
  
  spanError.className = "error active"

}


function countryValidationError (inputField, spanError) {
    if (inputField.validity.valueMissing) {
        // If empty
        spanError.textContent = "Cannot leave blank.";
    } else if (inputField.validity.patternMismatch) {
        //if not matching 2 letter country codes
        spanError.textContent = "Two Letter Country Codes Only";
    }

    spanError.className = "error active"
}

function postalValidationError(inputField, spanError) {
    if (inputField.validity.valueMissing) {
        // If empty
        spanError.textContent = "Cannot leave blank.";
    } else if (inputField.validity.patternMismatch) {
        //if not matching Canadian Postal COdes
        spanError.textContent = "Canadian Postal Code Only";
    }

    spanError.className = "error active"
}

function passwordValidationError(inputField, spanError) {
    if (inputField.validity.valueMissing) {
        // If empty
        spanError.textContent = "Cannot leave blank.";
    } else if (inputField.validity.patternMismatch) {
        //if not matching Canadian Postal COdes
        spanError.textContent = "5-10 characters long and contain at least one uppercase letter, one digit and one special character";
    }

    spanError.className = "error active"
}

function confirmPasswordValidationError(inputField, spanError, password) {
    if (inputField.validity.valueMissing) {
        //if empty 
        spanError.textContent = "Cannot leave blank.";
    }
    spanError.className = "error active"
}