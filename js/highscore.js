const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScores.map(score => {
    let child = document.createElement('li');
    child.classList.add('high-score');
    child.innerText = `${score.name} - ${score.score}`
    highScoresList.appendChild(child)
});