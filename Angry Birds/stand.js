class   Stand
{
//to store the natural and the physical properties
constructor(a,b,c,d)  // add all the unknown values of the propertes 
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
World.add(world,this.body)
}
//to display the characters in the browser
display()
{
var   stand_position = this.body.position 
fill("white")
stroke("green")
strokeWeight(3)
// to maintain the order of the naural properties
rect(stand_position.x,stand_position.y,this.w,this.h)
}








}