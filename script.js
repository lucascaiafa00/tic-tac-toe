let squares = document.querySelectorAll(".square")
const winSequences = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
var turn = "x"

squares.forEach(square => {
    square.onclick = ()=>{
        if (square.innerHTML == "") {
            if (turn === "x") {
                let newX = document.createElement("div")
                newX.classList.add("x")
    
                square.appendChild(newX)
                turn = "o"
            }
            else{
                let newO = document.createElement("div")
                newO.classList.add("o")
    
                square.appendChild(newO)
                turn = "x"
            }
            for (let index = 0; index < winSequences.length; index++) {
                checkWin(winSequences[index])
                
            }
    }
    }
});



function checkWin([a,b,c]) {
    if (squares[a].innerHTML != "" && squares[b].innerHTML == squares[a].innerHTML && squares[b].innerHTML == squares[c].innerHTML) {

        
    }

}