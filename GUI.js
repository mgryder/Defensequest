var turn=1;
var moon=1;
window.onload=init;
function init(){
    boardTable=document.getElementById("board");
    //console.log(boardTable);
    const boardTableRows=boardTable.getElementsByTagName("tr");
    //console.log(boardTableRows);
    var spaces=Array.from(boardTableRows[0].getElementsByTagName("td"));
    for(x=1; x<13; x++){
        spaces=spaces.concat(Array.from(boardTableRows[x].getElementsByTagName("td")));
    }
    //console.log(spaces);
}
const ids={
    princess: 0,
    barbarian1: 1,
    barbarian2: 2,
    king: 3,
    prince: 4,
    mage: 5,
    knight: 6,
    rogue: 7,
    evilKnight: 8,
    vampire: 9,
    werewolf: 10,
    spider1: 11,
    spider2: 12,
    spider3: 13,
    spider4: 14,
    spider5: 15,
    zombie1: 16,
    zombie2: 17,
    zombie3: 18,
    zombie4: 19,
    zombie5: 20,
    zombie6: 21,
    zombie7: 22,
    zombie8: 23,
    skeleton1: 24,
    skeleton2: 25,
    skeleton3: 26,
    skeleton4: 27,
    skeleton5: 28,
    skeleton6: 29,
    skeleton7: 30,
    skeleton8: 31,
    druid: 32,
    dragon1: 33,
    dragon2: 34,
    dragon3: 35,
    dragon4: 36,
    dragon5: 37,
    dragon6: 38,
    dragon7: 39,
    dragon8: 40,
    dragon9: 41
};
const names=["Princess McGuffin", "Barbarian Bob", "Barbarian Billy", "King Noble", "Prince Epic", "Melvin the Mage", "Sir Fightsalot", 
            "Rogue the Rogue", "Sir Killsalot", "Vampire", "Werewolf", "Spider 1", "Spider 2", "Spider 3", "Spider 4", "Spider 5", 
            "Zombie 1", "Zombie 2", "Zombie 3", "Zombie 4", "Zombie 5", "Zombie 6", "Zombie 7", "Zombie 8", "Skeleton 1", "Skeleton 2", 
            "Skeleton 3", "Skeleton 4", "Skeleton 5", "Skeleton 6", "Skeleton 7", "Skeleton 8", "Drew the Druid", "Dragon"];
const board =[[42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, null, ids.skeleton4, ids.skeleton8, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, null, ids.skeleton3, ids.skeleton7, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, null, null, ids.barbarian1, null, null, null, null, null, null, null, null, null, null, ids.werewolf, ids.skeleton2, ids.skeleton6, 42, 42, 42],
                [42, null, null, null, ids.mage, null, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, ids.spider1, ids.skeleton1, ids.skeleton5, 42, 42, 42],
                [42, null, null, null, null, ids.knight, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, ids.spider2, ids.dragon1, ids.dragon2, ids.dragon3, null, 42],
                [42, ids.princess, null, null, ids.rogue, null, null, null, null, 42, null, null, null, null, null, null, null, null, null, ids.evilKnight, ids.spider3, ids.dragon4, ids.dragon5, ids.dragon6, ids.druid, 42],
                [42, null, null, null, null, ids.king, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, ids.spider4, ids.dragon7, ids.dragon8, ids.dragon9, null, 42],
                [42, null, null, null, ids.prince, null, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, ids.spider5, ids.zombie1, ids.zombie5, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, null, null, ids.barbarian2, null, null, null, null, null, null, null, null, null, null, ids.vampire, ids.zombie2, ids.zombie6, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, null, ids.zombie3, ids.zombie7, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, null, null, 42, null, null, null, null, null, null, null, null, null, null, null, ids.zombie4, ids.zombie8, 42, 42, 42],
                [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]
            ];
function endTurn(){
    if(turn>32){
        turn=1;
        if(moon>7){
            moon=1;
        }
        else{
            moon++;
        }
    }
    else{
        turn++;
    }
    document.getElementById("testCounter").innerHTML="Turn: "+names[turn];
    document.getElementById("moon").innerHTML="Moon: "+moon;
}