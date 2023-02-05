const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
btnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = document.body.style.backgroundColor;
})
