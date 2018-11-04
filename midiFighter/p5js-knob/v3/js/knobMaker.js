// KNOB CLASS by BERNAT FERRAGUT based on DAN SCHIFFMAN KNOB EXAMPLE

class Knob {
  // params
  constructor(x,y,d){
    this.dragging = false;
    this.x = x;
    this.y = y;
    this.diameter = d; // diameter or size
    this.radius = this.diameter / 2; 
    this.angle = 0; // knob angle
    this.offsetAngle = 0; // knob offset
    this.mouseAngle; // in RADIANS by default
    this.angle; // final angle in RADIANS
    this.calcAngle; // mapping angle to slider
    this.degree; // ***final angle in DEGREES***
  }
  // method update
  update() {
    // then rotate the grid around the pivot point by a
    // number of degrees based on drag on button
    if (mouseIsPressed && this.dragging) {
      fill(25);
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      this.mouseAngle = atan2(dy, dx); // in radians
      this.angle = this.mouseAngle - this.offsetAngle;
    } else {
      fill(0);
    }
    background(0);
    // Draw ellipse for knob
    push()
    // matrix origin move to:
    translate(this.x, this.y);
    // matrix rotate to:
    rotate(this.angle); // rotation animation in RADIANS
    // circle
    stroke(255);
    ellipse(0, 0, this.diameter, this.diameter);
    // line
    line(0, 0, 0, this.radius);
    pop();

    // Slider's range + map to 0 and 255  
    if (this.angle < 0) {
      this.calcAngle = map(this.angle, -PI, 0, PI, 0);
    }
    else if (this.angle > 0) {
      this.calcAngle = map(this.angle, 0, PI, TWO_PI, PI);
    }
    // DEGREES
    this.degree = int(degrees(this.calcAngle));
    // TEXT
    fill(255);
    textAlign(CENTER);
    text(int(degrees(this.calcAngle)), this.x, this.y + this.radius + 20);
    // check if it is pressed
    this.active(); 
  }
  // method active
  active() {
    if (dist(this.x, this.y, mouseX, mouseY) < this.radius){
      this.dragging = true;
      // Track the relative location of click to corner of rectangle
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      this.offsetAngle = atan2(dy, dx) - this.angle;
    } else {
      this.dragging = false;
    }
  } 
}
