// global vars
let w = window.innerWidth; h = window.innerHeight;
let knob1, knob2;

// P5JS
function setup() {
  createCanvas(w, h);
  background(0);
  knob1 = new Knob(w / 2, h / 2, 400);
}

function draw() {
  knob1.update();
  console.log(knob1.degree);
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
      console.log("Received 'controlchange' message.");
      switch (e.controller.number) {
        case 0:
          knob1.degree = e.value; // each step 12.7 
          console.log(knob1.degree);
          break;
      }

      // Displays usefull data about the MIDI controller
      document.getElementById("knobNumber").innerHTML = e.controller.number;
      document.getElementById("value").innerHTML = e.value;
    }
  );
});
