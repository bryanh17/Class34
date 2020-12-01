class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.8,
            friction :1,
            density:0.04
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

     
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

       
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
        rect(0,0,this.width, this.height);
        pop();

       
      }
}