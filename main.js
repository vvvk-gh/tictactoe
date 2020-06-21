// const PlayerTurn = document.getElementById("player");
// let move = 0;
// let state = "STARTED";
// console.log(state , move);

// function isSeqCaptured(arrayOf3cells){
// let winningcombo = PlayerTurn.textContent + PlayerTurn.textContent + PlayerTurn.textContent
//   //console.log(`the row winning combo is : ${winningcombo}`);
//   if(arrayOf3cells.map(i => i.textContent).join("") === winningcombo){
//      endGame(PlayerTurn.textContent);
//     }
// }

// function isRowCaptured(row){
//   let tableRow = Array.from(document.getElementById("game").children[0].children[row-1].children)
//  // console.log(`The row tables are : ${tableRow.map(i => i.textContent).join("")}`)
//   isSeqCaptured(tableRow);
//  }

// function isColCaptured(col){
//    let tableCol = [
//      document.getElementById("game").children[0].children[0].children[col-1],
//      document.getElementById("game").children[0].children[1].children[col-1],
//      document.getElementById("game").children[0].children[2].children[col-1]
//    ];
//    //console.log(`table columns are ${tableCol.map(i => i.textContent).join("")}`);
//    isSeqCaptured(tableCol);
// }

// function isDiagonalCaptured(row , col){
//   if(row !== col && (row+col) !== 4) return

//   let diag1 = [
//      document.getElementById("game").children[0].children[0].children[0],
//      document.getElementById("game").children[0].children[1].children[1],
//      document.getElementById("game").children[0].children[2].children[2]
    
//   ];
//   let diag2 = [
//      document.getElementById("game").children[0].children[0].children[2],
//      document.getElementById("game").children[0].children[1].children[1],
//      document.getElementById("game").children[0].children[2].children[0]
//   ];

//   isSeqCaptured(diag1);
//   isSeqCaptured(diag2);
// }

// function clicked(row,col){
//   if(state == "ENDED"){
//     console.log("Please Press Reset for a new game")
//     alert(`The Game Over | Plesae Press restart to play Again`);
//     return
//   }
//   //console.log(`cliked box is :(${row},${col})`);
//   let boxclicked = document.getElementById("game").children[0].children[row-1].children[col-1]
//   boxclicked.textContent = PlayerTurn.textContent
//   isRowCaptured(row);
//   isColCaptured(col);
//   isDiagonalCaptured(row,col);
//   nextTurn();
// }

// function endGame(winner){
//   console.log(winner);
//   if(winner){
//     alert("Game Over | Winner is:" +winner)
//   }
//   else{
//       alert("Game Over | Draw");
//   }
//   state = "ENDED";
//   console.log(`The Game is ended ${state} the moves are ${move}`);
// }

// function resetGame(){
//   if((Math.random) > 0.5) PlayerTurn.textContent = "O";
//   else PlayerTurn.textContent = "X";
//    move = 0;
//    state = "STARTED";
//    console.log(`game restarted ${state} and no of moves changed to ${move}`);
 
//   Array.from(document.getElementsByTagName("td")).forEach(cell =>
//     cell.textContent = " ");

// }

// function nextTurn(){
//   if (state == "ENDED") return
//   move++
//   console.log(`No of moves made : ${move}`);
//   if(PlayerTurn.textContent == "X"){
//     PlayerTurn.textContent = "O";
//   }
//   else {
//     PlayerTurn.textContent = "X";
//   }
//   if(move == 9 ){
//     endGame();
//   }
// }


// constants
const STARTED = 0
const ENDED = 1

// HTML elements
const playerSpan = document.getElementById('player')
const gameTable = document.getElementById('game')

const game = {
  state: STARTED,
  turn: 'X',
  move: 0
}

function endGame(winner) {
    if (winner) {
        alert('Game Over | Winner = ' + winner)
    } else {
        alert('Game Over | Draw')
    }
    game.state = ENDED
}

function restartGame() {
    if (Math.random() > 0.5) game.turn = 'O'
    else game.turn = 'X'

    game.state = STARTED
    game.move = 0

    Array.from(document.getElementsByTagName('td')).forEach(cell => {
        cell.textContent = ''
    })
}

function nextTurn() {
    if (game.state === ENDED) return
    
    game.move++
    if (game.turn === 'X') game.turn = 'O'
    else game.turn = 'X'

    if (game.move == 9) {
        endGame()
    }

    playerSpan.textContent = game.turn
}

function isSeqCaptured(arrayOf3Cells) {
    let winnningCombo = game.turn + game.turn + game.turn
    if (arrayOf3Cells.map(i => i.textContent).join('') === winnningCombo) {
        endGame(game.turn)
    }
}

function isRowCaptured(row) {
    let tableRow = Array.from(gameTable.children[0].children[row - 1].children)
    isSeqCaptured(tableRow)
}
function isColCaptured(col) {
    let tableCol = [
        gameTable.children[0].children[0].children[col - 1],
        gameTable.children[0].children[1].children[col - 1],
        gameTable.children[0].children[2].children[col - 1]
    ]
    isSeqCaptured(tableCol)
}
function isDiagCaptured(row, col) {
    if (row !== col && (row + col) !== 4) return
    let diag1 = [
        gameTable.children[0].children[0].children[0],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[2]
    ]
    let diag2 = [
        gameTable.children[0].children[0].children[2],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[0]
    ]
    isSeqCaptured(diag1)
    isSeqCaptured(diag2)


}


function boxClicked(row, col) {
  if (game.state === ENDED) {
    alert('Game Ended | Restart to Play Again')
    return
  }
  console.log('box clicked = ', row, col)

  let clickedBox = gameTable.children[0].children[row - 1].children[col - 1]
  clickedBox.textContent = game.turn
  isRowCaptured(row)
  isColCaptured(col)
  isDiagCaptured(row, col)

  nextTurn()
}