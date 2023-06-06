
function walls(){


var wall={
    x:600,
    y:400,
    width:IWidth,
    height:IHeight

}
rect(wall.x,wall.y,wall.width,wall.height);
if(newWall==true){
    rect(mouseX,mouseY,BWidth,BHeight)
}
if(c==1){
     curX=mouseX;
     curY=mouseY;
    rect(curX,curY,BWidth,BHeight)
}


}
function mouseClicked() {
    // Check if the mouse click is within the specific area
    if (mouseX > 600 && mouseX < 610 && mouseY > 400 && mouseY < 500) {
      newWall=true;
      
      console.log(1)
      
    }else if(newWall==true){
       
        console.log(2)
        newWall=false;
        c=1;
    }
    
    
  }
  
