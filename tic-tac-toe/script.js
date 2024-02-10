document.addEventListener("DOMContentLoaded", () => {

    let gameWon = false;

    let outer = document.getElementById('outer');
    let chance = false;
    let arr = Array(9).fill(undefined);

    let resetButton = document.getElementById('restart');
    resetButton.addEventListener('click', () => {
        location.reload();
        return;
    })


    outer.addEventListener('click', (e) => {

        if(gameWon){
            alert("Game Ended, please restart New Game!")
            return;
        }

        let cell = e.target;
        let cellNumber = cell.getAttribute('data-cell')
        if(cell.getAttribute("cell-clicked")){
            return;
        }
        cell.setAttribute("cell-clicked", true);
        if(chance == true){
            cell.textContent = 'O';
            arr[cellNumber] = 'O'
            cell.style.backgroundColor = '#272c2e'
            winningCombo('O')
        }
        else{
            cell.textContent = 'X';
            arr[cellNumber] = 'X'
            cell.style.backgroundColor = '#d13d74'
            winningCombo('X')
        }
        chance=!chance;
    });

    function winningCombo(char){
        let result = document.getElementById('result');

        if(arr[0]== char && arr[1] == char && arr[2] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[3]== char && arr[4] == char && arr[5] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[6]== char && arr[7] == char && arr[8] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[0]== char && arr[3] == char && arr[6] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[1]== char && arr[4] == char && arr[7] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[2]== char && arr[5] == char && arr[8] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[0]== char && arr[4] == char && arr[8] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        else if(arr[2]== char && arr[4] == char && arr[6] == char){
            result.textContent = `${char} wins the Game!`;
            gameWon = true
        }
        if(gameWon){
            resetButton.style.visibility = 'visible'
            result.style = "border: 3px solid black; background-color: #8d93e0;"
        }
    }

});