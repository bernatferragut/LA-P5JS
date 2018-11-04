// JS

// KNOBJS
let knob1, knob5, knob9, knob13;  // First vertival knobs row => FIRE
let knob2, knob6, knob10, knob14; // Second vertical knobs row => AIR
let knob3, knob7, knob11, knob15; // Third vertical knobs row => WATER
let knob4, knob8, knob12, knob16; // Fourth vertical knobs row => EARTH

// P5JS
let canvas, w =380,  h = 150;
let dot, s = 4;
let speedMultiplier = 0;

function setup(){
    // Knobs creation
    Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
        new Knob(el, new Ui.P4());
    });
    // Individual knob values detection
    knob1 = document.getElementById('k1');
    console.log(knob1);
    // knob1.dispatchEvent('change', ()=> { 
    //     knob1.value = speedMultiplier;
    // });

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
    // Knobs control
    speedMultiplier = knob1.value;
    // Canvas update
    background(8, 20);
    dot.on();
    dot.move(speedMultiplier);
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
    move(times) {
        this.x += this.velX * times;
        if (this.x + s / 2 > w || this.x - s / 2 < 1) {
          this.velX = this.velX * -1;
        }
    }
  }

// MIDI Controller management
WebMidi.enable(function () {

    // Viewing available inputs
    //console.log(WebMidi.inputs);
  
    // Retrieve an input by name, id or index
    var input = WebMidi.getInputByName("Midi Fighter Twister"); // ID: 663841880
  
    // Listen to control change message on all channels
    input.addListener('controlchange', 1,
        function (e) {
            console.log("Received 'controlchange' message.",    );
            switch (e.controller.number) {
                case 0:
                    knob1.value = e.value / 12.7; // each step 12.7 
                    knob1.dispatchEvent(new Event('change'));
                    knob1.addEventListener('change', () => {
                        speedMultiplier = knob1.value;
                    })
                    break;  
            }

            // Displays usefull data about the MIDI controller
            document.getElementById("knobNumber").innerHTML = e.controller.number;
            document.getElementById("value").innerHTML = e.value;
        }
    );
  
  /*  
    // Remove all listeners on the input
    input.removeListener();
  */
  });

