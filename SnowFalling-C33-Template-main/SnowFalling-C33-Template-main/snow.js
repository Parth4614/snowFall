class Snow
{
    constructor(x,y,r){
var option={
    restitution:0.05,
    airFriction:0.01,
    density:0.01
}
this.body=Bodies.circle(x,y,r,option)
this.Image=loadImage("snow4.webp")
this.r=r 
World.add(world,this.body)
    }
    display(){
imageMode(RADIUS)
image(this.Image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}