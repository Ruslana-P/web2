document.body.addEventListener("click", (event) => {
  if (event.target.id === "task1-btn") {
    const inputValue = document.getElementById("task1-input").value;
    console.log(inputValue);
  }
});
