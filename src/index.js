import './style.css';
import LeaderBoard from './leaderboard';
import leaderboardlayout from './leaderboardlayout.js';

const layout = leaderboardlayout();
const main = document.getElementById('main');
main.appendChild(layout);

const game = new LeaderBoard();

async function startGame() {
  await game.createGame('my cool game');
}
startGame();

document.getElementById('refreshbtn').addEventListener('click', () => {
  game.displayScores();
}, false);

document.getElementById('addscorebtn').addEventListener('click', () => {
  game.addScore();
}, false);