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
    addScoreTitle.innerHTML = 'Add Your Scores';
    const addScoreForm = document.createElement('div');
    addScoreForm.className = 'add-form';
    const addForm = document.createElement('form');
    const playerNameDiv = document.createElement('div');
    const playername = document.createElement('.input');
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
    leaderboard.appendChild(scoresdiv);
    leaderboard.appendChild(addScore);
    container.appendChild(leaderboard)
    
    return container;
    
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyQm9hcmRMYXlvdXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZixzQkFBc0IseUJBQXlCLEdBQUcsd0JBQXdCLEdBQUcseUJBQXlCLEdBQUcsd0JBQXdCO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxHQUFHLFFBQVE7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvbGVhZGVyYm9hcmRsYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFkZXJib2FyZGxheW91dCgpIHtcbiAgICBjb25zdCBzY29yZXMgPSBbeyBuYW1lOiAnRG9uYXQnLCBzY29yZTogMjB9LCB7bmFtZTonRXZvZGllJywgc2NvcmU6NzB9LCB7bmFtZTogJ1BhcmFkaXMnLHNjb3JlOjUwfSwge25hbWU6J1Jvc2luZScsIHNjb3JlOjE1fV07XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxlYWRlcmJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnTGVhZGVyYm9hcmQnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJib2FyZFRpdGxlKTtcbiAgICBjb25zdCBsZWFkZXJib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlYWRlcmJvYXJkLmNsYXNzTmFtZSA9IGxlYWRlcmJvYXJkO1xuICAgIGNvbnN0IHNjb3Jlc2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjb3Jlc2Rpdi5jbGFzc05hbWUgPSAnc2NvcmVzZGl2JztcbiAgICBjb25zdCByZWZsZXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVmbGVzaC5jbGFzc05hbWUgPSAncmVmbGVzaCc7XG4gICAgY29uc3QgcmVjZW50U2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZWNlbnRTY29yZXMudGV4dENvbnRlbnQgPSAnUmVjZW50IHNjb3Jlcyc7XG4gICAgY29uc3QgcmVmbGVzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmVmbGVzaEJ0bi50ZXh0Q29udGVudCA9ICdSZWZsZXNoJztcbiAgICByZWZsZXNoLmFwcGVuZENoaWxkKHJlY2VudFNjb3Jlcyk7XG4gICAgcmVmbGVzaC5hcHBlbmRDaGlsZChyZWZsZXNoQnRuKTtcbiAgICBzY29yZXNkaXYuYXBwZW5kQ2hpbGQocmVmbGVzaCk7XG4gICAgY29uc3Qgc2NvcmVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NvcmVMaXN0LmNsYXNzTmFtZSA9ICdzY29yZUxpc3QnO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNjb3Jlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbXMudGV4dENvbnRlbnQgPSBgJHtzLm5hbWV9OiR7cy5zY29yZX1gO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgICB9KVxuICAgIHNjb3JlTGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBzY29yZXNkaXYuYXBwZW5kQ2hpbGQoc2NvcmVMaXN0KTtcbiAgICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXNkaXYpO1xuXG4gICAgLy8gYWRkIHNjb3JlIGZvcm1cblxuICAgIGNvbnN0IGFkZFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkU2NvcmUuY2xhc3NOYW1lID0gJ2FkZC1zY29yZSc7XG4gICAgY29uc3QgYWRkU2NvcmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWRkU2NvcmVUaXRsZS5pbm5lckhUTUwgPSAnQWRkIFlvdXIgU2NvcmVzJztcbiAgICBjb25zdCBhZGRTY29yZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRTY29yZUZvcm0uY2xhc3NOYW1lID0gJ2FkZC1mb3JtJztcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnLmlucHV0Jyk7XG4gICAgcGxheWVybmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHBsYXllcm5hbWUuaWQgPSAnbmFtZSc7XG4gICAgcGxheWVybmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICAgIHBsYXllck5hbWVEaXYuYXBwZW5kQ2hpbGQocGxheWVybmFtZSk7XG4gICAgY29uc3QgcGxheWVyU2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGxheWVyU2NvcmUudHlwZSA9ICd0ZXh0JztcbiAgICBwbGF5ZXJTY29yZS5pZCA9ICdzY29yZSc7XG4gICAgcGxheWVyU2NvcmUucGxhY2Vob2xkZXIgPSAneW91ciBTY29yZSc7XG4gICAgcGxheWVyU2NvcmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyU2NvcmUpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnU3VibWl0JztcbiAgICBzdWJtaXRCdG5EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBhZGRGb3JtLmFwcGVuZENoaWxkKHBsYXllck5hbWVEaXYpO1xuICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQocGxheWVyU2NvcmVEaXYpO1xuICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuRGl2KTtcbiAgICBhZGRTY29yZUZvcm0uYXBwZW5kQ2hpbGQoYWRkRm9ybSk7XG4gICAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoYWRkU2NvcmVUaXRsZSk7XG4gICAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoYWRkU2NvcmVGb3JtKTtcbiAgICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXNkaXYpO1xuICAgIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKGFkZFNjb3JlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpXG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=