// required for submit event listener
const form = document.querySelector("#myForm");
const formFields = document.querySelectorAll(".formField")


formFields.forEach( function (input) {
    input.addEventListener("input",(event) => {
        if (input.id === "mail") {
            const emailError = document.querySelector("span.error");
            if (input.validity.valid) {
                emailError.textContent = ""
                emailError.className = "error"
            } else {
                emailValidationError(input, emailError);
            }
           
        } else if (input.id === "country") {
            console.log("country")
            
        } else if (input.id === "postal") {
            console.log("postal code")
            
        } else if (input.id === "password") {
            console.log("pass")

        } else if (input.id === "confirmation") {
            console.log("confirmation")

        }
    }) 
    
})


function emailValidationError (input, emailError) {
    if (input.validity.valueMissing) {
    // If empty
    console.log("empty")
    emailError.textContent = "You need to enter an email address.";
  } else if (input.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } 
  
  //emailError.className = "error active"

}

//function emailValidation () {}

//function emailValidation () {}

//function emailValidation () {}


