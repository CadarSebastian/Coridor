function setup() {
    createCanvas(720, 700);
    initBricks();

}
function draw() {
    background("#00F6F0");
    showBricks();
    showPion1();
    showPion2();
    turnSqr();




}

function turnSqr(){
    if(turn==true){
         fill("Blue");
    }else{
       fill("red");
    }
    rect(600,40,50,50);
    
    
}

let table = [];



function initBricks() {
    const bricksNumber = 5;
    const marginLeft = 20;
    const marginRigth = 20;

    const bricksDistance = 10;

    const brickWidth = 50;


    for (let i = 0; i < 9; i++) {
        let brick = [];
        for (let j = 0; j < 9; j++) {
            brick.push({
                color: "pink",
                x: marginLeft + j * bricksDistance + j * brickWidth,
                y: bricky,
                width: brickWidth,
                heigth: 50,
                margin: 10
            });
        }
        bricky = bricky + 60;
        console.log(bricky);
        bricks.push(brick);
    }
    console.log(bricks);
}

function showBricks() {
    for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < bricks.length; j++) {
            fill(bricks[i][j].color);
            rect(bricks[i][j].x, bricks[i][j].y, bricks[i][j].width, bricks[i][j].heigth);
        }


    }
}


function getBrickX(){


}
