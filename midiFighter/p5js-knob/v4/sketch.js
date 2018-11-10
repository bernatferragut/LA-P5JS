
// canvas vars
let w = window.innerWidth, h = window.innerHeight;
let canvas;

// dot vars
let dot;
let rnd = 3;

// oscillators
let osc1;

// slider vars ( multipliers )
let x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15;
let freqHistory = [];

function setup() {
    // canvas
    canvas = createCanvas(w, h);
    canvas.parent('sketch-holder');

    // sliders 
    createSliders();

    // dot
    dot = new Dot(w / 2, h / 2, 10);

    // oscillators
    osc1= new p5.TriOsc();
    osc1.freq(440);
    osc1.amp(.5);
    osc1.start();
}

function draw() {
    // multipliers
    console.log('x2 value: ',  x2.value());

    // BG
    background(0);

    // dot
    dot.on(x2);
    dot.randomness();

    // oscillators
    osc1.freq(x2.value());

    // recording the freq history
    freqHistory.push(x2.value());
    stroke(255);
    noFill();
    beginShape()
    for(let i = 0; i < freqHistory.length; i++) {
        let y = map(freqHistory[i], 0, 127, height-200, 200);
        vertex(i,y) //point(i, y);
    }
    endShape();

    if( freqHistory.length > width) {
        freqHistory.splice(0,1);
    }
}   

// Dot object
class Dot {
    // class attributes
    constructor(x, y, s) {
        this.x = x | 0;
        this.y = y | 0;
        this.size = s | 2;
    }
    // class methods 
    on(x) { // here we pass the size parameter to affect this method
        noStroke();
        fill(255);
        ellipse(this.x, this.y, x.value(), x.value());
    }
    randomness() {
        this.x += random(-rnd, rnd);
        this.y += random(-rnd, rnd);
    }
}

// Sliders creation
function createSliders() {
    // sliders -> createSlider(min, max, [default], [stepSize])
    x0 = createSlider(0, 127, 0, 0.1);
    x0.parent('sliders-holder');
    x1 = createSlider(0, 127, 0, 0.1);
    x1.parent('sliders-holder');
    x2 = createSlider(0, 127, 0, 0.1);
    x2.parent('sliders-holder');
    x3 = createSlider(0, 127, 0, 0.1);
    x3.parent('sliders-holder');
    x4 = createSlider(0, 127, 0, 0.1);
    x4.parent('sliders-holder');
    x5 = createSlider(0, 127, 0, 0.1);
    x5.parent('sliders-holder');
    x6 = createSlider(0, 127, 0, 0.1);
    x6.parent('sliders-holder');
    x7 = createSlider(0, 127, 0, 0.1);
    x7.parent('sliders-holder');
    x8 = createSlider(0, 127, 0, 0.1);
    x8.parent('sliders-holder');
    x9 = createSlider(0, 127, 0, 0.1);
    x9.parent('sliders-holder');
    x10 = createSlider(0, 127, 0, 0.1);
    x10.parent('sliders-holder');
    x11 = createSlider(0, 127, 0, 0.1);
    x11.parent('sliders-holder');
    x12 = createSlider(0, 127, 0, 0.1);
    x12.parent('sliders-holder');
    x13 = createSlider(0, 127, 0, 0.1);
    x13.parent('sliders-holder');
    x14 = createSlider(0, 127, 0, 0.1);
    x14.parent('sliders-holder');
    x15 = createSlider(0, 127, 0, 0.1);
    x15.parent('sliders-holder');
}

// MIDI Controller management
WebMidi.enable(function () {

    // Retrieve an input by name, id or index
    var input = WebMidi.getInputByName("Midi Fighter Twister"); // ID: 663841880

    // Listen to control change message on all channels
    input.addListener('controlchange', 1,
        function (e) {
            console.log("Received 'controlchange' message.", e);
            switch (e.controller.number) {
                case 0:
                    x0.value(e.value);
                case 1:
                    x1.value(e.value);
                    break;
                case 2:
                    x2.value(e.value);
                    break;
                case 3:
                    x3.value(e.value);
                    break;
                case 4:
                    x4.value(e.value);
                    break;
                case 5:
                    x5.value(e.value);
                    break;
                case 6:
                    x6.value(e.value);
                    break;
                case 7:
                    x7.value(e.value);
                    break;
                case 8:
                    x8.value(e.value);
                    break;
                case 9:
                    x9.value(e.value);
                    break;
                case 10:
                    x10.value(e.value);
                    break;
                case 11:
                    x11.value(e.value);
                    break;
                case 12:
                    x12.value(e.value);
                    break;
                case 13:
                    x13.value(e.value);
                    break;
                case 14:
                    x14.value(e.value);
                    break;
                case 15:
                    x15.value(e.value);
                    break;
            }
        }
    );
});  