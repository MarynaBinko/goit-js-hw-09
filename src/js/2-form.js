
const form = document.querySelector(".feedback-form");
const email = form.querySelector(".feedback-form-input-email");
const message = form.querySelector(".feedback-form-input-message");
const keyValue = "feedback-form-state";

email.addEventListener("input", handleEmail);
message.addEventListener("input", handleMessage);
form.addEventListener("submit", handleSubmit);

if (localStorage.getItem(keyValue)) {
    const savedValues = JSON.parse(localStorage.getItem(keyValue));
    email.value = savedValues.email || "";
    message.value = savedValues.message|| "";
  }

function handleEmail(event){
const values = {
   email: email.value.trim(),
   message: message.value.trim(),
}
localStorage.setItem(keyValue, JSON.stringify(values));
}

function handleMessage(event){
    handleEmail();
}


function handleSubmit(event){
  event.preventDefault();
   if (email.value.trim() && message.value.trim()) {
    const formData = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    console.log("Form data:", formData);
    form.reset();
    localStorage.removeItem(keyValue);
   } else {alert(`Please fill out both email and message fields before submitting.`)
  }      
}









