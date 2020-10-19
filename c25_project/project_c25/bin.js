class Bin {
  constructor(x, y, width, height) {
    var options = {
        'isStatic':true,
        'restitution':0.3,
        'friction':2.0,
        'density':0.9
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    fill(255);  
    rect(0, 0, this.width, this.height);
    pop();
  }
}
