'use strict'


function onInit() {
    renderMeme()
}
function renderMeme() {
    var imgs = getImgs()
    var strHTML = imgs.map(img => `
    <img src="imgs1/${img.id}.jpg" onclick="goToEditor(${img.id})">`)
    document.querySelector('.gallery').innerHTML = strHTML.join('')
}

function goToEditor(imgId) {
    var elPart2 = document.querySelector(".part2")
    elPart2.style.display = "block"
    var elGallerySection = document.querySelector(".gallery")
    elGallerySection.style.display = "none"
    console.log(imgId)
    var strHTML = `<img src="imgs1/${imgId}.jpg">`
    document.querySelector(".canvas-continer").innerHTML = strHTML
    var elTextEdit = document.getElementById("my-text")
    elTextEdit.style.display = 'block'
}

function goBack() {
    var elPart2 = document.querySelector(".part2")
    elPart2.style.display = "none"
    var elGallerySection = document.querySelector(".gallery")
    elGallerySection.style.display = "block"
}
function onIncreaseFontSize() {
    var elText = document.getElementById("my-text")
    var fontSize = elText.style.fontSize
    var fontSizeNumric = parseFloat(fontSize)
    var elBtnIncrease = document.querySelector(".increaseFontSizeBtn")
    elBtnIncrease.addEventListener("click", () => {
        fontSizeNumric++
        elText.style.fontSize = fontSizeNumric + 'px'
        console.log('nu', fontSizeNumric)
    })
}

function onDecreaseFontSize() {
    console.log('d')
    var elText = document.getElementById("my-text")
    var fontSize = elText.style.fontSize
    var fontSizeNumric = parseFloat(fontSize)
    var elBtnIncrease = document.querySelector(".decreaseFontSizeBtn")
    elBtnIncrease.addEventListener("click", () => {
        fontSizeNumric--
        elText.style.fontSize = fontSizeNumric + 'px'
        console.log('nu', fontSizeNumric)
    })
}

function handleColorInput(selectColor) {
    console.log('sel',selectColor)
    var elText = document.getElementById("my-text")
    elText.style.color = selectColor

}
//update sharon 