
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
form.reset();
localStorage.removeItem(keyValue);

}







