# DOT-ROW

## Row multiplication
After understanding how works the dot conception, creation and animation now it's time to enter into the multiplication of the dot in the canvas. The multiplication it's a fundamental advantage of working with a computer which allow us to do things that by hand would be very difficult or would take a long time.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B1Ck3jPKm)

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
src="https://editor.p5js.org/embed/B1Ck3jPKm"></iframe>


```javascript
// Slider P for 'X_Position'

// canvas pararms
let w = 732;
let h = 250;
let s = 5;
// dot
let dot;
let spacing = 5;
// slider params
let slow = 50;
let amplitude = 100;

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_Xpos = createSlider(0, 100, 50);
  s_Xpos.position(20, 5);
}

function draw() {
  background('black');
  // sliders control
  text("P", 5, 20);
  spacing = s_Xpos.value();
  // dot creation
  for (let x = spacing/2; x < w; x += spacing) {
    dot = new Dot(x, h/2, s)
    dot.on();
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
  on() {
    noStroke();
    fill(color('white'));
    // fill(color(random(255),19));
    ellipse(this.x, this.y, this.size, this.size);
  }
}
```

## Row List

* In this example we create a row list under the setup function. 
* Once this list is created we apply the map method to each of the dots.
* Now we are able to call any dot method we want to affect the dot's behaviour.
* One slider controls the Y position of the dots.
* One slider controls the randomness in Y direction.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/rkMk2btKm)

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
src="https://editor.p5js.org/embed/rkMk2btKm"></iframe>


```javascript
// Slider Y for 'Y_Position'
// Slider R for 'random_Position'
// Slider A for 'alpha'
// canvas pararms
let w = 732;
let h = 250;
let s = 3;
let alph = 255;
// dot
let dot;
let spacing = 5;
let dotList = [];
// slider params
let rowY = 125;
let rnd = 3;

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_rowY_pos = createSlider(0, 250, 125);
  s_rowY_pos.position(25, 7);
  s_rnd = createSlider(0, 100, 3);
  s_rnd.position(25, 24);
  s_alph = createSlider(0, 255, 255);
  s_alph.position(25, 41);

  // dot row list creation
  for (let x = spacing / 2; x < w; x += spacing) {
    dotList.push(new Dot(x, h / 2, s));
  }
}

function draw() {
  background(0, alph); // color(gray, [alpha]) both 0-255
  // sliders control
  text("Y", 5, 20);
  rowY = s_rowY_pos.value();
  text("R", 5, 38);
  rnd = s_rnd.value();
  text("A", 5, 56);
  alph = s_alph.value();

  // row creation
  dotList.map((dot) => {
    dot.on();
    dot.randomize();
  })
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
  on() {
    noStroke();
    fill(color('white'));
    ellipse(this.x, this.y, this.size, this.size);
  }
  randomize() {
    this.y = rowY + random(rnd, rnd * -1);
  }
}

```
**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**