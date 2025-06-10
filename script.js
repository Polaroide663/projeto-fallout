const items = document.querySelectorAll("li");
let selectedIndex = 0;

function updateSelection(index) {
  items.forEach((item, i) => {
    item.classList.toggle("selected", i === index);
  });
  selectedIndex = index;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    selectedIndex = (selectedIndex + 1) % items.length;
    updateSelection(selectedIndex);
  } else if (e.key === "ArrowUp") {
    selectedIndex = (selectedIndex - 1 + items.length) % items.length;
    updateSelection(selectedIndex);
  }
});

// Clique (ou toque) também ativa seleção
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateSelection(index);
  });
});
