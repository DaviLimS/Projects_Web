const openButton = document.getElementById("#open-modal")
const closeButton = document.getElementById("#close-modal")
const modal = document.getElementById("#modal")
const fade = document.getElementById("#fade")

const toggleModal = () => {
    modal.classList.toggle("hideB")
    fade.classList.toggle("hideB")
}

[openButton, closeButton, fade].a.forEach((a) => {
    a.addEventListener("click", () => toggleModal())
})
