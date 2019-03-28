function applyEffect(x, ms) {
    setTimeout(function() {
        x.classList.add('fadeIn');
    }, ms);
}

function removeEffect(obj) {
    obj.classList.remove("fadeIn");
}

function applyEffects(x, ms) {
    let speed = ms / x.length;
    for (let i = 0; i < x.length; i++)
        applyEffect(x[i], (i)*speed);
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
    afterLoad: function(anchorLink, index){
        if(index != lastIndex){
            applyEffects(this.getElementsByClassName("animate"), 750);
            if(!this.classList.contains('fp-auto-height'))
            {
                for (let j = 0; j < fp_auto_height.length; j++)
                    removeEffects(fp_auto_height[j].getElementsByClassName("animate"));
                fp_auto_height = [];
                if(last != 0)
                    removeEffects(last.getElementsByClassName("animate"));
                last = this;
                lastIndex = index;
            }
            else
                fp_auto_height.push(this);
        }
        else if(fp_auto_height.length > 0)
        {
            for (let j = 0; j < fp_auto_height.length; j++)
                    removeEffects(fp_auto_height[j].getElementsByClassName("animate"));
            fp_auto_height = [];
        }
    },

    onLeave: function(index, nextIndex, direction){
        
    }
});

window.setInterval(function() {
    blink.style.opacity = 0;
    setTimeout(function(){ 
        blink.style.opacity = 1;
    }, 500);
}, 1000);
