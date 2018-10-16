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
let freq;
let amp;
// button
let btn;
// sound
let wave;

function setup() {
  // canvas
  createCanvas(w, h);
  background(0);
  fill(255)
  // sliders
  amp = createSlider(0, 4, 0);
  amp.position(w / 2.5, h / 2.5);
  text('A', 275, 115);
  freq = createSlider(100, 1200, 440);
  freq.position(w / 2.5, h / 2);
  text('F', 275, 140);
  // sound
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
}

function draw() {
  // sound
  wave.amp(amp.value(), 0.25);
  wave.freq(freq.value(), 0.25);
}
```
## Play and learn
Sliders will help us to play with values. 

Through this play, we can see visually how numbers affect the movement, position, size and color of the different dots we have created. 

It's an interactive way of learning to design through play and feel.


**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**







