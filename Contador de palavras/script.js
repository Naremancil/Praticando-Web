// Label sobre o Modal
const openModal = document.querySelector("#open-btn")
const closeModal = document.querySelector("#close-btn")
const modal = document.querySelector("#modal")
const fadeModal = document.querySelector("#fade")

//console.log(openModal, closeModal, modal, fade)

function toggleHideModal(){
    modal.classList.toggle("hide")
    fadeModal.classList.toggle("hide")
}


[openModal, closeModal, fadeModal].forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        toggleHideModal()
    })
})


// ------------------------
// label sobre o contador

/*const textField = document.querySelector("#text-field")
const letters = document.querySelector("#letters")
const vogals = document.querySelector("#vogals")
const consoants = document.querySelector("#consoants")

class CountDown {
    constructor(letters, vogals, consoants){
        this.letters = letters
        this.vogals = vogals
        this.consoants = consoants
    }

    countThem(keyWord){
        let resultVogal = +this.vogals.innerText
        let resultConso = +this.consoants.innerText
        let resultAll = 0
        const comparison = ['a', 'e', 'i', 'o', 'u']

        if(!comparison.includes(keyWord)){
            resultConso += 1
            resultAll += 1
            this.consoants.innerText = `${resultConso}`
            this.letters.innerText = `${resultAll}`
        } else {
            resultVogal += 1
            resultAll += 1
            this.vogals.innerText = `${resultVogal}`
            this.letters.innerText = `${resultAll}`
        }
    }
}

const counter = new CountDown(letters, vogals, consoants)

textField.addEventListener("keydown", (elemento) => {
    const catchKey = textField.value.length
    
    counter.countThem(catchKey)
})*/

