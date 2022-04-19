const modal = document.getElementById('modal')
const menuCTA = document.getElementById('show-modal')
const mainEye = document.getElementById('show-photos')
const smallEye = document.getElementById('eye-sm')

function changeColor() {
    mainEye.classList.add('set')

    const lines = document.querySelectorAll('.line')
    for (const line of lines) {
        line.classList.add('set')
    }
}

document.onreadystatechange = function() {
    setTimeout(changeColor, 700)
}

menuCTA.onclick = function() {
    modal.classList.toggle('open')
    document.getElementById('hello').classList.toggle('open')
    menuCTA.classList.toggle('open')
}

mainEye.onclick = function() {
    mainEye.classList.add('hidden')
    smallEye.classList.remove('invisible')
    // show photos now!
}




  

