let products = ["Keybord", "Mouse", "Pen", "Pad", "Ram", "Ssd"];
let colors = ["red", "green", "blue"];
let showCount = 2;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3 class="title">[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p class="color">- ${colors[j]}</p>`);
  }
  document.write(colors.join(" | "));
  document.write(`</div>`);
}
