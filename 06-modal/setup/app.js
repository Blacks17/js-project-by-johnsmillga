// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
modal.addEventListener("click", () => {
  if (modal.classList.contains("open-modal")) {
    modal.classList.remove("open-modal");
  }
});
