let canvas;
let world;
let keyboard = new Keyboard();

/**
 * canvas initiate
 */
function init(number) {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, number);
}

/**
 * key pressed = true
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 17) {
        keyboard.STRG = true;
    }
    if (e.keyCode == 16) {
        keyboard.SHIFT = true;
    }
    if (e.keyCode == 70) {
        keyboard.F = true;
    }
    if (e.keyCode == 8) {
        keyboard.RETURN = true;
    }
});

/**
 * key released = false
 */
window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 17) {
        keyboard.STRG = false;
    }
    if (e.keyCode == 16) {
        keyboard.SHIFT = false;
    }
    if (e.keyCode == 70) {
        keyboard.F = false;
    }
    if (e.keyCode == 8) {
        keyboard.RETURNF = false;
    }
});


function showHelp() {
    document.getElementById('help_Container').classList.toggle('helpdown');
    document.getElementById('help_Container').classList.toggle('helpup');
}

function startgame(number) {
    init(number);
    // world.characterSelectionWorld = 2;
    // console.log('number', world.characterSelectionWorld);
    document.getElementById('flag_container').classList.add('biggerFlag');
    setTimeout(() => {
        document.getElementById('headline').classList.add('d-none');
        document.getElementById('boat').classList.add('d-none');
        document.getElementById('help_Container').classList.add('d-none');
        document.getElementById('flag_container').classList.add('d-none');
        document.getElementById('canvas').classList.remove('d-none');
        document.getElementById('canvas').classList.add('d-block');
    }, 2000);
}