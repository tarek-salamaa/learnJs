let products = ["Keybord", "Mouse", "Pen", "Pad", "Ram"];

let color = ["red", "green", "blue"];

// Break >> Stop The Loop

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   if (products[i] === "Pen") {
//     break;
//   }
// }

// continue

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }

// Lable

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(10));
  console.log(products[i]);
  console.log("#".repeat(10));
  console.log("Colors:");
  nestedLoop: for (let j = 0; j < color.length; j++) {
    console.log(`- ${color[j]}`);
    if (color[j] === "green") {
      break mainLoop;
    }
  }
}
