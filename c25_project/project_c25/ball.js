
function preload() {
  img = loadImage('crumbled_paper.png') ;
}

class Ball {
  constructor(x, y, width, height) {
    var options = {
        'isstatic':false,
        'restitution':0.3,
        'friction':0.3,
        'density':1.2
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
    imageMode(CENTER);
    image(img,0, 0, this.width, this.height);
    pop();
  }
}