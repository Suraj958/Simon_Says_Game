let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keydown",function(){
    if(started == false){
        started = true;
        levelUp();
    }
    
});
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let ranIdx = Math.floor(Math.random()*4);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    gameFlash(ranbtn);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML= `Game Over! Your score is <b>${level}</b> <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}