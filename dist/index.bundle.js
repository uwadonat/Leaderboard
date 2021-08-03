/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/leaderboardlayout.js":
/*!**********************************!*\
  !*** ./src/leaderboardlayout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leaderboardlayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboardlayout */ "./src/leaderboardlayout.js");


const layout = (0,_leaderboardlayout__WEBPACK_IMPORTED_MODULE_0__.default)();
const main = document.getElementById('main');
main.appendChild(layout);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZixzQkFBc0IseUJBQXlCLEdBQUcsd0JBQXdCLEdBQUcseUJBQXlCLEdBQUcsd0JBQXdCO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxHQUFHLFFBQVE7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3ZFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVuRCxlQUFlLDJEQUFpQjtBQUNoQztBQUNBLHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvLi9zcmMvbGVhZGVyYm9hcmRsYXlvdXQuanMiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFkZXJib2FyZGxheW91dCgpIHtcbiAgICBjb25zdCBzY29yZXMgPSBbeyBuYW1lOiAnRG9uYXQnLCBzY29yZTogMjB9LCB7bmFtZTonRXZvZGllJywgc2NvcmU6NzB9LCB7bmFtZTogJ1BhcmFkaXMnLHNjb3JlOjUwfSwge25hbWU6J1Jvc2luZScsIHNjb3JlOjE1fV07XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxlYWRlcmJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnTGVhZGVyYm9hcmQnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWFkZXJib2FyZFRpdGxlKTtcbiAgICBjb25zdCBsZWFkZXJib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlYWRlcmJvYXJkLmNsYXNzTmFtZSA9IGxlYWRlcmJvYXJkO1xuICAgIGNvbnN0IHNjb3Jlc2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjb3Jlc2Rpdi5jbGFzc05hbWUgPSAnc2NvcmVzZGl2JztcbiAgICBjb25zdCByZWZsZXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVmbGVzaC5jbGFzc05hbWUgPSAncmVmbGVzaCc7XG4gICAgY29uc3QgcmVjZW50U2NvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICByZWNlbnRTY29yZXMudGV4dENvbnRlbnQgPSAnUmVjZW50IHNjb3Jlcyc7XG4gICAgY29uc3QgcmVmbGVzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcmVmbGVzaEJ0bi50ZXh0Q29udGVudCA9ICdSZWZsZXNoJztcbiAgICByZWZsZXNoLmFwcGVuZENoaWxkKHJlY2VudFNjb3Jlcyk7XG4gICAgcmVmbGVzaC5hcHBlbmRDaGlsZChyZWZsZXNoQnRuKTtcbiAgICBzY29yZXNkaXYuYXBwZW5kQ2hpbGQocmVmbGVzaCk7XG4gICAgY29uc3Qgc2NvcmVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NvcmVMaXN0LmNsYXNzTmFtZSA9ICdzY29yZUxpc3QnO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNjb3Jlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbXMudGV4dENvbnRlbnQgPSBgJHtzLm5hbWV9OiR7cy5zY29yZX1gO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgICB9KVxuICAgIHNjb3JlTGlzdC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBzY29yZXNkaXYuYXBwZW5kQ2hpbGQoc2NvcmVMaXN0KTtcbiAgICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXNkaXYpO1xuXG4gICAgLy8gYWRkIHNjb3JlIGZvcm1cblxuICAgIGNvbnN0IGFkZFNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkU2NvcmUuY2xhc3NOYW1lID0gJ2FkZC1zY29yZSc7XG4gICAgY29uc3QgYWRkU2NvcmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWRkU2NvcmVUaXRsZS5pbm5lckhUTUwgPSAnQWRkIFlvdXIgU2NvcmVzJztcbiAgICBjb25zdCBhZGRTY29yZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRTY29yZUZvcm0uY2xhc3NOYW1lID0gJ2FkZC1mb3JtJztcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHBsYXllck5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnLmlucHV0Jyk7XG4gICAgcGxheWVybmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHBsYXllcm5hbWUuaWQgPSAnbmFtZSc7XG4gICAgcGxheWVybmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIG5hbWUnO1xuICAgIHBsYXllck5hbWVEaXYuYXBwZW5kQ2hpbGQocGxheWVybmFtZSk7XG4gICAgY29uc3QgcGxheWVyU2NvcmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGxheWVyU2NvcmUudHlwZSA9ICd0ZXh0JztcbiAgICBwbGF5ZXJTY29yZS5pZCA9ICdzY29yZSc7XG4gICAgcGxheWVyU2NvcmUucGxhY2Vob2xkZXIgPSAneW91ciBTY29yZSc7XG4gICAgcGxheWVyU2NvcmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyU2NvcmUpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBzdWJtaXRCdG4uaWQgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnU3VibWl0JztcbiAgICBzdWJtaXRCdG5EaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBhZGRGb3JtLmFwcGVuZENoaWxkKHBsYXllck5hbWVEaXYpO1xuICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQocGxheWVyU2NvcmVEaXYpO1xuICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuRGl2KTtcbiAgICBhZGRTY29yZUZvcm0uYXBwZW5kQ2hpbGQoYWRkRm9ybSk7XG4gICAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoYWRkU2NvcmVUaXRsZSk7XG4gICAgYWRkU2NvcmUuYXBwZW5kQ2hpbGQoYWRkU2NvcmVGb3JtKTtcbiAgICBsZWFkZXJib2FyZC5hcHBlbmRDaGlsZChzY29yZXNkaXYpO1xuICAgIGxlYWRlcmJvYXJkLmFwcGVuZENoaWxkKGFkZFNjb3JlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVhZGVyYm9hcmQpXG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsZWFkZXJib2FyZGxheW91dCBmcm9tIFwiLi9sZWFkZXJib2FyZGxheW91dFwiXG5cbmNvbnN0IGxheW91dCA9IGxlYWRlcmJvYXJkbGF5b3V0KCk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbm1haW4uYXBwZW5kQ2hpbGQobGF5b3V0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=