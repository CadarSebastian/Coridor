var wallArry = [];
function walls() {


    var wall = {
        x: 600,
        y: 400,
        width: IWidth,
        height: IHeight,
        color: "brown"

    }
    rect(wall.x, wall.y, wall.width, wall.height);
    if (newWall == true) {
        rect(mouseX, mouseY, BWidth, BHeight)

    }




}
function mouseClicked() {

    if (mouseX > 600 && mouseX < 610 && mouseY > 400 && mouseY < 500) {
        newWall = true;



    } else if (newWall == true) {
        if (turn == true) { turn = false; }
        else { turn = true }



        newWall = false;


        wallArry.push({
            curX: mouseX,
            curY: mouseY,
            width: BWidth,
            height: BHeight
        })


    }




}


function saveWalls() {
    if (wallArry.length > 0) {
        for (let i = 0; i < wallArry.length; i++) {

            rect(wallArry[i].curX, wallArry[i].curY, wallArry[i].width, wallArry[i].height)


        }


    }
}

