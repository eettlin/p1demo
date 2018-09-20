/*
**Lab918 Boid Chaser
**Adding Collision De
**
*/


//  Global variables
var boids = []  // declare b1 as a global variable
var chaser;
// put setup code here
function setup() {

  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  //background(80,80,80);
  loadBoids(55);
  chaser = new Ball(color(255, 255, 0));
}

function draw() {
  background(80, 80, 80, 42);
  chaser.run();
  for(var i = boids.length - 1; i >=0; i--){
    if(boids[i].isDead){
      boids.splice(i, 1);
    }

  }
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
  for(var i = boids.length-1; i >= 0; i--){
    console.log(boids.length);
    if(boids[i].isDead){
      boids.splice(i, 1);
    }
  }

  document.getElementById("demoDiv").innerHTML = "  Number of boids = " + boids.length;

}

function loadBoids(numBalls){
  for(var i = 0; i < numBalls; i++){
    //get random location properties
    var clr = color(random(0, 255),random(0,0) , random(220, 250));
    var boid = new Boid(clr);
    boids.push(boid);//push a boid in the balls array
  }
}
