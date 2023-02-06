
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
 controlsEl: document.querySelector('#controls>input[type = "number"]'),
 btnCreate: document.querySelector('[data-create]'),
 btnDestroy: document.querySelector('[data-destroy]'),
 boxes: document.querySelector('#boxes'),
};
refs.btnCreate.addEventListener('click', createBoxes);
function createBoxes(amount) {
amount = refs.controlsEl.value;
const boxesArr = [];
for (let i = 0; i < amount ; i += 1) {
  const boxEl = document.createElement("div");
  boxEl.style.width = 30 + i * 10 + "px";
  boxEl.style.height = 30 + i * 10 + "px";
  boxEl.style.backgroundColor = getRandomHexColor();
boxesArr.push(boxEl);
refs.boxes.append(...boxesArr)

}
}
const destroyBoxes = (event) =>{refs.boxes.innerHTML = ""};
refs.btnDestroy.addEventListener('click', destroyBoxes);
console.log(destroyBoxes);