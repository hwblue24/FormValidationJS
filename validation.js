// required for submit event listener
const form = document.querySelector("#myForm");
const paragraphs = document.querySelectorAll("p")

const confirmPasswordDiv = document.querySelector("#confirmPasswordDiv")

let savedPassword = "" 


form.addEventListener("submit", (event)  => {
    const header = document.querySelector("h3"); 
    if (!form.checkValidity()) {
        header.textContent = "You need to fill out all the fields!"
        event.preventDefault();
    }else {
        header.textContent = ""
    }
})

//loops through p element 
paragraphs.forEach( function (p) {
     /// grabs input and span elements for each
    const inputField = p.children[1]
    const spanError = p.children[2]
    //attaches input event listener to each input field
    inputField.addEventListener("input",(event) => { 
        if (inputField.validity.valid) {
            spanError.textContent = ""
            spanError.className = "error" 
            if(inputField.id === "password") {
                savedPassword = inputField.value;
            }
        }else if (inputField.id === "mail")  { 
            emailValidationError(inputField, spanError)
        }else if (inputField.id === "country") {
            countryValidationError(inputField, spanError)
        } else if (inputField.id === "postal") { 
            postalValidationError(inputField, spanError)
        }else if (inputField.id === "password") { 
            passwordValidationError(inputField, spanError) 
        } 

    }) 
    
})


//handles password matching 
confirmPasswordDiv.addEventListener("input", () => {
    const input = confirmPasswordDiv.children[1];
    const span = confirmPasswordDiv.children[2]
    if(input.value === savedPassword) {
        input.setCustomValidity ("")
        span.textContent = ""
        span.className = "error"
        
    } else if (input.validity.valueMissing) {
        input.setCustomValidity ("Need to confirm")
        span.textContent = "Need to confirm"
        span.className = "error active"
        
    } else {
        input.setCustomValidity ("Password Does Not Match")
        span.textContent = "Password Does Not Match"
        span.className = "error active"
    }
        

})


//error handling code 

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





