const form = document.querySelector(".login-form");

function validateForm(inputs) {
  let isValid = true;

  [...inputs].forEach((element) => {
    if (!element.value) {
      isValid = false;
      return;
    }
  });

  return isValid;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = [form.elements.email, form.elements.password];
  const isFormValid = validateForm(inputs);

  if (isFormValid) {
    const formData = {
      [form.elements.email.name]: form.elements.email.value.trim(),
      [form.elements.password.name]: form.elements.password.value.trim(),
    };
    console.log("Form data:", formData);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
