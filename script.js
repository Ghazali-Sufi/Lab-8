let multipleButtons = document.querySelectorAll('.multipleChoice');
let multipleIsAnswered = false;

let answerButton = document.querySelector('.answer')
let freeIsAnswered = false;



for(let multipleButton of multipleButtons) {
    let h4 = document.createElement('h4')
    multipleButton.addEventListener('click', function(e) {
       
        if (multipleIsAnswered == true) {
          return;
        }
        const currentElement = e.target;
        if (currentElement.classList.contains("correct")) {
          e.target.style.background = "#00ab41";
          h4.textContent = "Correct";
          h4.style.color = "blue"
        } else {
          currentElement.style.background = "red";
          h4.textContent = "Incorrect";
        }
        const divElement = currentElement.parentElement;
        divElement.appendChild(h4);
        multipleIsAnswered = true;
    })
}


answerButton.addEventListener('click', function(e) {
    if(freeIsAnswered == true) {
        return;
    }
    const inputField = document.querySelector("#answerInput");
    let answerValue = inputField.value;
    let newH4Element = document.createElement('h4');
    if (Number(answerValue) === 70) {
      inputField.style.background = "green";
      newH4Element.textContent = "Correct"

    } else {
      inputField.style.background = "red";
        newH4Element.textContent = "Incorrect";
    }

    let divElement = inputField.parentElement;
    divElement.appendChild(newH4Element);
    freeIsAnswered = true
})