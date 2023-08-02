var selected = "";
var dict = { rock: "✊", paper: "✋", scissor: "✌️" };

function action(PlayerChoice) {
  selected = PlayerChoice;
  all = document.getElementsByClassName("action");
  for (let index = 0; index < all.length; index++) {
    all[index].style.backgroundColor = "black";
  }
  document.getElementById(PlayerChoice).style.backgroundColor = "rgb(95,95,95)";
}

function compchoice() {
  number = Math.floor(Math.random() * 3);
  const hand = ["✊", "✋", "✌️"];
  return hand[number];
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function decide() {
  if (selected != "") {
    comp = compchoice();
    document.getElementById(
      "player_result"
    ).innerHTML = `You chose:${dict[selected]}`;
    document.getElementById("comp_result").innerHTML = `Comp chose:${comp}`;

    final = document.getElementById("result");
    compchoose = comp;
    comp = getKeyByValue(dict, compchoose);

    if (selected == "scissor") {
      if (comp == "scissor") {
        final.innerHTML = "Draw!";
      } else if (comp == "rock") {
        final.innerHTML = "You lost!";
      } else {
        final.innerHTML = "You Won!";
      }
    } else if (selected == "rock") {
      if (comp == "scissor") {
        final.innerHTML = "You Won!";
      } else if (comp == "rock") {
        final.innerHTML = "Draw!";
      } else {
        final.innerHTML = "You lost!";
      }
    } else {
      if (comp == "scissor") {
        final.innerHTML = "You lost!";
      } else if (comp == "rock") {
        final.innerHTML = "You Won!";
      } else {
        final.innerHTML = "Draw!";
      }
    }

    all = document.getElementsByClassName("action");
    for (let index = 0; index < all.length; index++) {
      all[index].style.backgroundColor = "black";
    }
    selected = "";
  }
}
function start() {
  document.getElementById("popup").style.display = "none";
}
