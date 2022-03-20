function changeColor() {
    document.querySelector('.coming-soon').classList.add('set')
    document.querySelector('.eye').classList.add('set')
    document.querySelector('.line1').classList.add('set')
    document.querySelector('.line2').classList.add('set')
    document.querySelector('.line3').classList.add('set')    
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
    document.querySelector('.contact-info').classList.remove('hidden')
    setTimeout(changeColor, 700)
};



  

