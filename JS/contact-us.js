

//access the form
const form = document.querySelector("#myForm");

//access the inputs inside the form
const userName=document.querySelector(".name");
const userEmail=document.querySelector(".email");
const userSubject=document.querySelector(".subject");
const userMessage=document.querySelector(".message");

form.addEventListener("submit", function(event){
    //prevent refresh problem
    event.preventDefault();

    //get existing user message if not create an empty array
    let message = JSON.parse(localStorage.getItem("user_info")) || [];

    // create user object
    let user_info= {
        nameInput: userName.value,
        emailInput: userEmail.value,
        subjectInput: userSubject.value,
        messageInput: userMessage.value
    }

    //add new message
    message.push(user_info);

    //save it to localStorage
    localStorage.setItem("user_info", JSON.stringify(message));

    form.reset(); //clears form after submit

    //success message
    alert("Message successfully recieved!");
})
