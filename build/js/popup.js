var orderBtn = document.querySelector(".popular__button");
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal__overlay");

orderBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && modal.classList.contains("modal--show")) {
    evt.preventDefault();
    modal.classList.remove("modal--show");
  }
});

modalOverlay.addEventListener("click", function(evt) {
  modal.classList.remove("modal--show");
});
