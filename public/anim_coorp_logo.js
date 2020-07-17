let coorpWrap = document.getElementById('coorp-wrap');

let currAnimFrameCoorp = 130;
let animTimeoutCoorp;

function randoCoorp(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let glitchedAnimSpeed = false;
let glitchedSmiley = false;
let glitchedColour = false;

function fixGlitch(glitch) {

    if (glitch === 'glitchedAnimSpeed') {
        setTimeout(() => {
            glitchedAnimSpeed = false;
        }, randoCoorp(3000, 4000));
    };

    if (glitch === 'glitchedSmiley') {
        setTimeout(() => {
            glitchedSmiley = false;
        }, randoCoorp(100, 200));
    };

    if (glitch === 'glitchedColour') {
        setTimeout(() => {
            glitchedColour = false;
        }, randoCoorp(100, 300));
    };

};

function coorpAnim() {

    if (!glitchedAnimSpeed && randoCoorp(0, 500) > 498) {
        glitchedAnimSpeed = true;
        fixGlitch('glitchedAnimSpeed');
    };

    if (!glitchedSmiley && randoCoorp(0, 1600) > 1592) {
        glitchedSmiley = true;
        fixGlitch('glitchedSmiley');
    };

    if (!glitchedColour && randoCoorp(0, 800) > 796) {
        glitchedColour = true;
        fixGlitch('glitchedColour');
    };

    coorpWrap.innerHTML = coorp[currAnimFrameCoorp]
        .replace(/<!DOCTYPE html><head><meta charset="utf-8"><\/head>/, '')
        .replace(/<\/html>/, '')
        .replace(/body/g, 'div')
        .replace(/background-color:white;/, '')
        .replace(/<div/, '<div class="frame"')
        .replace(/\d(?=px monospace;)/, '4')
        .replace(/line-height:\d+px;/g, '')
        .replace(/(?<=style="color:#)(\w+)(?=")/g, glitchedColour ? 'ff1493' : '$1')
        .replace(/(?<=>)(.)(?=<)/g, glitchedSmiley ? ':)' : '$1')
        .replace(/(?<=<span style="color:#)(\w+)(?=">)/g, '$1; text-shadow: 1px 1px 2px #$1')
        .replace(/<span/g, '<span class="yeet"')

    currAnimFrameCoorp++;
    if (currAnimFrameCoorp > coorp.length - 1) {
        currAnimFrameCoorp = 0;
    };

    // animTimeoutCoorp = setTimeout(coorpAnim, glitchedAnimSpeed ? randoCoorp(1, 70) : 30);

};

coorpAnim();
