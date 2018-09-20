

/*
**  Boid Constructor Function
**  eettlin
**  Sept. 14, 2018
*/

function Boid(clr){
   this.loc = createVector(width/8,height/8);
   this.vel = createVector(random(-3,3),random(-3,3));
   this.acc = createVector(0,0);
   this.dim = 4;
   this.clr = clr;
   this.isDead = false;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.checkEdges = function(){
     if(this.loc.x < 0) this.loc.x = width;
     if(this.loc.x > width) this.loc.x = 0;
     if(this.loc.y < 0) this.loc.y = height;
     if(this.loc.y > height) this.loc.y = 0;
  }

  this.update = function(){
    var distToChaser = this.loc.dist(chaser.loc);
    if(!this.isDead){
      if(distToChaser <350){
        this.acc = p5.Vector.sub(this.loc, chaser.loc);
        this.acc.normalize();
        this.acc.mult(.06);
      }

      if(distToChaser <50){
        this.acc = p5.Vector.sub(this.loc, chaser.loc);
        this.acc.normalize();
        this.acc.mult(.5);
      }
      if(distToChaser <12){
        this.isDead = true;
      }
        this.vel.limit(4);
        this.vel.add(this.acc);
        this.loc.add(this.vel);
    }else{
        this.loc = chaser.loc;
    }

   }

   this.render = function(){
     fill(this.clr);
     var d = this.dim;
     push();
       translate(this.loc.x, this.loc.y);// locate origin at location of this
       rotate(this.vel.heading()+PI/2);
       triangle(-this.dim, 0, this.dim, 0, 0, (-3.3*this.dim));
     pop();
   }
}//  End of Boid constructor function
