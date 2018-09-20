/*
**Lab 824 Ball Two
**Adding Arrays
**
*/


//  Global variables
var balls = []  // declare b1 as a global variable

// put setup code here
function setup() {
  var obj1 = {};
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(80,80,80);
  loadBalls(222);
}

function draw() {
  background(20, 20, 20, 22);
  for(var i = 0; i < balls.length; i++){
   balls[i].run();
  }

}

function loadBalls(numBalls){

  for(var i = 0; i < numBalls; i++){
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var x = random(width);
    var y = random(height);
    var rad = random(10, 20);
    var ball = new Ball(x, y, rad, color(r, g, b));

    balls.push(ball);

  }
  console.log(balls);

}
