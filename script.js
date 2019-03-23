const h1 = document.getElementById("paralex_h1");
const p = document.getElementById("paralex_p");
const button = document.getElementById("paralex_button");
// const half = document.getElementById("half");

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
        obj.style.transform ="translate3d(0,"  +    antiOffset*(translateY)  +"px, 0px)";
        obj.style.webkitTransform += "rotateZ("+    antiOffset*(rotateZ)     +"deg)";
        obj.style.webkitTransform += "rotateY("+    antiOffset*(rotateY)     +"deg)";
    }
}

var offset = window.pageYOffset;
function parallex() {
    offset = window.pageYOffset;

    applyParallex(h1, 0, offset, -1.10, 0, 0);
    applyParallex(p, 0, offset, -1.15, 0, .0);
    applyParallex(button, 0, offset, -1.20, 0, .0);
    applyParallex(left, 0, offset, .75, 0, .0);
    applyParallex(right, 0, offset, -.55, 0, .0);

    applyParallex(h2, about.offsetTop, offset, .40, 0, 0);
    applyParallex(p_left, about.offsetTop, offset, .35, 0,0);
    applyParallex(p_right, about.offsetTop, offset, .30, 0, 0);
    // applyParallex(half, about.offsetTop, offset, 0, 0, 0);

    applyParallex(h3, design.offsetTop, offset, .20, 0, 0);
    applyParallex(design_left, design.offsetTop, offset, .15, 0, 0);
    applyParallex(design_right, design.offsetTop, offset, .10, 0, 0);

}



button.onclick = function (e) {
    e.defaultPrevented;
    
    $('html, body').animate({
        scrollTop: $("#design").offset().top
    }, 1500, 'swing');
};

// var sections = ["#main", "#about", "#design"];

window.onload = function()
{
    document.getElementById("paralex_h1").style.opacity = "0";
    document.getElementById("paralex_p").style.opacity = "0";
    document.getElementById("paralex_button").style.opacity = "0";
    document.body.style.overflow = 'hidden';



    setTimeout(function()
    {
        document.getElementById("paralex_h1").classList.add('fadeIn');
    }, 100);

    setTimeout(function()
    {
        document.getElementById("paralex_p").classList.add('fadeIn');
    }, 500);
    
    setTimeout(function()
    {
        document.getElementById("paralex_button").classList.add('fadeIn');
    }, 1000);

    setTimeout(function()
    {
        document.getElementById("paralex_h1").style.opacity = "1";
        document.getElementById("paralex_p").style.opacity = "1";
        document.getElementById("paralex_button").style.opacity = "1";
    
        document.getElementById("paralex_h1").classList.remove("fadeIn");
        document.getElementById("paralex_p").classList.remove("fadeIn");
        document.getElementById("paralex_button").classList.remove("fadeIn");
        document.body.style.overflow = 'visible';
        

        window.onscroll = parallex;
    }, 2100);
}


// var cSection = "#main";
// var scrolling = false;
// function getNextSection()
// {
//     for(var i=0; i<sections.length; i++)
//         if(cSection === sections[i])
//             return sections[i+1];
// }
