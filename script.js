const gameBoard = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    function markCell(cell, symbol) {
        board[cell[0]][cell[1]] = symbol;
    }

    function checkCell(cell) {
        return (board[cell[0]][cell[1]] == '')
    }

    function getBoard () {
        return board
    }

    function resetBoard () {
        for( let i = 0 ; i < 3 ; i++) {
            for ( let j = 0 ; j < 3 ; j++){
                board[i][j] = '';
            }
        }
    }

    return {
        getBoard,
        markCell,
        checkCell,
        resetBoard 
    }
})();

const player = (() => {

    const playerInfo = {
        name: '',
        symbol: '',
    }

    function setPlayerInfo(newName, newSymbol) {
        playerInfo.name = newName;
        playerInfo.symbol = newSymbol;
    }

    function getPlayerInfo () {
        return playerInfo
    }


    return { getPlayerInfo, setPlayerInfo }
});



const playGame = (() => {

    let winner = '';
    
    const board = gameBoard;

    const player1 = player();
    player1.setPlayerInfo('mahmut', 'X')

    const player2 = player();
    player2.setPlayerInfo('ayşe', 'O')

    let currentPlayer = player1;

    function alternateCurrentPlayer () {
        currentPlayer = currentPlayer === player1 ? player2 : player1; 
    }

    function getCurrentPlayer () {
        return currentPlayer;
    }

    function playRound(player, cellLocation) {
        if (board.checkCell(cellLocation)) {
            board.markCell(cellLocation, player.getPlayerInfo().symbol)
        } else {
            console.log("Cell is occupied")
        }}

    function checkWinner() {

        const boardState = board.getBoard();

        for (let i = 0; i < 3; i++){
            if(boardState[i][0] === boardState[i][1] && boardState[i][1] === boardState[i][2] && boardState[i][0] !== '') {
                winner = boardState[i][0];
                return winner
            }
        }

        for (let i = 0; i < 3; i++){
            if(boardState[0][i] === boardState[1][i] && boardState[1][i] === boardState[2][i] && boardState[0][i] !== '') {
                winner = boardState[i][0];
                return winner
            }
        }

        if(boardState[0][0] === 'X' && boardState[1][1] === 'X' && boardState[2][2] === 'X'){
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
        } else if (boardState[0][0] !== '' && boardState[1][0] !== '' && boardState[2][0] !== '' && boardState[0][1] !== '' && boardState[1][1] !== '' && boardState[2][1] !== '' && boardState[0][2] !== '' && boardState[1][2] !== '' && boardState[2][2] !== '') return console.log("It's a tie!")

    }

    function getWinner () {
        return winner
    }


    return {
        playRound,
        checkWinner,
        getWinner,
        alternateCurrentPlayer,
        getCurrentPlayer,
        board,
    }


})






