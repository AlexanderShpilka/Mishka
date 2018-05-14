var carts = document.querySelectorAll(".product-card__cart");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");

for (var i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
  });
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && modal.classList.contains("modal--show")) {
    evt.preventDefault();
    modal.classList.remove("modal--show");
  }
});

modalOverlay.addEventListener("click", function(evt) {
  modal.classList.remove("modal--show");
});
