class Ball{
    constructor(x,y,radius)
    {
        var options=
        {
            'restitution':0.2,
            'isStatic':false,
            'friction':1,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        this.image=loadImage("ball.png")
    }

    display()
    {
        var ballpos=this.body.position;
        push();
        translate(ballpos.x,ballpos.y);
        imageMode(RADIUS);
        image(this.image,0,0,100,85);
        pop();
    }
}