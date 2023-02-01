const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
textInput.addEventListener("input", (event) => {
    if(textInput !== " "){
    textOutput.textContent = event.currentTarget.value; 
    }else{
        return textOutput.textContent
    }
  });
 
 