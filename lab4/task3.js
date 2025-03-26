document.body.addEventListener("click", (event) => {
  if (event.target.id === "task3-btn") {
    const input = document.getElementById("task3-input");

    if (event.target.classList.contains("hide")) {
      event.target.textContent = "Розкрити";
      event.target.classList.remove("hide");

      input.dataset.realValue = input.value;
      input.value = "*".repeat(input.value.length);
    } else {
      event.target.textContent = "Приховати";
      event.target.classList.add("hide");
      input.value = input.dataset.realValue || "";
    }
  }
});
