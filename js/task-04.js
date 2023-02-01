const counterValue = document.querySelector("#value");
let counter = [];
const btnDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
const btnIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
btnDecrement.addEventListener("click", () => {
  counter--;
  console.log(counter);
  counterValue.innerHTML = counter;
});
btnIncrement.addEventListener("click", () => {
  counter++;
  console.log(counter);
  counterValue.innerHTML = counter;
});
