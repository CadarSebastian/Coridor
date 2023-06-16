

function showPion1() {
    let circleObj = {
        x: bricks[currentC1I][currentC1J].x + 25,
        y: bricks[currentC1I][currentC1J].y + 25,
        size: 40,
        color: "blue"

    }
    fill(circleObj.color);
    circle(circleObj.x, circleObj.y, circleObj.size);
    if (currentC1I != 8 && currentC2I != 0) {
        fill("black");
        textSize(10);
        text(name1, circleObj.x - 10, circleObj.y + 5);
    }


    for (i = 0; i < wallArry.length; i++) {
        for (yplus = 0; yplus < 50; yplus++) {
            block1up = 0;
            if (circleObj.y - yplus == wallArry[i].curY && (wallArry[i].curX + 10 < circleObj.x && circleObj.x < wallArry[i].curX + 100)) {
                block1up = 1;
                //console.log( block1up=1);
                break;
            }
        }
    }

    for (i = 0; i < wallArry.length; i++) {
        for (yplus = 0; yplus < 50; yplus++) {
            block1down = 0;
            if (circleObj.y + yplus == wallArry[i].curY && (wallArry[i].curX + 10 < circleObj.x && circleObj.x < wallArry[i].curX + 100) && wallArry[i].width == 110) {
                block1down = 1;
                console.log(block1down = 1);
                break;
            }
        }
    }

    for (i = 0; i < wallArry.length; i++) {
        for (xplus = 0; xplus < 50; xplus++) {
            block1dr = 0;
            if (circleObj.x + xplus == wallArry[i].curX && (wallArry[i].curY < circleObj.y && circleObj.y < wallArry[i].curY + 100)) {
                block1dr = 1;
                console.log(block2up);
                break;
            }
        }
    }
    for (i = 0; i < wallArry.length; i++) {
        for (xplus = 0; xplus < 50; xplus++) {
            block1st = 0;
            if (circleObj.x - xplus == wallArry[i].curX && (wallArry[i].curY < circleObj.y && circleObj.y < wallArry[i].curY + 100)) {
                block1st = 1;
                console.log(block2up);
                break;
            }
        }
    }
}

function showPion2() {
    let circleObj = {
        x: bricks[currentC2I][currentC2J].x + 25,
        y: bricks[currentC2I][currentC2J].y + 25,
        size: 40,
        color: "red"

    }
    fill(circleObj.color);
    circle(circleObj.x, circleObj.y, circleObj.size);
    if (currentC1I != 8 && currentC2I != 0) {
        fill("black");
        textSize(10);
        text(name2, circleObj.x - 10, circleObj.y + 5);
    }



    for (i = 0; i < wallArry.length; i++) {
        for (yplus = 0; yplus < 50; yplus++) {
            block2up = 0;
            if (circleObj.y - yplus == wallArry[i].curY && (wallArry[i].curX < circleObj.x && circleObj.x < wallArry[i].curX + 100) && wallArry[i].width == 110) {
                block2up = 1;
                console.log(block2up);
                break;
            }
        }
    }

    for (i = 0; i < wallArry.length; i++) {
        for (yplus = 0; yplus < 50; yplus++) {
            block2down = 0;
            if (circleObj.y + yplus == wallArry[i].curY && (wallArry[i].curX < circleObj.x && circleObj.x < wallArry[i].curX + 100)) {
                block2down = 1;
                console.log(block2up);
                break;
            }
        }
    }
    for (i = 0; i < wallArry.length; i++) {
        for (xplus = 0; xplus < 50; xplus++) {
            block2dr = 0;
            if (circleObj.x + xplus == wallArry[i].curX && (wallArry[i].curY < circleObj.y && circleObj.y < wallArry[i].curY + 100)) {
                block2dr = 1;
                console.log(block2up);
                break;
            }
        }
    }
    for (i = 0; i < wallArry.length; i++) {
        for (xplus = 0; xplus < 50; xplus++) {
            block2st = 0;
            if (circleObj.x - xplus == wallArry[i].curX && (wallArry[i].curY < circleObj.y && circleObj.y < wallArry[i].curY + 100)) {
                block2st = 1;
                console.log(block2up);
                break;
            }
        }
    }

}


function keyPressed() {

    if (newWall == true) {
        if (keyCode === 82) {
            aux = BWidth;
            BWidth = BHeight;
            BHeight = aux;
        }
    }




    if (turn == true) {
        if (keyCode === LEFT_ARROW && currentC1J > 0) {
            if (block1st == 0 && !(currentC1J - 1 == currentC2J && currentC1I == currentC2I)) {
                currentC1J = currentC1J - 1;
                turn = false;
            }

        } else if (keyCode === RIGHT_ARROW && currentC1J < 8) {
            if (block1dr == 0 && !(currentC1J + 1 == currentC2J && currentC1I == currentC2I)) {
                currentC1J = currentC1J + 1;
                turn = false;
            }

        } else if (keyCode === DOWN_ARROW && currentC1I < 8) {
            if (block1down == 0 && !(currentC1I + 1 == currentC2I && currentC1J == currentC2J)) {
                currentC1I = currentC1I + 1;
                turn = false;
            }

        } else if (keyCode === UP_ARROW && currentC1I > 0) {
            if (block1up == 0 && !(currentC1I - 1 == currentC2I && currentC1J == currentC2J)) {
                currentC1I = currentC1I - 1;
                turn = false;
            }

        }
    } else {
        if (keyCode === LEFT_ARROW && currentC2J > 0) {
            if (block2st == 0 && !(currentC2J - 1 == currentC1J && currentC2I == currentC1I)) {
                currentC2J = currentC2J - 1;
                turn = true;
            }

        } else if (keyCode === RIGHT_ARROW && currentC2J < 8) {
            if (block2dr == 0 && !(currentC2J + 1 == currentC1J && currentC2I == currentC1I)) {
                currentC2J = currentC2J + 1;
                turn = true;
            }

        } else if (keyCode === DOWN_ARROW && currentC2I < 8) {
            if (block2down == 0 && !(currentC2I + 1 == currentC1I && currentC2J == currentC1J)) {
                currentC2I = currentC2I + 1;
                turn = true;
            }

        } else if (keyCode === UP_ARROW && currentC2I > 0) {
            if (block2up == 0 && !(currentC2I - 1 == currentC1I && currentC2J == currentC1J)) {
                currentC2I = currentC2I - 1;
                turn = true;
            }

        }
    }



}