function toggleClass() {
  const element = document.getElementById("myMessage");
  element.classList.toggle("hidden"); 
}

const showNumber = document.getElementById("showImage");
const attempt = document.getElementById("attempt");
const win = document.getElementById("win");
const reply = document.getElementById("reply");

let game = Math.floor(Math.random() * 9) + 1;
let guess = 0;
let attempts = 10;
let show = 0;
let check = 1;
let play = true;

// function to start the game
function startGame() {
  game = Math.floor(Math.random() * 9) + 1;
  guess = 0;
  attempts = 10;
  show = 0;
  check = 1;
  play = true;
  attempt.textContent = attempts;
  win.textContent = show;
  reply.textContent = "";
  showImage.innerHTML = "";
}

// function to click the game
function reveal(item) {
  let images = [];
  if (!play) return;

  attempts--;
  attempt.textContent = attempts;

  if (item === game) {
   reply.textContent = ("Correct! You choose image  " + item + ". Continue again!");
    show++;
    win.textContent = show;
    images.push('<img src="img/image-' + game + '.jpg" alt="image" width="70" height="70">');
    showImage.innerHTML = images.join(' ');
    game = Math.floor(Math.random() * 9) + 1;
  } else {
    reply.textContent = ("You are wrong choosing image " + item + ". Try again!");  
  
  }
   if (show == 2) {
    reply.textContent = ("Congratulations! You've won " + show + " times  ");
        reply.innerHTML += "<button onclick='startGame()'>Play Again</button>";
    play = false;
  }

  if (attempts === guess) {
    reply.textContent = ("Game Over! You've used all your attempts  ");
    reply.innerHTML += "<button onclick='startGame()'>Play Again</button>";
    play = false;
  }
}

// function to show the number once
function checks() {
  images = [];

  if (attempts > guess && check == 1 && show <= 1) {
   // show++;
   // win.textContent = show;
    check--;
    images.push('<img src="img/image-' + game + '.jpg" alt="image" width="70" height="70">');
    showImage.innerHTML = images.join(' ');
    reply.textContent = ("This is the image. Click on it!");  
   // game = Math.floor(Math.random() * 9) + 1;
  } else if (check < 1) {
    reply.textContent = ("You have already used your only chance to see it");
  } else if (check && win == 2) {
    reply.textContent = ("You have already won the game  ");
        reply.innerHTML += "<button onclick='startGame()'>Play Again</button>";
    play = false;
  }
  
}

