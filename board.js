function setup(){
    createCanvas(720,700);
    
}
function draw(){

    background("#00F6F0")
    
    c();
    showPion1();
    createMatrice();
    
    
}
let x=30;
let y=30;

function createMatrice(){
    let mat=[];
    for(let i=0;i<=9;i++){
        mat.push([]);
        for (let j = 0; j < coloane; j++){
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