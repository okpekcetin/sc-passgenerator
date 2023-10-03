const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let characters = []
let charCount = 0

box1El = document.getElementById("box1-el")
box2El = document.getElementById("box2-el")

function generate() {
    charCount = document.getElementById("passlength-el").selectedIndex + 8
    prepare()

    box1El.textContent = generator()
    box2El.textContent = generator()
    
    characters = []
}

function prepare() {
    let lettersCheck = document.getElementById("letters-el")
    let numbersCheck = document.getElementById("numbers-el")
    let symbolsCheck = document.getElementById("symbols-el")
    
    if(lettersCheck.checked) {
        characters = characters.concat(letters)
    }
    if(numbersCheck.checked) {
        characters = characters.concat(numbers)
    }
    if(symbolsCheck.checked) {
        characters = characters.concat(symbols)
    }
}

function generator() {
    if (characters.length === 0) {
        return "No selection"
    }
    
    let pass = ""
    for (let i = 0; i < charCount; i++) {
        pass += characters[Math.floor(Math.random() * characters.length)]
    }
    return pass
}


// CP function can only be implemented on input textbox objects???