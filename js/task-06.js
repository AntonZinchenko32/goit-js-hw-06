const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", () => {
    
    textInput.classList.remove("invalid", "valid");

    if (textInput.value.length === Number(textInput.getAttribute("data-length"))) {
        
        textInput.classList.add("valid");
    }
    else {
        textInput.classList.add("invalid");
    }
});

