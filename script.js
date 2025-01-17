const gameBoard = (() => {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    function markBoard(cell, symbol) {
        board[cell[0]][cell[1]] = symbol;
    }

    function checkCell(cell) {
        return (board[cell[0]][cell[1]] !== 0)
    }
    return { board, markBoard, checkCell }
})

const player = (() => {

    const playerInfo = {
        name: 'name',
        symbol: 'symbol',
    }

    function setPlayerName(newName) {
        playerInfo.name = newName;
    }

    function setPlayerSymbol(newSymbol) {
        playerInfo.symbol = newSymbol;
    }

    return { playerInfo, setPlayerName, setPlayerSymbol }
})

const playGame = (() => {
    let lastPlayer = [];
    const board = gameBoard();
    const player1 = player();
    const player2 = player();

    console.log("We're Here!")
    console.log("Board", board)
    console.log("P1", player1)
    console.log("P2", player2)
    console.log(player1.playerInfo)
    player1.playerInfo.name = 'memo'


    function playerTurnAlternator(){
        if(lastPlayer === player1.playerInfo.name) {
            lastPlayer = player2.playerInfo.name;
        } else lastPlayer = player1.playerInfo.name;
        
    }


    return {player1, player2, playerTurnAlternator, lastPlayer}


})

const game = playGame()
console.log("P1 name:" + game.player1.playerInfo.name)
console.log("P2 name:" + game.player2.playerInfo.name)
console.log(game.lastPlayer)

game.playerTurnAlternator()
console.log("P1 name:" + game.player1.playerInfo.name)
console.log("P2 name:" + game.player2.playerInfo.name)
console.log(game.lastPlayer)

