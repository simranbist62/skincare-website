const cartFunction = () => {
  alert("Product added to cart!");
};

const buttons = document.querySelectorAll(".card_btn");

buttons.forEach((button) => {
  button.addEventListener("click", cartFunction);
});
