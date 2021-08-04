/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/leaderboardlayout.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ leaderboardlayout)
/* harmony export */ });
function leaderboardlayout() {
    const scores = [{ name: 'Donat', score: 20}, {name:'Evodie', score:70}, {name: 'Paradis',score:50}, {name:'Rosine', score:15}];
    const container = document.createElement('div');
    container.className = 'container';
    const leaderboardTitle = document.createElement('h1');
    leaderboardTitle.textContent = 'Leaderboard';
    container.appendChild(leaderboardTitle);
    const leaderboard = document.createElement('div');
    leaderboard.className = leaderboard;
    const scoresdiv = document.createElement('div');
    scoresdiv.className = 'scoresdiv';
    const reflesh = document.createElement('div');
    reflesh.className = 'reflesh';
    const recentScores = document.createElement('h2');
    recentScores.textContent = 'Recent scores';
    const refleshBtn = document.createElement('h2');
    refleshBtn.textContent = 'Reflesh';
    reflesh.appendChild(recentScores);
    reflesh.appendChild(refleshBtn);
    scoresdiv.appendChild(reflesh);
    const scoreList = document.createElement('div');
    scoreList.className = 'scoreList';
    const list = document.createElement('ul');
    scores.forEach((s) => {
        const items = document.createElement('li');
        items.textContent = `${s.name}:${s.score}`;
        list.appendChild(items);
    })
    scoreList.appendChild(list);
    scoresdiv.appendChild(scoreList);
    leaderboard.appendChild(scoresdiv);

    // add score form

    const addScore = document.createElement('div');
    addScore.className = 'add-score';
    const addScoreTitle = document.createElement('h2');
    addScoreTitle.textContent = 'Add Your Scores';
    const addScoreForm = document.createElement('div');
    addScoreForm.className = 'add-form';
    const addForm = document.createElement('form');
    const playerNameDiv = document.createElement('div');
    const playername = document.createElement('input');
    playername.type = 'text';
    playername.id = 'name';
    playername.placeholder = 'Your name';
    playerNameDiv.appendChild(playername);
    const playerScoreDiv = document.createElement('div');
    const playerScore = document.createElement('input');
    playerScore.type = 'text';
    playerScore.id = 'score';
    playerScore.placeholder = 'your Score';
    playerScoreDiv.appendChild(playerScore);
    const submitBtnDiv = document.createElement('div');
    const submitBtn = document.createElement('input');
    submitBtn.type = 'button';
    submitBtn.id = 'submit';
    submitBtn.value = 'Submit';
    submitBtnDiv.appendChild(submitBtn);
    addForm.appendChild(playerNameDiv);
    addForm.appendChild(playerScoreDiv);
    addForm.appendChild(submitBtnDiv);
    addScoreForm.appendChild(addForm);
    addScore.appendChild(addScoreTitle);
    addScore.appendChild(addScoreForm);
    leaderboard.appendChild(addScore);
    container.appendChild(leaderboard)
    
    return container;
    
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyQm9hcmRMYXlvdXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZixzQkFBc0IseUJBQXlCLEdBQUcsd0JBQXdCLEdBQUcseUJBQXlCLEdBQUcsd0JBQXdCO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxHQUFHLFFBQVE7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0xlYWRlcmJvYXJkLy4vc3JjL2xlYWRlcmJvYXJkbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVhZGVyYm9hcmRsYXlvdXQoKSB7XG4gICAgY29uc3Qgc2NvcmVzID0gW3sgbmFtZTogJ0RvbmF0Jywgc2NvcmU6IDIwfSwge25hbWU6J0V2b2RpZScsIHNjb3JlOjcwfSwge25hbWU6ICdQYXJhZGlzJyxzY29yZTo1MH0sIHtuYW1lOidSb3NpbmUnLCBzY29yZToxNX1dO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgICBjb25zdCBsZWFkZXJib2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsZWFkZXJib2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ0xlYWRlcmJvYXJkJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmRUaXRsZSk7XG4gICAgY29uc3QgbGVhZGVyYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWFkZXJib2FyZC5jbGFzc05hbWUgPSBsZWFkZXJib2FyZDtcbiAgICBjb25zdCBzY29yZXNkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY29yZXNkaXYuY2xhc3NOYW1lID0gJ3Njb3Jlc2Rpdic7XG4gICAgY29uc3QgcmVmbGVzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlZmxlc2guY2xhc3NOYW1lID0gJ3JlZmxlc2gnO1xuICAgIGNvbnN0IHJlY2VudFNjb3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmVjZW50U2NvcmVzLnRleHRDb250ZW50ID0gJ1JlY2VudCBzY29yZXMnO1xuICAgIGNvbnN0IHJlZmxlc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHJlZmxlc2hCdG4udGV4dENvbnRlbnQgPSAnUmVmbGVzaCc7XG4gICAgcmVmbGVzaC5hcHBlbmRDaGlsZChyZWNlbnRTY29yZXMpO1xuICAgIHJlZmxlc2guYXBwZW5kQ2hpbGQocmVmbGVzaEJ0bik7XG4gICAgc2NvcmVzZGl2LmFwcGVuZENoaWxkKHJlZmxlc2gpO1xuICAgIGNvbnN0IHNjb3JlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjb3JlTGlzdC5jbGFzc05hbWUgPSAnc2NvcmVMaXN0JztcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzY29yZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW1zLnRleHRDb250ZW50ID0gYCR7cy5uYW1lfToke3Muc2NvcmV9YDtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtcyk7XG4gICAgfSlcbiAgICBzY29yZUxpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgc2NvcmVzZGl2LmFwcGVuZENoaWxkKHNjb3JlTGlzdCk7XG4gICAgbGVhZGVyYm9hcmQuYXBwZW5kQ2hpbGQoc2NvcmVzZGl2KTtcblxuICAgIC8vIGFkZCBzY29yZSBmb3JtXG5cbiAgICBjb25zdCBhZGRTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFNjb3JlLmNsYXNzTmFtZSA9ICdhZGQtc2NvcmUnO1xuICAgIGNvbnN0IGFkZFNjb3JlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFkZFNjb3JlVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFlvdXIgU2NvcmVzJztcbiAgICBjb25zdCBhZGRTY29yZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRTY29yZUZvcm0uY2xhc3NOYW1lID0gJ2FkZC1mb3JtJztcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwbGF5ZXJuYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgcGxheWVybmFtZS5pZCA9ICduYW1lJztcbiAgICBwbGF5ZXJuYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gICAgcGxheWVyTmFtZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJuYW1lKTtcbiAgICBjb25zdCBwbGF5ZXJTY29yZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBsYXllclNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwbGF5ZXJTY29yZS50eXBlID0gJ3RleHQnO1xuICAgIHBsYXllclNjb3JlLmlkID0gJ3Njb3JlJztcbiAgICBwbGF5ZXJTY29yZS5wbGFjZWhvbGRlciA9ICd5b3VyIFNjb3JlJztcbiAgICBwbGF5ZXJTY29yZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZSk7XG4gICAgY29uc3Qgc3VibWl0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIHN1Ym1pdEJ0bi5pZCA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bi52YWx1ZSA9ICdTdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQocGxheWVyTmFtZURpdik7XG4gICAgYWRkRm9ybS5hcHBlbmRDaGlsZChwbGF5ZXJTY29yZURpdik7XG4gICAgYWRkRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG5EaXYpO1xuICAgIGFkZFNjb3JlRm9ybS5hcHBlbmRDaGlsZChhZGRGb3JtKTtcbiAgICBhZGRTY29yZS5hcHBlbmRDaGlsZChhZGRTY29yZVRpdGxlKTtcbiAgICBhZGRTY29yZS5hcHBlbmRDaGlsZChhZGRTY29yZUZvcm0pO1xuICAgIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKGFkZFNjb3JlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpXG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=