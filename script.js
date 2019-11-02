var timeOuts = new Array();
var last = 0;
var lastIndex = -1;
var fp_auto_height = [];
var fp_auto_height_string = 'fp-auto-height';
var section = document.getElementsByClassName("section");

function elementContaints(element, value)
{
    return element.classList.contains(value);
}

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

function applyEffects(x, ms, element) {

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


var myFullpage = new fullpage('#fullpage', {
    v2compatible: true,
    navigation: true,
    licenseKey: 'bobwH@p8',
    onLeave: function (anchorLink, index) {
        if (index != lastIndex) {
            console.log(section[index-1]);
            applyEffects(section[index-1].getElementsByClassName("animate"), 1000);
        }
    },

    afterLoad: function (anchorLink, index) {
        if (index != lastIndex) {
            if (!this.classList.contains(fp_auto_height_string)) {
                for (let j = 0; j < fp_auto_height.length; j++)
                    removeEffects(fp_auto_height[j].getElementsByClassName("animate"));
                fp_auto_height = [];
                if (last != 0)
                    removeEffects(last.getElementsByClassName("animate"));
                last = this;
                lastIndex = index;
            }
            else
                fp_auto_height.push(this);
        }
        else if (fp_auto_height.length > 0) {
            for (let j = 0; j < fp_auto_height.length; j++)
                removeEffects(fp_auto_height[j].getElementsByClassName("animate"));
            fp_auto_height = [];
        }
    }
});

window.addEventListener("load", function() {
    setTimeout(function () {
        applyEffects(document.getElementsByClassName("section")[0].getElementsByClassName("animate"), 1000);
    }, parseInt(500))
});