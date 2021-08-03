import './style.css'
import leaderboardlayout from "./leaderboardlayout"

const layout = leaderboardlayout();
const main = document.getElementById('main');
main.appendChild(layout);