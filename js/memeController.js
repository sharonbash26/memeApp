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
    document.getElementById("my-text").style.display = "block"
    var gallerySection = document.querySelector(".gallery")
    gallerySection.style.display = "none"
  console.log(imgId)
  var strHTML=`<img src="imgs1/${imgId}.jpg">`
  document.querySelector(".canvas-continer").innerHTML=strHTML

    

}

//update sharon 