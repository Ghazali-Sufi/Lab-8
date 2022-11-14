let multipleButtons = document.querySelectorAll('.multipleChoice');
 let multipleIsAnswered = false;


for(let multipleButton of multipleButtons) {
    let h4 = document.createElement('h4')
    multipleButton.addEventListener('click', function(e) {
       
        if (multipleIsAnswered == true) {
          return;
        }
        const currentElement = e.target
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

