class   Log
{
//to store the natural and the physical properties
constructor(a,b,c,d,angle)  // add all the unknown values of the propertes 
{
//the physical properties are isStatic,restitution(bounciness), friction, density
var options = {
isStatic: true,
restitution: 0,
friction: 0,
density: 1
}
//the natural proprties are x,y,width,height,radius
this.x = a;
this.y = b;
this.w = c;
this.h = d;


//creating a sprite of the object which is called a body
this.body = Bodies.rectangle(a,b,c,d,options)
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
}
//to display the characters in the browser
display()
{
var   log_position = this.body.position 
var angle = this.body.anglerotate
push ()
fill("white")
translate (log_position.x,log_position.y)
rotate (angle)
// to maintain the order of the naural properties
rect(200,200,this.w,this.h)
pop ()
}








}