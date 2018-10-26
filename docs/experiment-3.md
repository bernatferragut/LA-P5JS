# DOT-MATRIX

## Matrix creation
Now we understand how to create a row and how we can control each of the dot objects individually. We do it by creating a list of their spacial positions and then calling individually each of the functions to perform actions on them.

Creating a 2d Matrix of dots is the natural evloution. 

We will nest inside the first row loop another loop reperesanting our columns. That way we will have the control to create as many dots as we wish in our canvas and the power to control them individually.

Once the Matrix is defined, we will be able to recall the different methods we created in the past and any new one that can help us go in any new direction we wish to take.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/rJVqwSqFQ)

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
src="https://editor.p5js.org/embed/rJVqwSqFQ"></iframe>


```javascript
// Slider s for Size'

// canvas pararms
let w = 732;
let h = 250;
let s = 2;
// dot
let dot;
// slider params
let spacing = 9;
let dotList = [];

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_size = createSlider(1, 10, 2);
  s_size.position(25, 7);

  // dotList creation
  for (let x = spacing / 2; x < w; x += spacing) {
    for (let y = spacing / 2; y < h; y += spacing) {
      dotList.push(new Dot(x, y, s));
    }
  }
}

function draw() {
  background('black');
  // sliders control
  text("s", 5, 20);
  s = s_size.value();

  // dotList mapping actions
  dotList.map((dot) => {
    dot.on(s);
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
  on(s) { // here we pass the size parameter to affect this method
    noStroke();
    fill(color('white'));
    
    ellipse(this.x, this.y, s, s);
  }
}
```

## Matrix experiment-1
* We apply the random method to the matrix.
* We play with size, x, y and transparency to create a special effect
* We add sliders and button to reset to default position

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/B17BydaY7)

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
src="https://editor.p5js.org/embed/B17BydaY7"></iframe>

```javascript
/**
 *  Re-group the array of FFT bins into an
 *  array of more meaningful values
 *  using the splitOctaves method.
 */

var source, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  source = new p5.AudioIn();
  source.start();

  fft = new p5.FFT(0.8, 1024);
  fft.setInput(source);
}

function draw() {
  background(220);
  var spectrum = fft.analyze();
  var newBuffer = [];

  // scaledSpectrum is a new, smaller array of more meaningful values
  var scaledSpectrum = splitOctaves(spectrum, 3);
  var len = scaledSpectrum.length;

  // draw shape
  beginShape();

    // one at the far corner
    curveVertex(0, height);

    for (var i = 0; i < len; i++) {
      var point = smoothPoint(scaledSpectrum, i);
      var x = map(i, 0, len-1, 0, width);
      var y = map(point, 0, 255, height, 0);
      curveVertex(x, y);
    }

    // one last point at the end
    curveVertex(width, height);

  endShape();
}


/**
 *  Divides an fft array into octaves with each
 *  divided by three, or by a specified "slicesPerOctave".
 *  
 *  There are 10 octaves in the range 20 - 20,000 Hz,
 *  so this will result in 10 * slicesPerOctave + 1
 *
 *  @method splitOctaves
 *  @param {Array} spectrum Array of fft.analyze() values
 *  @param {Number} [slicesPerOctave] defaults to thirds
 *  @return {Array} scaledSpectrum array of the spectrum reorganized by division
 *                                 of octaves
 */
function splitOctaves(spectrum, slicesPerOctave) {
  var scaledSpectrum = [];
  var len = spectrum.length;

  // default to thirds
  var n = slicesPerOctave|| 3;
  var nthRootOfTwo = Math.pow(2, 1/n);

  // the last N bins get their own 
  var lowestBin = slicesPerOctave;

  var binIndex = len - 1;
  var i = binIndex;


  while (i > lowestBin) {
    var nextBinIndex = round( binIndex/nthRootOfTwo );

    if (nextBinIndex === 1) return;

    var total = 0;
    var numBins = 0;

    // add up all of the values for the frequencies
    for (i = binIndex; i > nextBinIndex; i--) {
      total += spectrum[i];
      numBins++;
    }

    // divide total sum by number of bins
    var energy = total/numBins;
    scaledSpectrum.push(energy);

    // keep the loop going
    binIndex = nextBinIndex;
  }

  // add the lowest bins at the end
  for (var j = i; j > 0; j--) {
    scaledSpectrum.push(spectrum[j]);
  }

  // reverse so that array has same order as original array (low to high frequencies)
  scaledSpectrum.reverse();

  return scaledSpectrum;
}

// average a point in an array with its neighbors
function smoothPoint(spectrum, index, numberOfNeighbors) {

  // default to 2 neighbors on either side
  var neighbors = numberOfNeighbors || 2;
  var len = spectrum.length;

  var val = 0;

  // start below the index
  var indexMinusNeighbors = index - neighbors;
  var smoothedPoints = 0;

  for (var i = indexMinusNeighbors; i < (index+neighbors) && i < len; i++) {
    // if there is a point at spectrum[i], tally it
    if (typeof(spectrum[i]) !== 'undefined') {
      val += spectrum[i];
      smoothedPoints++;
    }
  }

  val = val/smoothedPoints;

  return val;
}
```

## matrix experiment-2 
> matrix training
* Variation with slight size variation based on the sin() function.
* Random color in the grey scale for blinking light effects.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/Hy437sycQ)

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
src="https://editor.p5js.org/embed/Hy437sycQ"></iframe>

```javascript
// Slider s for Size'
// Slider rnd for Random'
// Slider alph for 'Alpha'
// Reset buttons to restart default params

// canvas pararms
let w = 732;
let h = 250;
let s = 2;
// dot
let dot;
// slider params
let spacing = 9;
let dotList = [];
let rnd = 3;
let alph = 0;
let colors = [0, 25, 127, 200, 255];

// Matrix creation function
function matrix() {
  background('black');
  dotList = []; //  reset the list
  s_rnd.value(0);
  s_alph.value(25);
  // dotList creation
  for (let x = spacing / 2; x < w; x += spacing) {
    for (let y = spacing / 2; y < h; y += spacing) {
      dotList.push(new Dot(x, y, s));
    }
  }
}

function setup() {
  // canvas
  createCanvas(w, h);
  // sliders
  s_rnd = createSlider(0, 10, 0);
  s_rnd.position(25, 05);
  s_alph = createSlider(0, 50, 25);
  s_alph.position(25, 25);
  // buttons
  b_reset = createButton('reset');
  b_reset.position(5, 225);
  matrix();
}

function draw() {
  background(0, alph);
  // sliders control
  fill(255);
  text('rnd', 5, 20);
  rnd = s_rnd.value();
  text('a', 5, 40);
  alph = s_alph.value();
  // button
  b_reset.mousePressed(matrix);

  // dotList mapping actions
  dotList.map((dot) => {
    s = sin(frameCount / 100) * 3;
    dot.on(s);
    dot.randomness(rnd);
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
  on(s) { // here we pass the size parameter to affect this method
    noStroke();
    fill(colors[int(random(0, 4))]);
    ellipse(this.x, this.y, s, s);
  }
  randomness(rnd) {
    this.x += random(-rnd, rnd) ;
    this.y += random(-rnd, rnd) ;
    // this.x += random(-rnd, rnd) + sin(frameCount) * 10;
    // this.y += random(-rnd, rnd) + sin(frameCount) * 20;
  }
}
```

## matrix experiment-3
> desktop modulo cycle

* We apply the random method to the matrix.
* We play with the translate and modulo cycle in both axis.

[GO TO EDITOR](https://editor.p5js.org/bernatferragut/sketches/HksUUHe9m)

<iframe
frameborder="0"
border="0" 
cellspacing="0"
style="
width: 732px; 
height: 900px; 
border: 4px solid #000000;
border-radius: 6px;
overflow: hidden;
position: relative;"
src="https://editor.p5js.org/embed/HksUUHe9m"></iframe>

```javascript
// Sliders
// fx1 to change the modulo effect

// canvas vars
let w = 732;
let h = 900;
let size = 2;
let spacing = 90;
// dots vars
let dots = [];
let fx1 = 5;
let colors = [0,50,100,150,200,255];
let col = 0;

function setup() {
  frameRate(10);
  createCanvas(w, h);
  background('black');
  // sliders
  s_fx1 = createSlider(0,10,5);
  s_fx1.position(20,10);
  // dot matrix generation
  for(let x = spacing/2; x < w; x += spacing){
    for(let y = spacing/2; y < h; y += spacing) {
      dots.push(new Dot(x, y));
    }
  }
}

function draw() {
  // background('black');
  // sliders
  text('fx1', 4,23);
  fx1 = s_fx1.value();
  // col = colors[int(random(6))];
  col = 255;
  
  dots.map((dot)=>{
    dot.on(col);
    dot.phasing(fx1);
    ;
  })
}

// object
class Dot {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  on(col){
    noStroke();
    fill(col)
    // fill(color(random(255),200));
    ellipse(this.x, this.y,size,size)
  }
  shake(){
    this.x += random(-3,3)
    this.y += random(-3,3)
  }
  circular() {
    this.y += sin(frameCount/2 )* 5;
    this.x += cos(frameCount/2 )* 5;
  }
  phasing(fx1) {
    this.y -= frameCount % 5-fx1; // slider for fx1
    this.x += frameCount % 5;
  }
}
```
**MIT Licensed | © 2018-2019 Bernat Ferragut All Right Reserved | [bernatferragut.com](http://bernatferragut.com/)**