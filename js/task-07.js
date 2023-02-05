const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
sizeControl.addEventListener('input' , (event) =>{
    const size = sizeControl.value;
    text.style.fontSize = size + 'px';
});
