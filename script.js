function changeColor() {
    document.querySelector('.coming-soon').classList.add('set')
    document.querySelector('.eye').classList.add('set')

    const lines = document.querySelectorAll('.line')
    for (const line of lines) {
        line.classList.add('set')
    }
}

document.onreadystatechange = function() {
    // if (document.readyState !== "complete") {
    //     document.querySelector(
    //       "body").style.visibility = "hidden";
    //     document.querySelector(
    //       "#loader").style.visibility = "visible";
    // } else {
    //     document.querySelector(
    //       "#loader").style.display = "none";
    //     document.querySelector(
    //       "body").style.visibility = "visible";
    // }
    // document.getElementById('contact-info').classList.remove('hidden')
    setTimeout(changeColor, 700)
}

document.getElementById('open-contact-card').onclick = function() {
    document.getElementById('contact-card').classList.toggle('open')
    document.getElementById('open-contact-card').classList.toggle('open')
}


  

