/** @format */

const btn_roll = document.getElementById("roll_button");
const ul = document.getElementById("roll-history");
let roll_count = 0;

const diceEl = document.getElementById("dice");

// Rolled Numbers Unicode
const number_1 = "&#9856;";
const number_2 = "&#9857;";
const number_3 = "&#9858;";
const number_4 = "&#9859;";
const number_5 = "&#9860;";
const number_6 = "&#9861;";

btn_roll.addEventListener("click", roll);

function roll() {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
  }, 1000);
  let final_number = Math.floor(Math.random() * 6) + 1;
  console.log(final_number);
  let keineAhnung = "";

  if (final_number == 1) {
    keineAhnung = number_1;
  } else if (final_number == 2) {
    keineAhnung = number_2;
  } else if (final_number == 3) {
    keineAhnung = number_3;
  } else if (final_number == 4) {
    keineAhnung = number_4;
  } else if (final_number == 5) {
    keineAhnung = number_5;
  } else if (final_number == 6) {
    keineAhnung = number_6;
  }

  roll_count += 1;

  ul.innerHTML += `<li>Roll ${roll_count}<span>${keineAhnung}</span></li>`;
  diceEl.innerHTML = keineAhnung;
}
