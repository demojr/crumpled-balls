class Bin{
    constructor(x, y){
        var options = {
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, 100, 10, options)
        this.width = 200;
        this.height = 10; 
        
        World.add(world, this.body);
        this.image = loadImage("Bin.png");
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        
        pop();
      }
}