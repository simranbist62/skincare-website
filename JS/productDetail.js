const addButton = document.querySelector(".card_btn");
addButton.addEventListener("click", addToCart);

function addToCart() {

  const product = {
    img: document.querySelector(".product-image img").src,
    name: document.querySelector(".title").textContent,
    description: document.querySelector(".description").textContent,
    price: document.querySelector(".price").textContent
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // check if already exists
  const exists = cart.some(item => item.name === product.name);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
  } else {
    alert("Already in cart!");
  }
}

//Increase and decrease quantity
const increaseBtn = document.querySelector(".increase-qty");
const quantity = document.querySelector(".qty");
const decreaseBtn = document.querySelector(".decrease-qty");

//to increase quantity
increaseBtn.addEventListener("click",() => {
  let currentValue = parseInt(quantity.textContent);
  quantity.textContent = currentValue+1;
});

//to decrease quantity
decreaseBtn.addEventListener("click", () => {
  let currentValue = parseInt(quantity.textContent) ;
  if (currentValue>0){
    quantity.textContent = currentValue-1;
  }
  else{
   quantity.textContent= 0;
  }
})