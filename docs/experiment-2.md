# Experiment-2

In this second experiment we are going to experiment with sound synthesis for the firts time.

## UI

We will invent a sort of intuitive UI on the way for easier life manipulation.

* Sound
* Sliders
* Frequencies

* Example 2

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/BkOf3ifoQ)

<iframe 
frameborder="0" 
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 250px; 
border: 4px solid #000000;
border-radius: 6px;
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/embed/BkOf3ifoQ"></iframe>

```javascript
// SOUND SYNTHESIS  
// canvas vars
let w = 732;
let h = 250;
// sliders
let freq, amp;
let attack, decay, sustain, release;

// sound
let wave;
let envelope;

function setup() {
  // canvas
  createCanvas(w, h);
  background(0);
  fill(255)
  // sliders
  amp = createSlider(0, 4, 2);
  amp.position(w / 2.5, h / 2.5);
  text('A', 275, 115);
  freq = createSlider(100, 1200, 440); // A=440Hz
  freq.position(w / 2.5, h / 2);
  text('F', 275, 140);
  // attack
  attack = createSlider(0,1,0.5,0,1);
  attack.position(w/2.5, h/1.5)
  text('a', 280,180);
  // decay
  decay = createSlider(0,1,0.25,0,1);
  decay.position(w/2.5, h/1.35)
  text('d', 280,197);
  // sustain
  sustain = createSlider(0,1,1,0,1);
  sustain.position(w/2.5, h/1.24)
  text('s', 280,215);
  // release
  release = createSlider(0,1,0.25,0,1);
  release.position(w/2.5, h/1.14)
  text('r', 280,232);
  // sound
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  // envelope
  envelope = new p5.Env();
  // envelope.setRange(0.5, 0.5);
  envelope.play();
}

function draw() {
  // sound
  wave.freq(freq.value(), 0.25);
  envelope.setADSR(attack.value(), 
                   decay.value(), 
                   sustain.value(), 
                   release.value());
  envelope.setRange(attack.value(), release.value());
  wave.amp(envelope);
  
}
```
## Play and learn
Sliders will help us to play with values. 

Through this play, we can see visually how numbers affect the movement, position, size and color of the different dots we have created. 

It's an interactive way of learning to design through play and feel.


**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**







