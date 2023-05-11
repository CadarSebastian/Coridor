



function initPion1(){
    
    
}

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

function keyPressed(){
        if (keyCode === LEFT_ARROW && currentC1J>0) {
          currentC1J=currentC1J-1;
        } else if (keyCode === RIGHT_ARROW && currentC1J<8) {
            currentC1J=currentC1J+1;
        }else if (keyCode === DOWN_ARROW && currentC1I<8) {
            currentC1I=currentC1I+1;
        }else if (keyCode === UP_ARROW && currentC1I>0) {
            currentC1I=currentC1I-1;
        }
}