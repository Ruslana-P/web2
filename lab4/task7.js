const mainList = document.getElementById("categories");

const allCategories = mainList.querySelectorAll("li.item");
console.log("Number of categories:", allCategories.length);

allCategories.forEach((category) => {
  const h2 = category.querySelector("h2");
  const li_items = category.querySelectorAll("li");

  console.log("Category:", h2.textContent);
  console.log("Elements:", li_items.length);
});
