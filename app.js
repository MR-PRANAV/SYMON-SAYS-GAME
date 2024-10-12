let gameseq = [];
let userseq = [];
let btns = [ "R", "G", "B", "Y" ]
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let start_button = document.querySelector(".start-button");

start_button.addEventListener("click",  function(){
    if( started == false){
        console.log("game started");
        started = true;
        levelup()
    }
})

function gameflash(btn){
    // console.log("button flashed" , btn) // marked
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    } , 200)
}

function userflash(btn){
    // console.log("button flashed" , btn) // marked
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    } , 200)
}



function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let rendIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[rendIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn)
}

function checkAns(idx){

    if( userseq[idx] === gameseq[idx] ){
        console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout( levelup, 1000)
        }
    }
    else{
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white"
        } , 250)
        

        
        h2.innerHTML = `Game Over! <b>Your Score Was ${level}</b> 
                        <br>  `; 
        console.clear();  
        resetgame();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click" ,btnpress );
}

function resetgame( ){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}