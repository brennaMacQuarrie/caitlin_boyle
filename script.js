function changeColor() {
    // document.querySelector('.coming-soon').classList.add('set')
    document.querySelector('.eye').classList.add('set')

    const lines = document.querySelectorAll('.line')
    for (const line of lines) {
        line.classList.add('set')
    }
}

document.onreadystatechange = function() {
    setTimeout(changeColor, 700)
}

document.getElementById('show-modal').onclick = function() {
    document.getElementById('modal').classList.toggle('open')
    document.getElementById('hello').classList.toggle('open')
    document.getElementById('show-modal').classList.toggle('open')
}

document.getElementById('show-photos').onclick = function() {
    document.getElementById('show-photos').classList.toggle('corner')

}




  

