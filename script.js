var dict = { rock: "✊", paper: "✋", scissor: "✌️" };
var won = 0;
var loss = 0;
var tie = 0;

function action(personchoice) {
  final = document.getElementById("result");

  compchoice = Math.floor(Math.random() * 3);
  const hand = ["✊", "✋", "✌️"];
  comp = hand[compchoice];

  if (dict[personchoice] == "✌️") {
    if (comp == "✌️") {
      final.innerHTML = "Tie.<br>You✌️✌️Computer";
      tie++;
    } else if (comp == "✊") {
      final.innerHTML = "You lost.<br>You✌️✊Computer";
      loss++;
    } else {
      final.innerHTML = "You Won.<br>You✌️✋Computer";
      won++;
    }
  } else if (dict[personchoice] == "✊") {
    if (comp == "✌️") {
      final.innerHTML = "You Won.<br>You✊✌️Computer";
      won++;
    } else if (comp == "✊") {
      final.innerHTML = "Tie.<br>You✊✊Computer";
      tie++;
    } else {
      final.innerHTML = "You lost.<br>You✊✋Computer";
      loss++;
    }
  } else {
    if (comp == "✌️") {
      final.innerHTML = "You lost.<br>You✋✌️Computer";
      loss++;
    } else if (comp == "✊") {
      final.innerHTML = "You Won.<br>You✋✊Computer";
      won++;
    } else {
      final.innerHTML = "Tie.<br>You✋✋Computer";
      tie++;
    }
  }
  document.getElementById("win").innerHTML = `Wins: ${won}`;
  document.getElementById("loss").innerHTML = `Losses: ${loss}`;
  document.getElementById("tie").innerHTML = `Ties:${tie}`;
}
function reset() {
  won = 0;
  loss = 0;
  tie = 0;
  document.getElementById("win").innerHTML = `Wins: ${won}`;
  document.getElementById("loss").innerHTML = `Losses: ${loss}`;
  document.getElementById("tie").innerHTML = `Ties:${tie}`;
  document.getElementById("result").innerHTML = "";
}

var id = null;
function start() {
  var pos = 0;
  var elem = document.getElementById("popup");
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == -350) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + "rem";
    }
  }
  if (pos == -350) document.getElementById("popup").style.display = "none";
}
