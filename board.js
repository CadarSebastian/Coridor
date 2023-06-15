function setup() {
    createCanvas(800, 600);
    initTable();
    input = createInput();
    

    input.position(570, 110);
    input2 = createInput();
    input2.position(570, 130);
    button = createButton('submit');
    button.position(input.x + input.width, input.y);
    button.mousePressed(names);

}
function draw() {
    background("#00F6F0");
    showBricks();
    showPion1();
    showPion2();
    turnSqr();
    buttonReset();
    fill("brown");
    saveWalls();
    walls();
}
function names() {
    
    if(input.value() != ""){
        name1 = input.value();
    }
    if(input2.value() != ""){
        name2 = input2.value();
    }
}
function win(){
    
}
function buttonReset() {
    buttonR = createButton('Reset');
    buttonR.position(30, 20)
    buttonR.mousePressed(reset);

}
function reset() {
    wallArry.length = 0;
    console.log("bob");
    currentC1I = 0;
  currentC1J = 4;
  currentC2I = 8;
  currentC2J = 4;
}
function turnSqr() {
    if (turn == true) {
        fill("Blue");
    } else {
        fill("red");
    }
    rect(600, 40, 50, 50);
}

let table = [];
function initTable() {

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
                margin: 10,
                blocked: 0
            });
        }
        bricky = bricky + 60;

        bricks.push(brick);

    }

}

function showBricks() {
    for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < bricks.length; j++) {
            fill(bricks[i][j].color);
            rect(bricks[i][j].x, bricks[i][j].y, bricks[i][j].width, bricks[i][j].heigth);
        }
    }
}
