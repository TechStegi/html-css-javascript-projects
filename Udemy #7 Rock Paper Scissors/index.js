
const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const sciEl = document.getElementById("scissors");

let ownScoreEl = document.getElementById("own_score");
let compScoreEl = document.getElementById("comp_score");
const comp_arr = ["rock", "paper", "scissors"];

let announcement = document.getElementById("announcement");

let ownScore = 0;
let compScore = 0;

function updateScores() {
    ownScoreEl.innerHTML = ownScore;
    compScoreEl.innerHTML = compScore;
}

function rock_clicked() {    
    let comp_random = comp_arr[Math.floor(Math.random() * comp_arr.length)];
    let text = `Computer: ${comp_random}. `;
    if (comp_random == "rock") {
        announcement.innerHTML = text + text_draw;
    } else if(comp_random == "paper") {
        announcement.innerHTML = text + text_comp_win;
        compScore++;
    } else if (comp_random == "scissors") {
        announcement.innerHTML = text + text_you_win;
        ownScore++;
    }
    updateScores();
}

function paper_clicked() {    
    let comp_random = comp_arr[Math.floor(Math.random() * comp_arr.length)];
    let text = `Computer: ${comp_random}. `;
    if (comp_random == "rock") {
        announcement.innerHTML = text + text_you_win;
        ownScore++;
    } else if(comp_random == "paper") {
        announcement.innerHTML = text + text_draw;
    } else if (comp_random == "scissors") {
        announcement.innerHTML = text + text_comp_win;
        compScore++;
    }
    updateScores();
}

function scissors_clicked() {    
    let comp_random = comp_arr[Math.floor(Math.random() * comp_arr.length)];
    let text = `Computer: ${comp_random}. `;
    if (comp_random == "rock") {
        announcement.innerHTML = text + text_comp_win;
        compScore++;
    } else if(comp_random == "paper") {
        announcement.innerHTML = text + text_you_win;
        ownScore++;
    } else if (comp_random == "scissors") {
        announcement.innerHTML = text + text_draw;
    }
    updateScores();
}

let text_draw = "Draw!";
let text_comp_win = "You loose! Better luck next time!";
let text_you_win = "You win! Keep going.";

// switch (draw, comp_wins, you_win) {
//     case draw:
//         text = "Draw!";
//         break;
//     case comp_wins:
//         text = "You loose. Better luck next time!"
//         break;
//     case you_win: 
//         text = "You win! Good job."
//         break;
// }


// function rock_clicked() {
//     comp_random;
//     if (comp_random === "rock") {
//         draw;
//     } else if (comp_random === "paper") {
//         comp_wins;
//         compScoreEl.innerHTML = own_score++;
//     } else {
//         you_win;
//         ownScoreEl++;
//     }
// }



rockEl.addEventListener("click", rock_clicked);
paperEl.addEventListener("click", paper_clicked);
sciEl.addEventListener("click", scissors_clicked);


function toggle_dark_mode() {
    let number = 0;
    let body = document.getElementsByTagName("body")[0];
    let toggle_button = document.querySelector(".dark_mode_button");
    
    if (body.classList.contains("dark_mode_body")) {
    body.classList.remove("dark_mode_body");
    } else {
        body.classList.add("dark_mode_body");
    }
    
}