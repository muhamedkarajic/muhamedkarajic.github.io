var timeOuts = new Array();

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
    let speed = ms / x.length;
    for (let i = 0; i < x.length; i++)
        applyEffect(x[i], i * speed);
}

function removeEffects(x) {
    for (let i = 0; i < x.length; i++)
        removeEffect(x[i]);
}

var last = 0;
var lastIndex = -1;
var fp_auto_height = [];

var myFullpage = new fullpage('#fullpage', {
    v2compatible: true,
    navigation: true,
    licenseKey: 'bobwH@p8',
    afterLoad: function (anchorLink, index) {
        if (index != lastIndex) {
            for (let j = 0; j < timeOuts.length; j++)
                clearTimeout(timeOuts[j]); 
            applyEffects(this.getElementsByClassName("animate"), 750);
            if (!this.classList.contains('fp-auto-height')) {
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
