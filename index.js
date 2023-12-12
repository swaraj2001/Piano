const pianoKeys = document.querySelectorAll('.key')
function playSound(newUrl){
    new Audio(newUrl).play();

}

pianoKeys.forEach((pianoKeys , i) => {
    const newUrl = '24/key' + (i + 1) + '.mp3'
    pianoKeys.addEventListener('click' , ()=> playSound(newUrl))
})