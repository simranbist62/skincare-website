const subscribe_btn = document.querySelector(".subscribe-btn");
const input = document.querySelector("#email");
const message = document.querySelector("#message");

const validate = () => {
  //get the user email from local storage
  const savedEmail = localStorage.getItem("subscriberEmail");
  message.style.display = "block"; //shows popup message
  if (input.value.trim() === "" || !input.value.includes("@")) {
    message.innerText = "Please enter valid email";
  } else if (savedEmail === input.value) {
    message.innerText = "Already Subscribed";
  } else {
    //save the user email to local storage
    localStorage.setItem("subscriberEmail", input.value);
    message.innerText = "Thanks for subscribing";
    input.value = "";
  }
  // to automatically hide the text after 3 secs
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
};

subscribe_btn.addEventListener("click", validate);



