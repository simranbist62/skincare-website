//For filter option
const categories = document.querySelectorAll(".category");
const products = document.querySelectorAll(".card");
const brands=document.querySelectorAll(".brand");

//category
categories.forEach((category) => {
  category.addEventListener("change", filterProducts);
});

//brand
brands.forEach((brand) => {
    brand.addEventListener("change", filterProducts)
})

function filterProducts() {
  const selectedCategories = []; //list to store products based on categories
  const selectedBrands = []; //list to store products based on brands
  
  //to get product by categories
  categories.forEach((category) => {
    if (category.checked) {
        selectedCategories.push(category.value);
    }
  });

  //to get product by brand
  brands.forEach((brand) => {
    if(brand.checked){
        selectedBrands.push(brand.value);
    }
  });

  //filter products
products.forEach((product) => {
    const productCategory = product.getAttribute("data-category");
    const productBrand = product.getAttribute("data-brand");

    const categoryMatch = selectedCategories.length===0 || selectedCategories.includes(productCategory);
    const brandMatch = selectedBrands.length === 0|| selectedBrands.includes(productBrand);

    if (categoryMatch && brandMatch){
        product.style.display="block";
    }
    else{
        product.style.display="none";
    }
});
}

//For adding product to cart
const card_btns = document.querySelectorAll(".card_btn");


card_btns.forEach((card_btn)=>{
    card_btn.addEventListener("click", addProduct);
    // localStorage.setItem("cart_item");
}) 

function addProduct(){
    console.log("hi");
}