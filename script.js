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


// const displayController = (() => {
//     function displayStartButton() {
//         const startBtn = document.createElement('button');
//         startBtn.classList.add('startBtn');
//         startBtn.textContent = 'Start!'
//         document.body.appendChild(startBtn);
//         console.log(startBtn)

//         startBtn.addEventListener("click", () => {
//             startBtn.classList.add('hidden');
//         })}

//     function getUserInfo(player) {
//         let selectionArr = [];

//         const wrapper = document.createElement('div');
//         wrapper.classList.add('getUserInfoWrapper')

//         const h1 = document.createElement('h1');
//         h1.textContent = 'Enter player name and select symbol for ' + player; 

//         const nameField = document.createElement('input');
//         nameField.setAttribute('placeholder', "Enter name...")
//         nameField.type = 'text';

//         const symbolSelectorX = document.createElement('input')
//         const symbolSelectorXwrapper = document.createElement('div')

//         const symbolSelectorO = document.createElement('input')
//         const symbolSelectorOwrapper = document.createElement('div')


//         const symbolSelectorXLabel = document.createElement('label')
//         const symbolSelectorOLabel = document.createElement('label')

//         symbolSelectorX.type = 'radio';
//         symbolSelectorO.type = 'radio';

//         symbolSelectorX.name = 'selector';
//         symbolSelectorO.name = 'selector';

//         symbolSelectorXLabel.textContent = 'X';
//         symbolSelectorOLabel.textContent = 'O';

//         symbolSelectorXLabel.for = 'X';
//         symbolSelectorOLabel.for = 'O';

//         symbolSelectorX.value = 'X';
//         symbolSelectorO.value = 'O';
        
//         const confirmBtn = document.createElement('button');
//         confirmBtn.classList.add('confirmBtn')
//         confirmBtn.textContent = 'Confirm'

//         document.body.appendChild(wrapper);
//         wrapper.appendChild(h1)
//         wrapper.appendChild(nameField)
//         wrapper.appendChild(symbolSelectorXwrapper)
//         symbolSelectorXwrapper.appendChild(symbolSelectorXLabel)
//         symbolSelectorXwrapper.appendChild(symbolSelectorX)

//         wrapper.appendChild(symbolSelectorOwrapper)
//         symbolSelectorOwrapper.appendChild(symbolSelectorOLabel)
//         symbolSelectorOwrapper.appendChild(symbolSelectorO)

//         wrapper.appendChild(confirmBtn)
        
//         confirmBtn.addEventListener("click", () => {
//             let checked = symbolSelectorX.checked ? symbolSelectorX.value : symbolSelectorO.value;
//             selectionArr = [nameField.value, checked]
//             console.log(selectionArr)
//             wrapper.classList.add('hidden')
//         })

//     }

//     function drawBoard(board) {

//         if(document.querySelector('.boardWrapper')) {
//             document.querySelector('.boardWrapper').remove()
//         }

//         const boardWrapper = document.createElement('div');
//         boardWrapper.classList.add('boardWrapper')
//         let cell1 = document.createElement('div');
//         let cell2 = document.createElement('div'); 
//         let cell3 = document.createElement('div'); 
//         let cell4 = document.createElement('div'); 
//         let cell5 = document.createElement('div'); 
//         let cell6 = document.createElement('div'); 
//         let cell7 = document.createElement('div'); 
//         let cell8 = document.createElement('div'); 
//         let cell9 = document.createElement('div'); 

//         document.body.appendChild(boardWrapper);
//         boardWrapper.appendChild(cell1);
//         boardWrapper.appendChild(cell2);
//         boardWrapper.appendChild(cell3);
//         boardWrapper.appendChild(cell4);
//         boardWrapper.appendChild(cell5);
//         boardWrapper.appendChild(cell6);
//         boardWrapper.appendChild(cell7);
//         boardWrapper.appendChild(cell8);
//         boardWrapper.appendChild(cell9);

//         cell1.textContent = board[0][0];
//         cell2.textContent = board[0][1];
//         cell3.textContent = board[0][2];

//         cell4.textContent = board[1][0];
//         cell5.textContent = board[1][1];
//         cell6.textContent = board[1][2];

//         cell7.textContent = board[2][0];
//         cell8.textContent = board[2][1];
//         cell9.textContent = board[2][2];
//     }




//     return {displayStartButton, getUserInfo, drawBoard}
// })




