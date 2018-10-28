// JS

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
let knobSweep = 0;

// P5JS
let canvas, w =380,  h = 150;
let dot, s = 4;
let multiplier = 1;

function setup(){
    // Knob creation
    Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
        new Knob(el, new Ui.P4());
        el.addEventListener('change', function  () {
            knobSweep = el.value;
            console.log(knobSweep, 'knobSweep');
        })
    })
    // Canvas creation
    canvas = createCanvas(w, h);
    // Move the canvas inside div with id'superCanvas'
    canvas.parent('superCanvas');
    background('rgb(10,10,10)');
    dot = new Dot(w/2, 50, s);
}

function draw(){
    // Knobs update
    multiplier = knobSweep;
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

