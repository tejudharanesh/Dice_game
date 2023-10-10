document.querySelector("h3").innerText ="DRAW";
document.getElementById("player1").addEventListener("click",result);
document.getElementById("player2").addEventListener("click",result);

function result(){
    var player1;
    var player2;

    player1 = Math.floor((Math.random() * 6) + 1);
    player2 = Math.floor((Math.random() * 6) + 1);

    document.querySelectorAll("img")[0].setAttribute("src","images/"+player1+".png");
    document.querySelectorAll("img")[1].setAttribute("src","images/"+player2+".png");

    if(player1 > player2){
        document.querySelector("h3").innerText ="Player 1 won";
    }
    else if(player2 > player1){
        document.querySelector("h3").innerText ="Player 2 won";
    }
    else{
        document.querySelector("h3").innerText ="DRAW";

    }
}
