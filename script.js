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

const skills = document.getElementById("skills");
const img_left = document.getElementById("img-left");





const main = document.getElementById("main");




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

function parallex() {
    offset = window.pageYOffset;

    applyParallex(h1, 0, offset, .20, 0, 0);
    applyParallex(p, 0, offset, .15, 0, .0);
    applyParallex(button, 0, offset, .10, 0, .0);
    applyParallex(left, 0, offset, .75, 0, .0);
    applyParallex(right, 0, offset, -.55, 0, .0);

    applyParallex(h2, about.offsetTop, offset, .40, 0, 0);
    applyParallex(p_left, about.offsetTop, offset, .35, 0,0);
    applyParallex(p_right, about.offsetTop, offset, .30, 0, 0);

    applyParallex(h3, design.offsetTop, offset, .20, 0, 0);
    applyParallex(design_left, design.offsetTop, offset, .15, 0, 0);
    applyParallex(design_right, design.offsetTop, offset, .10, 0, 0);

}
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const cpp = document.getElementById("cpp");
const wordpress = document.getElementById("wordpress");
const sololean = document.getElementById("sololean");
const datacamp = document.getElementById("datacamp");
const pluralsight = document.getElementById("pluralsight");


var h2ST;
var p_leftST;
var p_rightST;

// function applyEffects(obj, objTO,  ms)
// {
//     objTO = setTimeout(() => {
//         obj.classList.add("fadeIn");
//     }, ms);
// }


function applyEffects(obj, ms)
{
    setTimeout(() => {
        obj.classList.add("fadeIn");
    }, ms);
}

function removeEffect(obj)
{
    obj.classList.remove("fadeIn");
}


// function removeEffect(obj, objTO)
// {
//     clearTimeout(objTO);
//     obj.classList.remove("fadeIn");
// }

var lockAbout = false;

var offset = window.pageYOffset;
function effects() {
    offset = window.pageYOffset;
    if(!lockAbout && offset > about.offsetTop-window.innerHeight/3 && offset < about.offsetTop+window.innerHeight/3)
    {
        lockAbout = true;
        console.log("apply");
        removeEffect(h2, h2ST);
        removeEffect(p_left, p_leftST);
        removeEffect(p_right, p_rightST);

        applyEffects(h2, h2ST, 100);
        applyEffects(p_left, p_leftST, 500);
        applyEffects(p_right, p_rightST, 1000);
    }
    else if(lockAbout && (offset < about.offsetTop-window.innerHeight || offset > about.offsetTop+window.innerHeight))
    {
        lockAbout = false;
        console.log("remove");
        removeEffect(h2, h2ST);
        removeEffect(p_left, p_leftST);
        removeEffect(p_right, p_rightST);
    }

    if(offset > skills.offsetTop-window.innerHeight/1.45)
    {
        applyEffects(html,null, 100);
        applyEffects(css,null, 200);
        applyEffects(js,null, 300);
        applyEffects(cpp,null, 400);
        applyEffects(wordpress,null, 500);
        applyEffects(sololean,null, 600);
        applyEffects(datacamp,null, 700);
        applyEffects(pluralsight,null, 800);
    }

    if(offset > design.offsetTop-window.innerHeight/3)
    {
        applyEffects(h3, 100);
        applyEffects(design_left, 500);
        applyEffects(design_right, 1000);
        applyEffects(img_left, 100);
    }
}


 
// $('#bodyMain').on('swipedown',function(){
//     $('html, body').animate({
//         scrollTop: $("#design").offset().top
//     }, 1500, 'swing');

// } );
// $('#bodyMain').on('swipeup',function(){
//     $('html, body').animate({
//         scrollTop: $("#design").offset().top
//     }, 1500, 'swing');

// } );

button.onclick = function (e) {
    e.defaultPrevented;
    
    $('html, body').animate({
        scrollTop: $("#design").offset().top
    }, 1500, 'swing');
};


window.onload = function()
{
    applyEffects(h1, 100);
    applyEffects(p, 500);
    applyEffects(button, 1000);
    window.onscroll = effects;
    effects();
}