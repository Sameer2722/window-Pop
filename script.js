
document.addEventListener("DOMContentLoaded", function () {
  // Function to open the popup
  var popup = document.getElementsByClassName("popup-container")[0]; // Assuming there's only one element with the class "popup-container"
  popup.style.cssText = "opacity: 1; visibility: visible; pointer-events: all;";

  // Correcting the closeicon code
  var closeicons = document.getElementById('close_icon');
  closeicons.addEventListener("click",function(){
    popup.style.cssText = "opacity: 0; visibility: hidden; pointer-events: none;";
  })
});



if (window.matchMedia("(min-width:768px)").matches) {
  document.addEventListener("DOMContentLoaded", function () {
    var addToCartContainer = document.querySelector(".sticky-cart-container");
  
    window.addEventListener("scroll", function () {
       // Adjust the value (100 in this example) based on when you want the button to appear
       if (window.scrollY > 835 ) {
          addToCartContainer.classList.add("sticky-show");
       } else {
          addToCartContainer.classList.remove("sticky-show");
       }
    });
  });
}

if (window.matchMedia("(max-width:767px)").matches) {
  document.addEventListener("DOMContentLoaded", function () {
    var addToCartContainer = document.querySelector(".sticky-cart-container");
  
    window.addEventListener("scroll", function () {
       // Adjust the value (100 in this example) based on when you want the button to appear
       if (window.scrollY > 1500 ) {
          addToCartContainer.classList.add("sticky-show");
       } else {
          addToCartContainer.classList.remove("sticky-show");
       }
    });
  });
}


document.querySelector('.close_cart').addEventListener('click', function () {
  var cartcontainer = document.getElementsByClassName('sticky-cart-container')[0];
  cartcontainer.classList.remove("sticky-show");
});
