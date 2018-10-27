// JS
/**
* Just a lazy way to convert all inputs into knobs.
* Normally you would write `new Knob(document.getElementById('someIdHere'), new Ui.P1());` to create a knob.
*/

// for (var i = 1; i < 16; i++) {
//     Array.prototype.slice.call(document.getElementsByClassName('preset' + i)).forEach(function(el) {
//         new Knob(el, new Ui['P' + i]());
//         el.addEventListener('change', function  () {
//             console.log(el.value)
//         })
//     })
// }


// All at the same time
// Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
//     new Knob(el, new Ui.P4());
//     el.addEventListener('change', function  () {
//         console.log(el.value)
//     })
// })


// Good programming
// let k1 = document.getElementById('k1');
// let knob = new Knob(k1, new Ui.P4());
// k1.addEventListener('change', function(){
//     console.log(k1.value);
// });

let rotation = 0;

Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
    new Knob(el, new Ui.P4());
    el.addEventListener('change', function  () {
        rotation = el.value;
        console.log(rotation);
    })
})

// P5JS
let canvas, w =380,  h = 150;
let dot, s = 4;

function setup(){
    // Canvas creation
    canvas = createCanvas(w, h);
    // Move the canvas inside div with id'superCanvas'
    canvas.parent('superCanvas');
    background('rgb(10,10,10)');
    dot = new Dot(w/2, 50, s);
}

function draw(){
    background('rgb(10,10,10)');
    dot.on();
    dot.move();
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
      fill(color('white'));
      ellipse(this.x, this.y, this.size, this.size);
    }
    move() {
        this.x += this.velX;
        if (this.x + s / 2 > w || this.x - s / 2 < 1) {
          this.velX = this.velX * -1;
        }
    }
  }

