/* === vars === */
var arrPlayer = makeArray(5),
    gameBoard = document.getElementById("game-board");

/* === constructor === */    
makeMap(gameBoard);
    
/* === controllers === */

console.log(gameBoard);

arrPlayer[0] = new Player(gameBoard);

seletorPlayer1 = arrPlayer[0].getSeletor();

gameBoard.addEventListener('click', function(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
    
    arrPlayer[0].move(target);
    
});

/* === auto run === */
