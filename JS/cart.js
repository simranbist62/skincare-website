//Access elements
const container = document.querySelector(".cartContainer");

//read the data from local storage
let cart = JSON.parse(localStorage.getItem("cart"));

// clear previous items
container.innerHTML = "";


//loop through each cart
cart.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <img src = "${item.img}" width="100">
    <h3>${item.name}.</h3>
    <p>${item.description}</p>
    <p>${item.price}</p> 
    `;

    container.appendChild(div);
})