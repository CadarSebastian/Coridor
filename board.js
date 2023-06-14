function setup() {
    createCanvas(800, 600);
    initTable();
    input = createInput();
    name1=input.value();
    
    input.position(570, 110);
    input2 = createInput();
    input2.position(570, 130);
    button = createButton('submit');
  button.position(input.x + input.width,input.y);
  button.mousePressed(names);
   
}
function draw() {
    background("#00F6F0");
    showBricks();
    showPion1();
    showPion2();
    turnSqr();
    walls();
    saveWalls();
    buttonReset();
}
function names(){
    text(name1,100,100);
}
function buttonReset(){
    buttonR = createButton('Reset');
    buttonR.position(30,20)
    buttonR.mousePressed(reset);
   
}
function reset(){
    wallArry.length=0;
     console.log("bob");
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
                margin: 10
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
