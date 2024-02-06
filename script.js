function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(51, 84, 60);
    ellipse(width/2, height/2, 200, 230);
  }
  else { 
    // otherwise do this:
    fill(144, 163, 144);
  }
  ellipse(width/2, height/2, 100, 100);
  stroke(53, 66, 57);
}
