function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let grid = document.getElementById("grid");
let numSquares = Math.floor(window.innerWidth / 48) * Math.floor(window.innerHeight / 48);

for (let i = 0; i < numSquares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  if (getRandomInt(2) === 0) {
    square.classList.add("glowing");
  }
  grid.appendChild(square);
}

setInterval(function() {
  let squares = document.getElementsByClassName("square");
  let randomPositions = getRandomPositions(squares.length);
  for (let i = 0; i < squares.length; i++) {
    if (randomPositions.includes(i)) {
      squares[i].classList.add("glowing");
    } else {
      squares[i].classList.remove("glowing");
    }
  }
}, 1000);

function getRandomPositions(length) {
  const positions = [];
  while (positions.length < length / 2) {
    const randomPosition = Math.floor(Math.random() * length);
    if (!positions.includes(randomPosition)) {
      positions.push(randomPosition);
    }
  }
  return positions;
}

