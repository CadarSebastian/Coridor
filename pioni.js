

function showPion1(){
    let circleObj ={
        x:bricks[currentC1I][currentC1J].x+25,
        y:bricks[currentC1I][currentC1J].y+25,
        size:40,
        color:"blue"

    }
    fill(circleObj.color);
    circle(circleObj.x,circleObj.y,circleObj.size);
}

function showPion2(){
    let circleObj ={
        x:bricks[currentC2I][currentC2J].x+25,
        y:bricks[currentC2I][currentC2J].y+25,
        size:40,
        color:"red"

    }
    fill(circleObj.color);
    circle(circleObj.x,circleObj.y,circleObj.size);
}


function keyPressed(){
    if(turn== true){
        if (keyCode === LEFT_ARROW && currentC1J>0) {
            if(!(currentC1J-1==currentC2J &&currentC1I==currentC2I)){
                currentC1J=currentC1J-1;
                turn=false;
            }
          
        } else if (keyCode === RIGHT_ARROW && currentC1J<8) {
            if(!(currentC1J+1==currentC2J && currentC1I==currentC2I)){
                currentC1J=currentC1J+1;
                turn=false;
            }
           
        }else if (keyCode === DOWN_ARROW && currentC1I<8) {
            if(!(currentC1I+1==currentC2I && currentC1J==currentC2J)){
                currentC1I=currentC1I+1;
                turn=false;
            }
            
        }else if (keyCode === UP_ARROW && currentC1I>0) {
            if(!(currentC1I-1==currentC2I && currentC1J==currentC2J)){
                currentC1I=currentC1I-1;
                turn=false;
            }
            
        }
    }else{
        if (keyCode === LEFT_ARROW && currentC2J>0) {
            if(!(currentC2J-1==currentC1J && currentC2I==currentC1I)){
                currentC2J=currentC2J-1;
                turn=true;
            }
            
          } else if (keyCode === RIGHT_ARROW && currentC2J<8) {
            if(!(currentC2J+1==currentC1J && currentC2I==currentC1I)){
                currentC2J=currentC2J+1;
                turn=true;
            }
              
          }else if (keyCode === DOWN_ARROW && currentC2I<8) {
            if(!(currentC2I+1==currentC1I && currentC2J==currentC1J)){
                currentC2I=currentC2I+1;
                turn=true;
            }
              
          }else if (keyCode === UP_ARROW && currentC2I>0) {
            if(!(currentC2I-1==currentC1I && currentC2J==currentC1J)){
                currentC2I=currentC2I-1;
                turn=true;
            }
              
          }
    }

    if(newWall==true){
        if(keyCode === 82){
            aux = BWidth;
		BWidth = BHeight;
		BHeight = aux;
        }
    }

}