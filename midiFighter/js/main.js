// JS

// for (var i = 1; i < 6; i++) {
//     Array.prototype.slice.call(document.getElementsByClassName('preset' + i)).forEach(function(el) {
//         new Knob(el, new Ui['P' + i]());
//         el.addEventListener('change', function  () {
//           console.log(el.value)
//         })
//     })
// }

// ALL KNOBS AT THE SAME TIME
// Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
//     new Knob(el, new Ui.P4());
//     el.addEventListener('change', function  () {
//         knobSweep = el.value;
//         console.log(knobSweep, 'knobSweep');
//     })
// })

// ONE KNOB AT A TIME
// let k1 = document.getElementById('k1');
// new Knob(k1, new Ui.P4());
// k1.addEventListener('change', function(){
//     knobSweep = k1.value;
//     console.log(knobSweep, 'k1-value');
// });

// KNOBJS
let knob1, knob5, knob9, knob13;
let knobSweep1 = 0, knobSweep5 = 0, knobSweep9 = 0, knobSweep13 = 0;

// P5JS
let canvas, w =380,  h = 150;
let dot, s = 4;
let multiplier = 1;

function setup(){
    // Knobs creation
    Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
        new Knob(el, new Ui.P4());
    });
    // Individual knob values detection
    knob1 = document.getElementById('k1');
    knob1.addEventListener('change', ()=> {
        knobSweep1 = knob1.value
        console.log('knob1:'+ knobSweep1);
    });

    knob5 = document.getElementById('k5');
    knob5.addEventListener('change', ()=> {
        knobSweep5 = knob5.value
        console.log('knob5:' + knobSweep5);
    });

    knob9 = document.getElementById('k9');
    knob9.addEventListener('change', ()=> {
        knobSweep9 = knob9.value
        console.log('knob9:'+ knobSweep9);
    });

    knob13 = document.getElementById('k13');
    knob13.addEventListener('change', ()=> {
        knobSweep13 = knob13.value
        console.log('knob13:' + knobSweep13);
    });
    
    // Canvas creation
    canvas = createCanvas(w, h);
    // Move the canvas inside div with id'superCanvas'
    canvas.parent('superCanvas');
    background('rgb(10,10,10)');
    dot = new Dot(w/2, 50, s);
}

function draw(){
    // Knobs update
    multiplier = knobSweep1;
    // Canvas update
    background(8, 20);
    dot.on();
    dot.move(multiplier);
}

// Dot object
class Dot {
    // class attributes
    constructor(x, y, s) {
      this.x = x | 0;
      this.y = y | 0;
      this.size = s | 2;
      this.velX = 2;
    }
    // class methods
    on() {
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.size, this.size);
    }
    move(multiplier) {
        this.x += this.velX * multiplier;
        if (this.x + s / 2 > w || this.x - s / 2 < 1) {
          this.velX = this.velX * -1;
        }
    }
  }

