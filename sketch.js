let colors = ["red", "black"];

function setup() {
  createCanvas(1000, 1000);
  background(220);

  strokeCap(SQUARE);
  
  // Draw three distinct squares at random positions
  for(let i = 0; i < 10; i++) {
    shapeOne(random(200, 800), random(200, 800), 150);
    shapeTwo(random(200, 800), random(200, 800), 150);
    shapeThree(random(200, 800), random(200, 800), 150);
  }

}

// Encapsulated function
function shapeOne(x, y, s) {
  stroke(random(colors));
  // 1. Top side
  strokeWeight(2);
  line(x + 1, y + 1, x + s + 1, y + 1);
  // 2. Right side
  strokeWeight(10);
  line(x + s, y, x + s, y + s);
  // 3. Bottom side
  strokeWeight(2);
  line(x + s - 1, y + s - 1, x - 1, y + s - 1);
  // 4. Left side
  strokeWeight(10);
  line(x, y + s, x, y);
}

function shapeTwo(x, y, s) {
  stroke(random(colors));
  // 1. Top side
  strokeWeight(10);
  line(x - 1, y, x + s + 1, y);
  // 2. Right side
  strokeWeight(2);
  line(x + s, y, x + s, y + s);
  // 3. Bottom side
  strokeWeight(10);
  line(x + s + 1, y + s, x - 1, y + s);
  // 4. Left side
  strokeWeight(2);
  line(x, y + s, x, y);
}

function shapeThree(x, y, s) {
  stroke(random(colors));
  // 1. Top side
  strokeWeight(2);
  line(x - 1, y, x + s + 1, y)
  // 2. Right side
  strokeWeight(10);
  line(x + s + 1, y - 1, x + s + 1, y + s + 100 + 2);
  // 3. Bottom side
  strokeWeight(2);
  line(x + s + 1, y + s + 100 + 1, x, y + s + 100 + 1);
  // 4. Left side
  strokeWeight(10);
  line(x, y + s + 100 + 2, x, y - 1);
  // 5. Transverse 1
  strokeWeight(2);
  line(x, y + (s/2), x + s, y + (s/2));
  // 6. Transverse 2
  strokeWeight(2);
  line(x, y + s + 100 + 1 - (s/2), x + s + 1, y + s + 100 - (s/2));
}