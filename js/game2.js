//board
const board = document.querySelector("canvas");
const context = board.getContext("2d");
board.width = boardWidth;
board.height = boardHeight;
const velocityX = -2;

let pipeArry = [];
const hole = 140;
const player = new Player();
player.create();
const ground = board.height - player.height + 10;

let gameStart = true;
let gameOver = false;
let score = 0;

window.addEventListener("keydown", function (callback) {
  mainMenu(callback.key);
  player.movement(callback.key);
  console.log(callback);
});

function colusion(a, b) {
  return (
    a.x <= b.x + b.width &&
    a.x + a.width >= b.x &&
    a.y <= b.y + b.height - 4 &&
    a.y + a.height - 4 >= b.y
  );
}

function pipeRepeat() {
  if (gameOver) {
    return;
  }

  const pipeTop = new PipeTop();
  pipeArry.push(pipeTop);

  const pipeBottom = new PipeBottom();
  pipeArry.push(pipeBottom);

  let pipeY = 0 - pipeTop.height / 2 - (Math.random() * pipeTop.height) / 4;
  pipeTop.y = pipeY;
  pipeBottom.y = pipeY + pipeTop.height + hole;
}

function update() {
  if (gameOver) {
    document.querySelector(".gameOver").innerHTML = "Game Over";
    return;
  }
  requestAnimationFrame(update);
  context.clearRect(0, 0, boardWidth, boardHeight);

  player.create();
  player.movement();
  document.querySelector(".score").innerHTML = score;

  for (let i = 0; i < pipeArry.length; i++) {
    let pipe = pipeArry[i];
    context.fillStyle = pipe.color;
    pipe.x += velocityX;
    context.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);

    if (player.y >= ground) {
      gameOver = true;
    } else if (colusion(player, pipe)) {
      gameOver = true;
    } else if (player.y < 0) {
      player.y = 0;
    } else if (player.x == pipe.x + pipe.width) {
      score += 0.5;
      document.querySelector(".score").innerHTML = score;
    }
  }
}

function start() {
  requestAnimationFrame(update);
  pipeRepeat();
  setInterval(pipeRepeat, 2000);
}

function mainMenu(key) {
  if (gameStart && key == " ") {
    gameStart = false;
    start();
    document.querySelector(".gameStart").innerHTML = " ";
  }

  if (gameOver && key == "r") {
    window.location.reload();
  }
}
