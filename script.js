document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        spiderman = document.querySelector('.spiderman');
        spiderman.classList.add('animation')
        setTimeout(() =>{
            spiderman.classList.remove('animation')
        },700);
    }
}
setInterval(() =>{
    spiderman = document.querySelector('.spiderman');
    gameover = document.querySelector('.gameover');
    obstical = document.querySelector('.obstical');

    sx = parseInt(window.getComputedStyle(spiderman, null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(spiderman, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstical, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstical, null).getPropertyValue('top'));

    offsetx = Math.abs(sx-ox);
    offsety = Math.abs(sy-oy);
    console.log(offsetx , offsety);

    if((offsetx < 50) && (offsety < 30)){
        gameover.style.visibility = 'visible'; 
        obstical.classList.remove('obsticalanimation')
    }
},100);