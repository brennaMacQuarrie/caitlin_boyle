const infoModal = document.getElementById('modal'),
    toggleModalButton = document.getElementById('show-modal'),
    gallery = document.getElementById('gallery'),
    largeEye = document.getElementById('main-eye'),
    enterButton = document.getElementById('enter'),
    enterButton2 = document.getElementById('enter-2')
    enterText = document.getElementById('enter-text'),
    closeGalleryButton = document.getElementById('close-gallery')
    icons = document.querySelectorAll('.icon')

let contactView = false,
    galleryView = false


function checkImageLoad() {
    if (infoModal.classList.contains('open')) {
        icons.forEach(i => i.classList.add('loading'))
    } else {
        largeEye.classList.add('loading')
        enterText.style.fontFamily = 'RevReg, serif'
    }

    let allImages = [].slice.call(document.getElementsByTagName('img'))
    let loadedImages = 0
    
    allImages.forEach(img => {
        img = new Image()
        if (img.complete) loadedImages++ 
        if (loadedImages == allImages.length) setTimeout(showGallery, 1000)
    })
}

function closeModal() {
    infoModal.classList.remove('open')
    document.getElementById('hello').classList.remove('open')
    toggleModalButton.classList.remove('open')
}

function showGallery() {
    largeEye.classList.add('hidden')
    gallery.classList.add('open')
    toggleModalButton.style.zIndex = 0
    if (infoModal.classList.contains('open')) {
        closeModal()
    }
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
    icons.forEach(i => i.classList.remove('loading'))
    enterText.style.fontFamily = 'RevOutline, serif'
    largeEye.classList.remove('hidden', 'loading')
    gallery.classList.remove('open')
    toggleModalButton.classList.remove('hidden')
}




  

