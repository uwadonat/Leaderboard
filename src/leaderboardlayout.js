export default function leaderboardlayout() {
  const scoresArray = [
    { name: 'Donat', score: 20 },
    { name: 'Evodie', score: 70 },
    { name: 'Paradis', score: 50 },
    { name: 'Rosine', score: 15 },
  ];
  const errorDiv = document.createElement('div');
  errorDiv.id = 'errorDiv';
  errorDiv.className = 'errorDiv';
  const container = document.createElement('div');
  container.className = 'container';
  const leaderBoardHeader = document.createElement('h1');
  leaderBoardHeader.textContent = 'LeaderBoard';
  container.appendChild(errorDiv);
  container.appendChild(leaderBoardHeader);
  const leaderboard = document.createElement('div');
  leaderboard.className = 'leaderboard';
  const scores = document.createElement('div');
  scores.className = 'scores';
  const refresh = document.createElement('div');
  refresh.className = 'refresh';
  const recentScores = document.createElement('h2');
  recentScores.textContent = 'Recent scores';
  const refreshBtn = document.createElement('button');
  refreshBtn.id = 'refreshbtn';
  refreshBtn.textContent = 'Refresh';
  refresh.appendChild(recentScores);
  refresh.appendChild(refreshBtn);
  scores.appendChild(refresh);
  const listScores = document.createElement('div');
  listScores.className = 'list-scores';
  const ulList = document.createElement('ul');
  ulList.id = 'ulList';
  scoresArray.forEach((element) => {
    const items = document.createElement('li');
    items.id = 'scoresList-items';
    items.className = 'scoresList-items';
    items.textContent = `${`${element.name}:${element.score}`}`;
    ulList.appendChild(items);
  });
  listScores.appendChild(ulList);
  scores.appendChild(listScores);
  leaderboard.appendChild(scores);
  const addScore = document.createElement('div');
  addScore.className = 'add-score';
  const addScoreHeader = document.createElement('h2');
  addScoreHeader.textContent = 'Add Your Scores';
  const formAddDiv = document.createElement('div');
  formAddDiv.className = 'form-add';
  const formAdd = document.createElement('form');
  const playerNameDiv = document.createElement('div');
  const playerName = document.createElement('input');
  playerName.type = 'text';
  playerName.id = 'name';
  playerName.placeholder = 'Your name';
  playerNameDiv.appendChild(playerName);
  const playerScoreDiv = document.createElement('div');
  const playerScore = document.createElement('input');
  playerScore.type = 'text';
  playerScore.id = 'score';
  playerScore.placeholder = 'Your score';
  playerScoreDiv.appendChild(playerScore);
  const submitBtnDiv = document.createElement('div');
  const submitBtn = document.createElement('input');
  submitBtn.type = 'button';
  submitBtn.id = 'addscorebtn';
  submitBtn.value = 'Submit';
  const submitDivErr = document.createElement('div');
  submitDivErr.className = 'submitDivErr';
  submitBtnDiv.appendChild(submitBtn);
  formAdd.appendChild(playerNameDiv);
  formAdd.appendChild(playerScoreDiv);
  formAdd.appendChild(submitDivErr);
  formAddDiv.appendChild(formAdd);
  formAddDiv.appendChild(submitBtnDiv);
  addScore.appendChild(addScoreHeader);
  addScore.appendChild(formAddDiv);
  leaderboard.appendChild(scores);
  leaderboard.appendChild(addScore);
  container.appendChild(leaderboard);
  return container;
}
