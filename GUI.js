var turn=1;
function endTurn(){
    if(turn>32){
        turn=1;
    }
    else{
        turn++;
    }
    document.getElementById("testCounter").innerHTML=turn;
}