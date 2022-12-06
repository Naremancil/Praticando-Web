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

