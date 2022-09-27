console.log("JS funguje!");

let button = document.querySelector('li>a')

function velikost(){
    button.classList.add('oranzova')
    console.log("Zvolena velikost")
}   

button.addEventListener("click", velikost)