const Engine=Matter.Engine
const World=Matter.World 
const Bodies=Matter.Bodies 


var backgroundImage,snowImage,snow=[]















function preload(){
backgroundImage=loadImage("snow3.jpg")

}





function setup() {
 createCanvas(800,600);
engine=Engine.create()
world=engine.world

 
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine)
  if (frameCount%60===0){

    snow.push(new Snow(random(0,800),0,70))
  }
  
    //display the part
    for (var k = 0; k < snow.length; k++) {
      snow[k].display();   
    }}
  

