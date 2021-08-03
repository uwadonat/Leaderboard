export default function leaderboardlayout() {
    const scores = [{ name: 'Donat', score: 20}, {name:'Evodie', score:70}, {name: 'Paradis',score:50}, {name:'Rosine', score:15}];
    const container = document.createElement('div');
    container.className = 'container';
    const leaderboardTitle = document.createElement('h1');
    leaderboardTitle.textContent = 'Leaderboard';
    container.appendChild(leaderboardTitle);
}