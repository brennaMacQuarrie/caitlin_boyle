const infoModal = document.getElementById('modal')
const hamburgerMenu = document.getElementById('show-modal')
const largeEye = document.getElementById('show-photos')
const gallery = document.getElementById('gallery')
const enter = document.getElementById('enter')
const exit = document.getElementById('close-gallery')

let contactView = false
let galleryView = false

hamburgerMenu.onclick = function() {
    infoModal.classList.toggle('open')
    document.getElementById('hello').classList.toggle('open')
    hamburgerMenu.classList.toggle('open')
}

largeEye.onclick = function() {
    largeEye.classList.add('loading')
    enter.style.fontFamily = 'RevReg, serif'
    let allImages = [].slice.call(document.getElementsByTagName('img'))
    let loadedImages = 0

    allImages.forEach(img => {
        img = new Image()
        if (img.complete) loadedImages++ 
        if (loadedImages == allImages.length) setTimeout(showImages, 1000)
    })
}

function showImages() {
    largeEye.classList.add('hidden')
    hamburgerMenu.classList.add('invisible')
    gallery.classList.add('open')
}

exit.onclick = function() {
    enter.style.fontFamily = 'RevOutline, serif'
    largeEye.classList.remove('hidden', 'loading')
    gallery.classList.remove('open')
}




  

