const newsletterForm = document.querySelector(".newsletter__form");
const emailErrorLabel = document.querySelector(".newsletter__label-error");
const emailInput = document.querySelector(".newsletter__input");
const successModal = document.querySelector("#success-modal");
const closeModalBtn = document.querySelector(".modal__close-btn");
const modalEmailDisplay = document.querySelector(".modal__email-display");

emailInput.addEventListener("input", (event) => validateEmail(event));

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const userEmail = formData.get("email");

  modalEmailDisplay.textContent = userEmail;

  if (emailInput.checkValidity()) {
    successModal.showModal();
  }
});

function validateEmail(event) {
  console.log(event);
}

closeModalBtn.addEventListener("click", (event) => {
  successModal.close();
  newsletterForm.reset();
});

successModal.addEventListener("close", () => {
  newsletterForm.reset();
});
