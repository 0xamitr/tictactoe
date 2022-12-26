let empty = 0;
let Gameboard = (()=>{
    let gameboard = ["X", "O"];
    let clickfunc = function(i){
        let square = document.querySelectorAll(".square");
        square.forEach((sq) =>{
            sq.addEventListener("click", ()=>{
                if(sq.innerHTML == "" && empty == 0){
                    const newtext = document.createTextNode(gameboard[i]);
                    sq.append(newtext);
                    moves++;
                    game.check(sq, i);
                    if(i == 0){
                        i++;
                    }
                    else if(i == 1){
                        i--;
                    }
                }
            })
        })
    }
    return{gameboard, clickfunc};
})();

let Player = (name, index)=>{
    let row1 = 0; 
    let row2 = 0; 
    let row3 = 0; 
    let col1 = 0; 
    let col2 = 0; 
    let col3 = 0; 
    let dig1 = 0; 
    let dig2 = 0;
    this.name = name;
    return{row1, row2, row3, col1, col2, col3, dig1, dig2, name}
}

let game = (()=>{ 

    let check = (mark, i) =>{
        if(i == 0){
            if(mark.classList.contains("row1")){
                player1.row1++;
            }
            if(mark.classList.contains("row2")){
                player1.row2++;
            }
            if(mark.classList.contains("row3")){
                player1.row3++;
            }
            if(mark.classList.contains("col1")){
                player1.col1++;
            }
            if(mark.classList.contains("col2")){
                player1.col2++;
            }
            if(mark.classList.contains("col3")){
                player1.col3++;
            }
            if(mark.classList.contains("dig1")){
                player1.dig1++;
            }
            if(mark.classList.contains("dig2")){
                player1.dig2++;
            }
            if(player1.row1 == 3 || player1.row2 == 3 || player1.row3 == 3|| player1.col1 == 3 || player1.col2 == 3 || player1.col3 == 3 || player1.dig1 == 3 || player1.dig2 == 3){
                empty = 1;
                player1.row1 = 0;
                player1.row2 = 0;
                player1.row3 = 0;
                player1.col1 = 0;
                player1.col2 = 0;
                player1.col3 = 0;
                player1.dig1 = 0;
                player1.dig2 = 0;
                player2.row1 = 0;
                player2.row2 = 0;
                player2.row3 = 0;
                player2.col1 = 0;
                player2.col2 = 0;
                player2.col3 = 0;
                player2.dig1 = 0;
                player2.dig2 = 0;
                console.log("Game over!");
                let result = document.getElementById("result");
                result.textContent = `${player1.name}  Wins!`
                let inp1 = document.querySelector(".input1");
                let inp2 = document.querySelector(".input2");
                inp1.style.display = "flex";
                inp2.style.display = "flex";
            }
            else if (moves == 9){
                empty = 1;
                let result = document.getElementById("result");
                result.textContent = "TIE!";
                player1.row1 = 0;
                    player1.row2 = 0;
                    player1.row3 = 0;
                    player1.col1 = 0;
                    player1.col2 = 0;
                    player1.col3 = 0;
                    player1.dig1 = 0;
                    player1.dig2 = 0;
                    player2.row1 = 0;
                    player2.row2 = 0;
                    player2.row3 = 0;
                    player2.col1 = 0;
                    player2.col2 = 0;
                    player2.col3 = 0;
                    player2.dig1 = 0;
                    player2.dig2 = 0;
                    let inp1 = document.querySelector(".input1");
                    let inp2 = document.querySelector(".input2");
                    inp1.style.display = "flex";
                    inp2.style.display = "flex";
            }
        }
        if(i == 1){
            if(mark.classList.contains("row1")){
                player2.row1++;
            }
            if(mark.classList.contains("row2")){
                player2.row2++;
            }
            if(mark.classList.contains("row3")){
                player2.row3++;
            }
            if(mark.classList.contains("col1")){
                player2.col1++;
            }
            if(mark.classList.contains("col2")){
                player2.col2++;
            }
            if(mark.classList.contains("col3")){
                player2.col3++;
            }
            if(mark.classList.contains("dig1")){
                player2.dig1++;
            }
            if(mark.classList.contains("dig2")){
                player2.dig2++;
            }
            if(player2.row1 == 3 || player2.row2 == 3 || player2.row3 == 3|| player2.col1 == 3 || player2.col2 == 3 || player2.col3 == 3 || player2.dig1 == 3 || player2.dig2 == 3){
                empty = 1;
                player1.row1 = 0;
                player1.row2 = 0;
                player1.row3 = 0;
                player1.col1 = 0;
                player1.col2 = 0;
                player1.col3 = 0;
                player1.dig1 = 0;
                player1.dig2 = 0;
                player2.row1 = 0;
                player2.row2 = 0;
                player2.row3 = 0;
                player2.col1 = 0;
                player2.col2 = 0;
                player2.col3 = 0;
                player2.dig1 = 0;
                player2.dig2 = 0;
                console.log("Game over!");
                let result = document.getElementById("result");
                result.textContent = `${player2.name}  Wins!`
                let inp1 = document.querySelector(".input1");
                let inp2 = document.querySelector(".input2");
                inp1.style.display = "flex";
                inp2.style.display = "flex";
            }
            else if (moves == 9){
                empty = 1;
                let result = document.getElementById("result");
                result.textContent = "TIE!";
                player1.row1 = 0;
                    player1.row2 = 0;
                    player1.row3 = 0;
                    player1.col1 = 0;
                    player1.col2 = 0;
                    player1.col3 = 0;
                    player1.dig1 = 0;
                    player1.dig2 = 0;
                    player2.row1 = 0;
                    player2.row2 = 0;
                    player2.row3 = 0;
                    player2.col1 = 0;
                    player2.col2 = 0;
                    player2.col3 = 0;
                    player2.dig1 = 0;
                    player2.dig2 = 0;
                    let inp1 = document.querySelector(".input1");
                    let inp2 = document.querySelector(".input2");
                    inp1.style.display = "flex";
                    inp2.style.display = "flex";
            }
        }
    }
    return{check};
})();

let button = document.getElementById("start");
button.addEventListener("click", ()=>{
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    if(first == "" || second == ""){
        if (document.querySelector(".input1").style.display != "none" && document.querySelector(".input2").style.display != "none"){
            alert("Player Names can't be empty!");
        }
    }
    else{
        let inp1 = document.querySelector(".input1");
        let inp2 = document.querySelector(".input2");
        inp1.style.display = "none";
        inp2.style.display = "none";
        empty = 0;
        document.getElementById("first").value = "";
        document.getElementById("second").value = "";
        let square = document.querySelectorAll(".square");
        square.forEach((sq) =>{
            sq.textContent = "";
        })
        let result = document.getElementById("result");
        result.textContent = "";
        player1 = Player(first, 0);
        player2 = Player(second, 0);
        moves = 0;
        Gameboard.clickfunc(0);
    }
})