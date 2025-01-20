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


const displayController = (() => {
    function displayStartButton() {
        const startBtn = document.createElement('button');
        startBtn.classList.add('startBtn');
        startBtn.textContent = 'Start!'
        document.body.appendChild(startBtn);
        console.log(startBtn)

        startBtn.addEventListener("click", () => {
            startBtn.classList.add('hidden');
        })}

    function getUserInfo(player) {
        let selectionArr = [];

        const wrapper = document.createElement('div');
        wrapper.classList.add('getUserInfoWrapper')

        const h1 = document.createElement('h1');
        h1.textContent = 'Enter player name and select symbol for ' + player; 

        const nameField = document.createElement('input');
        nameField.setAttribute('placeholder', "Enter name...")
        nameField.type = 'text';

        const symbolSelectorX = document.createElement('input')
        const symbolSelectorXwrapper = document.createElement('div')

        const symbolSelectorO = document.createElement('input')
        const symbolSelectorOwrapper = document.createElement('div')


        const symbolSelectorXLabel = document.createElement('label')
        const symbolSelectorOLabel = document.createElement('label')

        symbolSelectorX.type = 'radio';
        symbolSelectorO.type = 'radio';

        symbolSelectorX.name = 'selector';
        symbolSelectorO.name = 'selector';

        symbolSelectorXLabel.textContent = 'X';
        symbolSelectorOLabel.textContent = 'O';

        symbolSelectorXLabel.for = 'X';
        symbolSelectorOLabel.for = 'O';

        symbolSelectorX.value = 'X';
        symbolSelectorO.value = 'O';
        
        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirmBtn')
        confirmBtn.textContent = 'Confirm'

        document.body.appendChild(wrapper);
        wrapper.appendChild(h1)
        wrapper.appendChild(nameField)
        wrapper.appendChild(symbolSelectorXwrapper)
        symbolSelectorXwrapper.appendChild(symbolSelectorXLabel)
        symbolSelectorXwrapper.appendChild(symbolSelectorX)

        wrapper.appendChild(symbolSelectorOwrapper)
        symbolSelectorOwrapper.appendChild(symbolSelectorOLabel)
        symbolSelectorOwrapper.appendChild(symbolSelectorO)

        wrapper.appendChild(confirmBtn)
        
        confirmBtn.addEventListener("click", () => {
            let checked = symbolSelectorX.checked ? symbolSelectorX.value : symbolSelectorO.value;
            selectionArr = [nameField.value, checked]
            console.log(selectionArr)
            wrapper.classList.add('hidden')
        })

    }

    function drawBoard(board) {
        const boardWrapper = document.createElement('div');
        boardWrapper.classList.add('boardWrapper')
        let cell1 = document.createElement('div');
        let cell2 = document.createElement('div'); 
        let cell3 = document.createElement('div'); 
        let cell4 = document.createElement('div'); 
        let cell5 = document.createElement('div'); 
        let cell6 = document.createElement('div'); 
        let cell7 = document.createElement('div'); 
        let cell8 = document.createElement('div'); 
        let cell9 = document.createElement('div'); 

        document.body.appendChild(boardWrapper);
        boardWrapper.appendChild(cell1);
        boardWrapper.appendChild(cell2);
        boardWrapper.appendChild(cell3);
        boardWrapper.appendChild(cell4);
        boardWrapper.appendChild(cell5);
        boardWrapper.appendChild(cell6);
        boardWrapper.appendChild(cell7);
        boardWrapper.appendChild(cell8);
        boardWrapper.appendChild(cell9);

        cell1.textContent = board[0][0];
        cell2.textContent = board[0][1];
        cell3.textContent = board[0][2];

        cell4.textContent = board[1][0];
        cell5.textContent = board[1][1];
        cell6.textContent = board[1][2];

        cell7.textContent = board[2][0];
        cell8.textContent = board[2][1];
        cell9.textContent = board[2][2];
    }



    return {displayStartButton, getUserInfo, drawBoard}
})

function initGame () {

}

const displayControl = displayController()
displayControl.getUserInfo()

console.log(gameBoard.getBoard())

const player1 = player('Mahmut', 'X');
console.log(player1.getPlayerInfo())

const player2 = player('Anan', 'O');
console.log(player2.getPlayerInfo())

const newGame = playGame(gameBoard, player1, player2)

newGame.playRound(player1, [0,0])
newGame.playRound(player1, [0,1])
newGame.playRound(player1, [0,2])

console.log(gameBoard.getBoard())

displayControl.drawBoard(gameBoard.getBoard())

newGame.playRound(player1, [1,1])

displayControl.drawBoard(gameBoard.getBoard())




