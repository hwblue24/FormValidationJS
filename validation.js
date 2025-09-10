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
        }else { 
            emailValidationError(inputField, spanError)
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




