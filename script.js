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

    function resetCurrentPlayer () {
        currentPlayer = player1
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
                console.log(winner)

                console.log(typeof winner)
                return winner
            }
        }

        for (let i = 0; i < 3; i++){
            if(boardState[0][i] === boardState[1][i] && boardState[1][i] === boardState[2][i] && boardState[0][i] !== '') {
                winner = boardState[i][0];
                console.log(winner)
                console.log(typeof winner)
                console.log(typeof boardState[i][0])


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
        } else if (boardState[0][0] !== '' && boardState[1][0] !== '' && boardState[2][0] !== '' && boardState[0][1] !== '' && boardState[1][1] !== '' && boardState[2][1] !== '' && boardState[0][2] !== '' && boardState[1][2] !== '' && boardState[2][2] !== '') {winner = 'Tie'}

    }

    function getWinner () {
        return winner
    }

    function resetWinner() {
        winner = '';
    }


    return {
        playRound,
        checkWinner,
        getWinner,
        alternateCurrentPlayer,
        getCurrentPlayer,
        getBoard: board.getBoard,
        resetBoard: board.resetBoard,
        resetCurrentPlayer,
        resetWinner,
    }


})

function screenController () {

    const game = playGame();

    const gridContainer = document.getElementById('gridContainer');
    const statusBar = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');

    function startBtnClickHandler (e) {
        e.target.classList.add('hidden'); 
          
        gridContainer.classList.remove('hidden');
        statusBar.classList.remove('hidden');
        resetBtn.classList.remove('hidden');

        displayStatusBar();
    }

    document.getElementById('startGameBtn').onclick = startBtnClickHandler;

    function displayStatusBar () {
        if(game.getWinner() === '') {
        const currentPlayerSymbol = game.getCurrentPlayer().getPlayerInfo().symbol;
        statusBar.innerText = currentPlayerSymbol + "'s turn.";
        } else {
            displayResult();
        }

    }

    function displayResult() {
        if(game.getWinner() === 'Tie') {
        statusBar.innerText = "It's a Tie!" 
        } else {
        statusBar.innerText = game.getWinner() + ' wins!'
        }
    }

    const gridCells = document.querySelectorAll('.grid')
    
    gridCells.forEach((cell) => {
        cellLocation1 = [];
        cellLocation2 = [];
        if (cell.id <= 2) {
            cellLocation1 = 0;
            cellLocation2 = Number(cell.id);
        } else if (cell.id > 2 && cell.id <= 5 ) {
            cellLocation1 = 1;
            cellLocation2 = Number(cell.id - 3);
        } else {
            cellLocation1 = 2;
            cellLocation2 = Number(cell.id - 6);
        }
        cell.setAttribute('cellLocation1', cellLocation1);
        cell.setAttribute('cellLocation2', cellLocation2);

    })

    function resetDisplay() {
        gridCells.forEach((cell) => {
            cell.innerText = '';
        })
    }

    function updateDisplay() {
        resetDisplay();
        gridCells.forEach((cell) => {
            cell.innerText = game.getBoard()[cell.getAttribute('cellLocation1')][cell.getAttribute('cellLocation2')]
        });

    }

    gridCells.forEach((cell) => {
        addEventListener("click", (e) => {
            if(e.target == cell && game.getWinner() === ''){
                cellLocation = [cell.getAttribute('cellLocation1'), cell.getAttribute('cellLocation2')];
                game.playRound(game.getCurrentPlayer(), cellLocation);
                game.alternateCurrentPlayer();
                game.checkWinner();
                updateDisplay();
                displayStatusBar();
            }
        })
    })

    function resetGame() {
        game.resetBoard();
        game.resetCurrentPlayer();
        resetDisplay();
        game.resetWinner();
        displayStatusBar();
    }

    resetBtn.addEventListener("click", resetGame)


}

screenController();


