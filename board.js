function setup(){
    createCanvas(720,700);
    createTable();
    //initBricks();
}
function draw(){
    background("#00F6F0")
    showTable();
    //showBricks();
    const s= new square(30,30,50,50,color)
}
let x=30;
let y=30;
let bricks=[];

class square{
    #y;
    #x;
    color;
    #width;
    #height;
    constructor(x,y,color){
        this.#x=x;
        this.#y=y;
        this.color=color;
        this.#height=height;
        this.#width= width;
    }
}

let table=[];

function createTable(){
    for(let i=0;i<=9;i++){
        const s= new square(30,30,50,50,color)
        
    }
}

function showTable(){
    for (let i = 0; i < 9; i++) {
        fill(table[i].color);
        rect(table[i].x, table[i].y, table[i].width, table[i].heigth);
    }
}



function initBricks() {
  

    for (let i = 0; i < 9; i++) {
        bricks.push({
            color: "#0000ff",
            x: 30,
            y: 30,
            width: 50,
            heigth: 50,
            
        });
    }
}

function showBricks() {
    for (let i = 0; i < 9; i++) {
        fill(bricks[i].color);
        rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].heigth);
    }
}





function createMatrice(){
    let mat=[];
    for(let i=0;i<=9;i++){
        mat.push([]);
        for (let j = 0; j < 10; j++){
            mat[i].push({
                value:square(x,y,55,10),
                color:("#FDC372")
            })
        }
    }
}

function c(){
    for(let i=0;i<=10;i++){
        for(let j =0;j<=10;j++){
            if(i==0 && j==0 || i==10 &&j==10 ||i==0 &&j==10 ||i==10 &&j==0){
            
            }else if (j==10){
                rect(x,y,60,50,10)
            }else if(i==0){
                rect(x,y-10,50,60,10)
            }else if(i==10){
                rect(x,y,50,60,10)
            }else if(j==0 ){
                rect(x-10,y,60,50,10) 
            }
            else{
            square(x,y,50,10)    
            }
        x=x+60;    
        }
        x=30;
        y=y+60;
    }
    
}