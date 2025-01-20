const gameBoard = (() => {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    function markCell(cell, symbol) {
        board[cell[0]][cell[1]] = symbol;
    }

    function checkCell(cell) {
        return (board[cell[0]][cell[1]] == '0')
    }

    function getBoard () {
        return board
    }

    return { getBoard, markCell, checkCell }
})();

const player = ((name, symbol) => {

    const playerInfo = {
        name: name,
        symbol: symbol,
    }

    function setPlayerName(newName) {
        playerInfo.name = newName;
    }

    function setPlayerSymbol(newSymbol) {
        playerInfo.symbol = newSymbol;
    }

    function getPlayerInfo () {
        return playerInfo
    }


    return { getPlayerInfo, setPlayerName, setPlayerSymbol }
})

const playGame = ((board, player1, player2) => {
    let winner = '';

    function playRound(player, cellLocation) {
        if (board.checkCell(cellLocation)) {
            board.markCell(cellLocation, player.getPlayerInfo().symbol)
        } else {
            console.log("Cell is occupied")
        }}

    function setWinner() {

        let boardState = board.getBoard();

        //Rows
        if(boardState[0][0] === 'X' && boardState[0][1] === 'X' && boardState[0][2] === 'X'){
            winner = 'X';
            return winner
 
        } else if (boardState[1][0] === 'X' && boardState[1][1] === 'X' && boardState[1][2] === 'X') {
            winner = 'X';
            return winner
 
        } else if (boardState[2][0] === 'X' && boardState[2][1] === 'X' && boardState[2][2] === 'X') {
            winner = 'X';
            return winner
 
        } else if(boardState[0][0] === 'O' && boardState[0][1] === 'O' && boardState[0][2] === 'O'){
            winner = 'O';
            return winner
 
        } else if (boardState[1][0] === 'O' && boardState[1][1] === 'O' && boardState[1][2] === 'O') {
            winner = 'O';
            return winner
 
        } else if (boardState[2][0] === 'O' && boardState[2][1] === 'O' && boardState[2][2] === 'O') {
            winner = 'O';
            return winner
 
        //Columns
        } else if(boardState[0][0] === 'X' && boardState[1][0] === 'X' && boardState[2][0] === 'X'){
            winner = 'X';
            return winner
 
        } else if (boardState[0][1] === 'X' && boardState[1][1] === 'X' && boardState[2][1] === 'X') {
            winner = 'X';
            return winner
 
        } else if (boardState[0][2] === 'X' && boardState[1][2] === 'X' && boardState[2][2] === 'X') {
            winner = 'X';
            return winner
 
        } else if(boardState[0][0] === 'O' && boardState[1][0] === 'O' && boardState[2][0] === 'O'){
            winner = 'O';
            return winner
 
        } else if (boardState[0][1] === 'O' && boardState[1][1] === 'O' && boardState[2][1] === 'O') {
            winner = 'O';
            return winner
 
        } else if (boardState[0][2] === 'O' && boardState[1][2] === 'O' && boardState[2][2] === 'O') {
            winner = 'O';
            return winner

        } 
        //Diagonal
        else if(boardState[0][0] === 'X' && boardState[1][1] === 'X' && boardState[2][2] === 'X'){
            winner = 'X';
            return winner


        } else if (boardState[0][2] === 'X' && boardState[1][1] === 'X' && boardState[2][0] === 'X') {
            winner = 'X';
            return winner

            
        } else if(boardState[0][0] === 'O' && boardState[1][1] === 'O' && boardState[2][2] === 'O'){
            winner = 'O';
            return winner

        } else if (boardState[0][2] === 'O' && boardState[1][1] === 'O' && boardState[2][0] === 'O') {
            winner = 'O';
            return winner
        } else return null

    }

    function getWinner () {
        return winner
    }


    return { playRound, setWinner, getWinner }


})

function initGame () {
    console.log(gameBoard.getBoard())
}

initGame()



// console.log(gameBoard.getBoard())

// const player1 = player('Mahmut', 'X');
// console.log(player1.getPlayerInfo())

// const player2 = player('Anan', 'O');
// console.log(player2.getPlayerInfo())

// const newGame = playGame(gameBoard, player1, player2)

// newGame.playRound(player1, [0,0])
// newGame.playRound(player1, [0,1])
// newGame.playRound(player1, [0,2])

// console.log(gameBoard.getBoard())





