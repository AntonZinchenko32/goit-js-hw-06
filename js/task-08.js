const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

// Прибераємо валідацію форми браузером
form.setAttribute("novalidate", "");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }
    
  const loginData = {
    email: email.value,
    password: password.value
  }

  console.log(loginData);
  event.currentTarget.reset();
}
