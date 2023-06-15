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
    buttonR = createButton('Play again');
    buttonR.size(80,20);
    buttonR.position(30, 20)
    buttonR.mousePressed(reset);

}
function draw() {
    background("#00F6F0");
    showBricks();
    showPion1();
    showPion2();
    turnSqr();
    
    fill("brown");
    saveWalls();
    walls();
    win();
    
}
function names() {
    
    if(input.value() != ""){
        textSize(12);
        name1 = input.value();
    }
    if(input2.value() != ""){
        textSize(12);
        name2 = input2.value();
    }
}
function win() {
    if (currentC1I == 8) {
      playerWin(name1);
    }
    if (currentC2I < 1) {
      playerWin(name2);
    }
  }
  
  function playerWin(player) {
    if (player == name1) {
      fill("blue");
    } else {
      fill("red");
    }
    rect(80, 100, 410, 400);
    fill("black");
  
    textSize(50);
    text(player + " wins!!", 150, 200);
    buttonR.size(100,100);
    buttonR.position(300, 300);
  }





function reset() {
    wallArry.length = 0;
    console.log("bob");
    currentC1I = 0;
  currentC1J = 4;
  currentC2I = 8;
  currentC2J = 4;
  buttonR.position(30, 20);
  buttonR.size(80,20);
  name1="Player1";
  name2="Player2";
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
