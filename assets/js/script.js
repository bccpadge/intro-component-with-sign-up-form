const form = document.querySelector("[data-js-form]"),
  inputs = document.querySelectorAll(".form__group-input"),
  formMessage = document.querySelector("[data-js-message]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("error");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "form__message");
      formMessage.setAttribute("aria-live", "polite");
      input.removeAttribute("placeholder");
      input.focus();
    } else {
      input.removeAttribute("aria-invalid");
      input.classList.remove("error");
      input.removeAttribute("aria-describedby");
    }
    if (input.type == "email") {
      if (validateEmail(input.value)) {
        input.classList.remove("error");
      } else {
        input.classList.add("error");
      }
    }
  });
});

function validateEmail(email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(String(email).toLowerCase());
}
