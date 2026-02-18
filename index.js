// const form = document.querySelector("form");
// const btnSubmit = document.querySelector("button");
// const email = document.querySelector('input[type="email"]');
// const emailError = document.querySelector("span.error");
// const emailSubscribed = document.querySelector(".emailSubscribed");
// // const modal = document.querySelector(".success-modal");
// const btnDismiss = document.querySelector(".btn-dismiss");
// const mainContent = document.getElementById("main-content");
// const modalWrapper = document.getElementById("modal-wrapper");
// console.log(emailError.textContent);

// form.addEventListener("submit", submitHandler);

// function submitHandler(e) {
//   e.preventDefault();

//   if (!email.validity.valid) {
//     console.log("it is a invalid email");
//     modalWrapper.classList.remove("open-modal");
//     modalWrapper.classList.add("close-modal");
//     showError();
//   } else {
//     const formData = new FormData(e.target);
//     // const emailData = formData.get("email");
//     const finalData = Object.fromEntries(formData.entries());
//     // console.log("getting the data", finalData.email);
//     emailSubscribed.textContent = finalData.email;
//     modalWrapper.classList.add("open-modal");
//     modalWrapper.classList.remove("close-modal");
//     mainContent.classList.add("blur-background");
//     modalWrapper.classList.remove("hidden");
//   }
// }
// btnDismiss.addEventListener("click", () => {
//   modalWrapper.classList.add("close-modal");
//   mainContent.classList.remove("blur-background");
// });

// email.addEventListener("input", (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = "";

//     // emailError.className = "error";
//   } else {
//     showError();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = "You need to enter a valid email address";
//   } else if (email.validity.tooShort) {
//     emailError.textContent = `email needs to be atleast 8 characters`;
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = `type the correct email format @som.com`;
//   }
//   emailError.className = "error";
// }

const modal = document.querySelector("#newsletter-modal");
const openBtn = document.querySelector(".newsletter__submit-btn");

openBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("clicked the submit btn");
  modal.showModal();
});
