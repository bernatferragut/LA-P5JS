# Experiment-1

In this first attempt I will start using the P5JS sound module. 
The idea is to affect the shape of the 3 primordial forms (Circle, Square and Triangle) 
with sound frequencies.

## UI

We will invent a sort of intuitive UI on the way for easier life manipulation.

* Sound
* Sliders
* Frequencies

* Example 1

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/ByeBwqW5Q)

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
src="https://editor.p5js.org/embed/ByeBwqW5Q"></iframe>

```javascript
  // canvas vars
  let w = 732;
  let h = 250;
  let song1;
  let button;
  let slider;
  let text = 'TRIANGLE';

  function setup(){
    // canvas
    createCanvas(w,h);
    // triangle
    fill(255);
    triangle(30, 75, 58, 20, 86, 75);
    // button
    button = createButton(text);
    button.position(200,200);
    // slider
    slider = createSlider(0,1,0.5, 0.01);
    slider.position(200,140);
    slider.style('width', '70px');
    // music
    song1 = loadSound('circle.mp3', loaded);
    button.mousePressed(playSong);
  }

  function loaded() {
    playSong();
  }

  function playSong(){
    if(!song1.isPlaying()){
      button.html('TRIANGLE');
      song1.play();
    } else {
      song1.pause();
      button.html('PLAY');
    }
  }

  function draw() {
    // canvas
    background(0);
    // triangle
    strokeWeight(3);
    stroke(255); 
    noFill();
    translate(180,24);
    triangle(30, 75, 58, 20, 86, 75);
    // slider
    song1.setVolume(slider.value());
  }

```
## Play and learn
Sliders will help us to play with values. 

Through this play, we can see visually how numbers affect the movement, position, size and color of the different dots we have created. 

It's an interactive way of learning to design through play and feel.


**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**







