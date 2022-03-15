/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createCards */ \"./src/modules/createCards.js\");\n/* harmony import */ var _modules_doOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/doOptions */ \"./src/modules/doOptions.js\");\n/* harmony import */ var _modules_filterGender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filterGender */ \"./src/modules/filterGender.js\");\n/* harmony import */ var _modules_chooseFilm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/chooseFilm */ \"./src/modules/chooseFilm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\r\n    .then(data => (0,_modules_createCards__WEBPACK_IMPORTED_MODULE_1__.createCards)(data))\r\n    \r\n;(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\r\n    .then(data => (0,_modules_doOptions__WEBPACK_IMPORTED_MODULE_2__.doOptions)(data))\r\n    .then(() => (0,_modules_chooseFilm__WEBPACK_IMPORTED_MODULE_4__.chooseFilm)());\r\n(0,_modules_filterGender__WEBPACK_IMPORTED_MODULE_3__.filterGender)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/chooseFilm.js":
/*!***********************************!*\
  !*** ./src/modules/chooseFilm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chooseFilm\": () => (/* binding */ chooseFilm)\n/* harmony export */ });\nconst chooseFilm = () => {\n    const select = document.querySelector('select');\n    let cards = document.querySelectorAll('.card');\n    select.options[0].selected = true;\n    select.addEventListener('change', () => {\n        let film = select.options[select.selectedIndex].textContent;\n        render(film, cards);\n    })\n\n    const render = (film, cards) => {\n    cards.forEach(card => {\n        card.style.display = 'block';\n        let movies = card.querySelector('.movies');\n        if (film === 'Choose film') {\n            return\n        }else if (!movies) {\n            card.style.display = 'none';\n        } else {\n            let moviesLength = 'Movies: '.length;\n            let movies = card.querySelector('.movies').textContent.slice(moviesLength).split(', ');\n            if(movies.every(item => item !== film)) {\n                card.style.display = 'none';\n            }\n        }\n    })}\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/chooseFilm.js?");

/***/ }),

/***/ "./src/modules/createCards.js":
/*!************************************!*\
  !*** ./src/modules/createCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCards\": () => (/* binding */ createCards)\n/* harmony export */ });\nconst createCards = (data) => {\n    const container = document.querySelector('.container')\n    const heroCards = document.createElement('div');\n    heroCards.classList.add('hero-cards');\n    heroCards.innerHTML = '';\n    data.forEach(card => {\n        let heroName = card.name ? `<div class=\"hero-name\">${card.name}</div>` : '';\n        let cardPhoto = card.photo ? card.photo : '';\n        let cardActors = card.actors ? ` <div><b>Actor</b>: ${card.actors}</div>` : '';\n        let cardGender = card.gender ? ` <div><b>Gender</b>: ${card.gender}</div>` : '';\n        let dateBirthBlock = card.birthDay ? `<div> <b>Birth</b>: ${card.birthDay}</div>` : '';\n        let dateDeathBlock = card.deathDay ? `<div> <b>Death</b>: ${card.deathDay}</div>` : '';\n        let species = card.species ? `<div><b>Species</b>: ${card.species}</div>` : '';\n        let movies = card.movies ? `<div class=\"movies\"><b>Movies</b>: ${card.movies.join(', ')}</div>` : '';\n        let cardStatus = card.status ? ` <div><b>Status</b>: ${card.status}</div>` : '';\n        let cardCitizenship = card.citizenship ? ` <div><b>Citizenship</b>: ${card.citizenship}</div>` : '';\n        let cardRealName = card.realName ? ` <div><b>Real name</b>: ${card.realName}</div>` : '';\n\n        let hero = `<div class=\"card\">\n            ${heroName}\n            <div class=\"img-box\">\n            <img class=\"hero-img\" src=\"${cardPhoto}\" alt=\"hero-photo\">\n            </div>\n            <div class=\"info\">\n            ${cardRealName}\n            ${cardActors}\n            ${cardGender}\n            ${dateBirthBlock}\n            ${dateDeathBlock}\n            ${cardCitizenship}\n            ${species}\n            ${movies}\n            ${cardStatus}\n            </div>\n        </div>`\n       heroCards.innerHTML += hero; \n    })\n    container.append(heroCards);\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/createCards.js?");

/***/ }),

/***/ "./src/modules/doOptions.js":
/*!**********************************!*\
  !*** ./src/modules/doOptions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doOptions\": () => (/* binding */ doOptions)\n/* harmony export */ });\nconst doOptions = (data) => {\n    const select = document.querySelector('select');\n    let movies = [];\n    let hasMovies = data.filter(elem => elem.movies);\n    hasMovies.forEach(item => {\n        let roles = item.movies;\n        roles.forEach(role => {\n            if (!movies.includes(role)) {\n                movies.push(role);\n            }\n        })\n    })\n    select.innerHTML = '<option value=\"other\" selected>Choose film</option>';\n    movies.forEach((movie, i)=> {\n        let  option = `\n        <option value=\"${i}\">${movie}</option>\n        `\n        select.innerHTML += option;\n    })\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/doOptions.js?");

/***/ }),

/***/ "./src/modules/filterGender.js":
/*!*************************************!*\
  !*** ./src/modules/filterGender.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterGender\": () => (/* binding */ filterGender)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCards */ \"./src/modules/createCards.js\");\n/* harmony import */ var _chooseFilm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooseFilm */ \"./src/modules/chooseFilm.js\");\n\n\n\n\nconst filterGender = () => {\n    const maleBtn = document.querySelector('.male-btn');\n    const femaleBtn = document.querySelector('.female-btn');\n    const allBtn = document.querySelector('.all-gender');\n    const container = document.querySelector('.container');\n\n    femaleBtn.addEventListener('click', () => {\n       filter('http://localhost:3000/heroes/?gender=female&gender=Female')\n    })\n\n    maleBtn.addEventListener('click', () => {\n       filter('http://localhost:3000/heroes/?gender=male')\n    })\n\n    allBtn.addEventListener('click', () => {\n       filter('http://localhost:3000/heroes')\n    })\n\n    function filter (url) {\n       container.innerHTML = '';\n       (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(url)\n        .then(data => (0,_createCards__WEBPACK_IMPORTED_MODULE_1__.createCards)(data))\n        .then(() => (0,_chooseFilm__WEBPACK_IMPORTED_MODULE_2__.chooseFilm)())\n    }\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterGender.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = (url) => {\r\n return fetch(url)\r\n    .then(res => res.json())\r\n    .catch(error => console.log(error))\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/getData.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;