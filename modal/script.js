const openModalBtn = document.querySelector("#open-modal")
const closeModalBtn = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}
[openModalBtn, closeModalBtn, fade].forEach((e) => {
    e.addEventListener("click", () => toggleModal)
})