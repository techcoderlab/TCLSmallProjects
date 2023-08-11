const boxes = document.querySelectorAll('.box')
const image = document.querySelector('.image')

boxes.forEach((box)=>{
    box.addEventListener("dragover", (event)=>{
        event.preventDefault()
    })
    box.addEventListener("drop", () => {
        box.appendChild(image)
    })
})