const infoModal = document.getElementById('modal'),
    toggleModalButton = document.getElementById('show-modal'),
    gallery = document.getElementById('gallery'),
    largeEye = document.getElementById('main-eye'),
    enterButton = document.getElementById('enter'),
    enterButton2 = document.getElementById('enter-2'),
    enterText = document.getElementById('enter-text'),
    closeGalleryButton = document.getElementById('close-gallery'),
    allImages = [].slice.call(document.getElementsByTagName('img'))
    
let contactView = false,
    galleryView = false



function checkImageLoad() {
    largeEye.classList.add('loading')
    enterText.style.fontFamily = 'RevReg, serif'
    
    let loadedImages = 0
    
    allImages.forEach(img => {
        img = new Image()
        if (img.complete) loadedImages++ 
        if (loadedImages == allImages.length) showGallery()
    })
}

function showGallery() {
    largeEye.classList.add('hidden')
    gallery.classList.add('open')
    toggleModalButton.style.zIndex = "0"

    // lines = [].slice.call(document.getElementsByTagName('hr'))
    // lines.forEach(line => line.classList.add('animated'))

    if (infoModal.classList.contains('open')) closeModal()

    for (let i = 0; i < allImages.length; i++) {
        let toggleAnimate = moveImg(i)
        setTimeout(toggleAnimate, i * 250)
    }
}

function moveImg(i) {
    let img = allImages[i]
    return function() {
        img.classList.add('animated')
    }
}

function closeModal() {
    infoModal.classList.remove('open')
    document.getElementById('hello').classList.remove('open')
    toggleModalButton.classList.remove('open')
}


enterButton.onclick = function() {
    checkImageLoad()
}

enterButton2.onclick = function() {
    checkImageLoad()
}

toggleModalButton.onclick = function() {
    infoModal.classList.toggle('open')
    document.getElementById('hello').classList.toggle('open')
    toggleModalButton.classList.toggle('open')
}       

closeGalleryButton.onclick = function() {
    // reset
    enterText.style.fontFamily = 'RevOutline, serif'
    // reset zindex
    largeEye.classList.remove('hidden', 'loading')
    // hide
    gallery.classList.remove('open')
    // bring to front
    toggleModalButton.classList.remove('hidden')
    toggleModalButton.style.zIndex = "999"

    allImages.forEach(img => {
        img.classList.remove('animated')
    })
}




  

