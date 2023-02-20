let tap=new Audio("tapsound.mp3");
let win=new Audio("win.mp3");
let resetsound=new Audio("tapsound2.mp3")
let turn="X";
let temp=0; 

function cngturn(turn){
    if(turn==="X"){
        return "0";
    }
    return "X";
}

function chkwin(){
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.turnbox span').innerText= boxtext[e[0]].innerText + " Won";
            temp=1;
            document.querySelector('.gameInfo img').style.width="300px";
            document.querySelector('.gameInfo img').style.translate="200px";
            win.play();
        }
    });
}

let box=document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',() => {
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=cngturn(turn);
            tap.play();
            chkwin();
            if(temp===0){
                document.querySelector('.turnbox span').innerText="Turn for "+ turn;
            }
        }
    })
});
reset.addEventListener('click',() => {
    let boxtext=document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach(item => {
        item.innerText= "";
    })
    resetsound.play();
    turn="X";
    document.querySelector('.turnbox span').innerText="Turn for "+ turn;
    document.querySelector('.gameInfo img').style.width="0px";
    document.querySelector('.gameInfo img').style.translate="0px";
})