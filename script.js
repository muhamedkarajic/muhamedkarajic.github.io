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

var before = 0;
var beforeIndex = -1;
var halfViews = [];

var myFullpage = new fullpage('#fullpage', {
    v2compatible: true,
    afterLoad: function(anchorLink, index){
        if(index != beforeIndex){//ima bug sa halfView ako ode na jedan pa se vrati na početni pa ode opet na isti halfView
            applyEffects(this.getElementsByClassName("animate"), 1000);
            if(!this.classList.contains('fp-auto-height'))
            {
                for (let j = 0; j < halfViews.length; j++)
                    removeEffects(halfViews[j].getElementsByClassName("animate"));
                halfViews = [];
                if(before != 0)
                    removeEffects(before.getElementsByClassName("animate"));
                before = this;
                beforeIndex = index;
            }
            else
                halfViews.push(this);
        }
        else
        {
            for (let j = 0; j < halfViews.length; j++)
                    removeEffects(halfViews[j].getElementsByClassName("animate"));
            halfViews = [];
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
