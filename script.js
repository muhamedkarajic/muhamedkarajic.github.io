$('#fullpage').fullpage({
    v2compatible: true,
    scrollOverflow: true,
    css3:true,
    scrollingSpeed: 350,
    navigation: true,
    licenseKey: 'bobwH@p8',
    onLeave: function (anchorLink, index) {
        let newSection = sections[index - 1];
        timeOuts.forEach(timeOut => {
            clearTimeout(timeOut);
        });
        console.log("section", newSection);
        applyEffects(newSection.getElementsByClassName("animate"), 350);
        
    },

    afterLoad: function (anchorLink, index) {
        let currentSection = sections[index - 1];

        if (!currentSection.classList.contains('fp-auto-height')) {
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (section != currentSection)
                    removeEffects(section.getElementsByClassName("animate"));
            }
            for (let j = 0; j < fp_auto_height.length; j++)
                removeEffects(fp_auto_height[j].getElementsByClassName("animate"));
            fp_auto_height = [];
        }
        last = currentSection;
    }
});

$('#button').click(function(){
    // var destination = $(this).closest('li');
    console.log("CLICKED");
    $.fn.fullpage.moveTo(2);
});

function activateNavItem(item){
    item.addClass('active').siblings().removeClass('active');
}
function activateNavItem(item){
    item.addClass('active').siblings().removeClass('active');
}


var sections = document.getElementsByClassName("section");
var last = sections[0];
var timeOuts = new Array();
var fp_auto_height = [];
var fp_auto_height_string = 'fp-auto-height';

function applyEffect(x, ms) {
    let delay = x.dataset.delay;
    if (delay == 0) {
        delay = ms;
    }
    timeOuts.push(
        setTimeout(function () {
            x.classList.add(x.dataset.animation);
        }, parseInt(delay))
    );
}

function removeEffect(obj) {
    obj.classList.remove(obj.dataset.animation);
}

function applyEffects(x, ms) {
    for (let j = 0; j < timeOuts.length; j++)
        clearTimeout(timeOuts[j]);
    timeOuts = [];
    let speed = ms / x.length;
    for (let i = 0; i < x.length; i++)
        applyEffect(x[i], i * speed);
}

function removeEffects(x) {
    for (let i = 0; i < x.length; i++)
        removeEffect(x[i]);
}



window.addEventListener("load", function () {
    setTimeout(function () {
        applyEffects(last.getElementsByClassName("animate"), 350);
    }, 500)
});


window.onresize =function() {

    // rebuild immediately on touch devices
    console.log("Works...!");
    if (isTouchDevice) {
        $.fn.fullpage.reBuild();
    } else {
        $.fn.fullpage.setScrollingSpeed(0);
        $('.fp-easings').addClass('.fp-no-transitions');
        $.fn.fullpage.reBuild();
        $.fn.fullpage.setScrollingSpeed(700); //default one
        $('.fp-easings').removeClass('.fp-no-transitions');
    }
};