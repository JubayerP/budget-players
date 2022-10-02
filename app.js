const selectedArea = document.getElementById("selected-area");
function selectBtn(playerName) {
  const playerNameText = playerName.innerText;
  const li = document.createElement("li");
  li.innerText = playerNameText;
  selectedArea.appendChild(li);

  const namesLength = document.getElementsByTagName("li");
  if (namesLength.length >= 5) {
    alert(
      "Warning!! You already added five Player. You cannot more than that."
    );
    document.getElementById("btn-1").setAttribute("disabled", "");
    document.getElementById("btn-2").setAttribute("disabled", "");
    document.getElementById("btn-3").setAttribute("disabled", "");
    document.getElementById("btn-4").setAttribute("disabled", "");
    document.getElementById("btn-5").setAttribute("disabled", "");
    document.getElementById("btn-6").setAttribute("disabled", "");
  }
}

document.getElementById("btn-1").addEventListener("click", function () {
  const player = document.getElementById("player-1");
  selectBtn(player);
  document.getElementById("btn-1").style.backgroundColor = "#A2A9AF";
  document.getElementById("btn-1").setAttribute("disabled", "");
});

document.getElementById("btn-2").addEventListener("click", function () {
  const player = document.getElementById("player-2");
  selectBtn(player);
  document.getElementById("btn-2").style.backgroundColor = "#A2A9AF";
  document.getElementById("btn-2").setAttribute("disabled", "");
});

document.getElementById("btn-3").addEventListener("click", function () {
  const player = document.getElementById("player-3");
  selectBtn(player);
  document.getElementById("btn-3").style.backgroundColor = "#A2A9AF";
  document.getElementById("btn-3").setAttribute("disabled", "");
});

document.getElementById("btn-4").addEventListener("click", function () {
  const player = document.getElementById("player-4");
  selectBtn(player);
  document.getElementById("btn-4").style.backgroundColor = "#A2A9AF";
  document.getElementById("btn-4").setAttribute("disabled", "");
});

document.getElementById("btn-5").addEventListener("click", function () {
  const player = document.getElementById("player-5");
  selectBtn(player);
  document.getElementById("btn-5").style.backgroundColor = "#A2A9AF";
  document.getElementById("btn-5").setAttribute("disabled", "");
});

document.getElementById("btn-6").addEventListener("click", function () {
  const player = document.getElementById("player-6");
  selectBtn(player);
  document.getElementById("btn-6").style.backgroundColor = "#A2A9AF";
  document.getElementById("btn-6").setAttribute("disabled", "");
});
