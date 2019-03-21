const h1 = document.getElementById("paralex_h1");
const p = document.getElementById("paralex_p");
const button = document.getElementById("paralex_button");

const about = document.getElementById("about");
const h2 = document.getElementById("paralex_h2");
const p_left = document.getElementById("p-left");
const p_right = document.getElementById("p-right");

const design = document.getElementById("design");
const h3 = document.getElementById("h3");
const design_left = document.getElementById("design-left");

const design_right = document.getElementById("design-right");
const blink = document.getElementById("blink");

window.setInterval(function(){
    blink.style.opacity = 0;
    setTimeout(function(){ 
        blink.style.opacity = 1;
    }, 500);
}, 1000);
 
function applyParallex(obj, negativOffset, offset, translateY, rotateZ, rotateY)
{
    var antiOffset = negativOffset - offset;
    if(offset < negativOffset + window.innerHeight)
    {
        obj.style.transform ="translate3d(0,"  +    antiOffset*(translateY)  +"px, 0)";
        obj.style.webkitTransform += "rotateZ("+    antiOffset*(rotateZ)     +"deg)";
        obj.style.webkitTransform += "rotateY("+    antiOffset*(rotateY)     +"deg)";
    }
}

var offset = window.pageYOffset;
function parallex() {
    offset = window.pageYOffset;
    applyParallex(h1, 0, offset, .20, -.00225, .0525);
    applyParallex(p, 0, offset, .15, .003, .04);
    applyParallex(button, 0, offset, .10, 0, .0);

    applyParallex(h2, about.offsetTop, offset, .20, .00425, .0425);
    applyParallex(p_left, about.offsetTop, offset, .15, -.00325,-.0325);
    applyParallex(p_right, about.offsetTop, offset, .10, .00425, .0425);

    applyParallex(h3, design.offsetTop, offset, .20, .00425, .0425);
    applyParallex(design_left, design.offsetTop, offset, .15, .00325,.0325);
    applyParallex(design_right, design.offsetTop, offset, .10, -.00425, -.0425);
}

window.onscroll = parallex;


button.onclick = function (e) {
    e.defaultPrevented;
    
    $('html, body').animate({
        scrollTop: $("#design").offset().top
    }, 1500, 'swing');
};


