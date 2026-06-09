//Add to Cart Functionality
// to access elements
const card_btns = document.querySelectorAll(".card_btn");

card_btns.forEach((card_btn)=> {
  card_btn.addEventListener("click", addProduct);
});

//to fetch each product's detail and stored it in object
function addProduct(event){
  const card = event.target.closest(".product-card"); // to get the product card that contains the button clicked

  //store it in object
  const product = {
    img: card.querySelector("img").src,
    name: card.querySelector(".title").textContent,
    description: card.querySelector(".description").textContent,
    price: card.querySelector(".price").textContent
  };

  //get the existing cart from localStorage or create an empty cart
  let cart = JSON.parse(localStorage.getItem("cart")) || []; //convert it back to object while reading

  //add new product in cart
  cart.push(product);

  //save it to the localStorage
  localStorage.setItem("cart", JSON.stringify(cart)); //convert arrays/objects to string while saving

  //display message
  alert("Added to Cart!");
}