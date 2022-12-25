let Gameboard = (()=>{
    let gameboard = ["X", "O"];
    let clickfunc = function(i){
        let square = document.querySelectorAll(".square");
        square.forEach((sq) =>{
            sq.addEventListener("click", ()=>{
                if(sq.innerHTML == "" && game.gets() == 0){
                    const newtext = document.createTextNode(gameboard[i]);
                    sq.append(newtext);
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
    return{row1, row2, row3, col1, col2, col3, dig1, dig2}
}

let player1 = Player("Player1", 0);
let player2 = Player("Player2", 1);

let game = (()=>{ 
    let empty = 0;
    let Playgame = () =>{
        Gameboard.clickfunc(0);
    }
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
                console.log("Game over!");
            }
        }
        else if(i == 1){
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
                console.log("Game over!");
            }
        }
    }
    const gets = () => empty;
    return{Playgame, check, gets};
})();
game.Playgame();