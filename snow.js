class Snow {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            isStatic:true
        }
        this.r=r;
        this.body=loadImage("snow4.webp")    
        this.body = Bodies.circle(x, y, this.r,options);   
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r);
        //fill(this.color)
        ellipseMode(RADIUS);
      
        pop();
    }

};