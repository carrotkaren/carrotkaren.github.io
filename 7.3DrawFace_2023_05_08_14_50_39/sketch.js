function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
 //Draw Head
  fill('olivedrab')
  ellipse(200,200,300,300);

  //left eye 
  fill('mediumblue')
  circle(130,130,40);
  
  //right eye
   fill('mediumblue')
  circle(250,130,40);

//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);


}


