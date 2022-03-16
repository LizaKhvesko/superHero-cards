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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _modules_createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createCards */ \"./src/modules/createCards.js\");\n/* harmony import */ var _modules_createList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createList */ \"./src/modules/createList.js\");\n/* harmony import */ var _modules_doOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/doOptions */ \"./src/modules/doOptions.js\");\n/* harmony import */ var _modules_filterGender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filterGender */ \"./src/modules/filterGender.js\");\n/* harmony import */ var _modules_chooseFilm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/chooseFilm */ \"./src/modules/chooseFilm.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_changeLists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/changeLists */ \"./src/modules/changeLists.js\");\n/* harmony import */ var _modules_heroCardList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/heroCardList */ \"./src/modules/heroCardList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\r\n    .then(data => (0,_modules_createCards__WEBPACK_IMPORTED_MODULE_1__.createCards)(data))\r\n\r\n;(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\r\n    .then(data => (0,_modules_createList__WEBPACK_IMPORTED_MODULE_2__.createList)(data))\r\n    \r\n;(0,_modules_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\r\n    .then(data => (0,_modules_doOptions__WEBPACK_IMPORTED_MODULE_3__.doOptions)(data))\r\n    .then(() => (0,_modules_chooseFilm__WEBPACK_IMPORTED_MODULE_5__.chooseFilm)());\r\n(0,_modules_filterGender__WEBPACK_IMPORTED_MODULE_4__.filterGender)();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_6__.search)();\r\n(0,_modules_changeLists__WEBPACK_IMPORTED_MODULE_7__.changeLists)();\r\n(0,_modules_heroCardList__WEBPACK_IMPORTED_MODULE_8__.heroCardList)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/changeLists.js":
/*!************************************!*\
  !*** ./src/modules/changeLists.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeLists\": () => (/* binding */ changeLists)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ \"./src/modules/createList.js\");\n\n\n\nconst changeLists = () => {\n    const listBtn = document.querySelector('.list-btn');\n    const container = document.querySelector('.container');\n    const list = document.querySelector('.list');\n    const inputSearch = document.querySelector('.input-search');\n    const select = document.querySelector('.filter-films');\n    const gender = document.querySelector('.gender');\n\n    listBtn.addEventListener('click', () => {\n        container.classList.toggle('noActive-container');\n        list.classList.toggle('active-list');\n        inputSearch.value = '';\n        if(container.classList.contains('noActive-container')) {\n            listBtn.textContent = 'Detailed List';\n            select.style.display = 'none';\n            gender.style.display = 'none';\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\n                .then(data => (0,_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(data))\n        } else {\n            listBtn.textContent = 'List';\n            select.style.display = 'block';\n            gender.style.display = 'block';\n        }\n    })\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changeLists.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCards\": () => (/* binding */ createCards)\n/* harmony export */ });\nconst createCards = (data) => {\n    const container = document.querySelector('.container');\n    container.innerHTML = ''\n    const heroCards = document.createElement('div');\n    heroCards.classList.add('hero-cards');\n    heroCards.innerHTML = '';\n    data.forEach(card => {\n        let heroName = card.name ? `<div class=\"hero-name\">${card.name}</div>` : '';\n        let cardPhoto = card.photo ? card.photo : '';\n        let cardActors = card.actors ? ` <div><b>Actor</b>: ${card.actors}</div>` : '';\n        let cardGender = card.gender ? ` <div><b>Gender</b>: ${card.gender}</div>` : '';\n        let dateBirthBlock = card.birthDay ? `<div> <b>Birth</b>: ${card.birthDay}</div>` : '';\n        let dateDeathBlock = card.deathDay ? `<div> <b>Death</b>: ${card.deathDay}</div>` : '';\n        let species = card.species ? `<div><b>Species</b>: ${card.species}</div>` : '';\n        let movies = card.movies ? `<div class=\"movies\"><b>Movies</b>: ${card.movies.join(', ')}</div>` : '';\n        let cardStatus = card.status ? ` <div><b>Status</b>: ${card.status}</div>` : '';\n        let cardCitizenship = card.citizenship ? ` <div><b>Citizenship</b>: ${card.citizenship}</div>` : '';\n        let cardRealName = card.realName ? ` <div><b>Real name</b>: ${card.realName}</div>` : '';\n\n        let hero = `<div class=\"card\">\n            ${heroName}\n            <div class=\"img-box\">\n            <img class=\"hero-img\" src=\"${cardPhoto}\" alt=\"hero-photo\">\n            </div>\n            <div class=\"info\">\n            ${cardRealName}\n            ${cardActors}\n            ${cardGender}\n            ${dateBirthBlock}\n            ${dateDeathBlock}\n            ${cardCitizenship}\n            ${species}\n            ${movies}\n            ${cardStatus}\n            </div>\n        </div>`\n       heroCards.innerHTML += hero; \n    })\n    container.append(heroCards);\n\n    let images = document.querySelectorAll('.hero-img');\n    images.forEach(img => {\n        img.addEventListener('mouseover', () => {\n            img.style.transform = 'scale(1.1)';\n            img.style.transition = '1s';\n        })\n    })\n    images.forEach(img => {\n        img.addEventListener('mouseout', () => {\n            img.style.transform = '';\n            img.style.transition = '1s';\n        })\n    })\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/createCards.js?");

/***/ }),

/***/ "./src/modules/createList.js":
/*!***********************************!*\
  !*** ./src/modules/createList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList)\n/* harmony export */ });\nconst createList = (data) => {\n    const list = document.querySelector('.list');\n\n    list.innerHTML = ''\n    const heroCards = document.createElement('ul');\n    heroCards.classList.add('hero-cards_list');\n    heroCards.innerHTML = '';\n    data.forEach((card, i) => {\n        let hero = `<li class=\"card-list\">\n           ${card.name}\n        </li>`\n       heroCards.innerHTML += hero; \n    })\n    list.append(heroCards);\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/createList.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterGender\": () => (/* binding */ filterGender)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCards */ \"./src/modules/createCards.js\");\n/* harmony import */ var _chooseFilm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooseFilm */ \"./src/modules/chooseFilm.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createList */ \"./src/modules/createList.js\");\n\n\n\n\n\n\nconst filterGender = () => {\n    const maleBtn = document.querySelector('.male-btn');\n    const femaleBtn = document.querySelector('.female-btn');\n    const allBtn = document.querySelector('.all-gender');\n    const container = document.querySelector('.container');\n\n    femaleBtn.addEventListener('click', () => {\n       filter('http://localhost:3000/heroes/?gender=female&gender=Female')\n    })\n\n    maleBtn.addEventListener('click', () => {\n       filter('http://localhost:3000/heroes/?gender=male')\n    })\n\n    allBtn.addEventListener('click', () => {\n       filter('http://localhost:3000/heroes')\n    })\n\n    function filter (url) {\n       container.innerHTML = '';\n       (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(url)\n        .then(data => {\n           if(container.classList.contains('noActive-container')) {\n               (0,_createList__WEBPACK_IMPORTED_MODULE_3__.createList)(data);\n            } else {\n              (0,_createCards__WEBPACK_IMPORTED_MODULE_1__.createCards)(data)\n        }})\n        .then(() => (0,_chooseFilm__WEBPACK_IMPORTED_MODULE_2__.chooseFilm)())\n    }\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterGender.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = (url) => {\r\n return fetch(url)\r\n    .then(res => res.json())\r\n    .catch(error => console.log(error))\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\n    let timer;\n\n    return (...args) => {\n        clearTimeout(timer)\n        timer = setTimeout(() =>  {func.apply(undefined, args)}, ms)\n    }\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/heroCardList.js":
/*!*************************************!*\
  !*** ./src/modules/heroCardList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroCardList\": () => (/* binding */ heroCardList)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ \"./src/modules/createList.js\");\n\n\n\nconst heroCardList = () => {\n    const list = document.querySelector('.list');\n\n    list.addEventListener('click', (e) => {\n        if(e.target.classList.contains('card-list')) {\n             let name = e.target.closest('.card-list').textContent.trim();\n             (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/heroes/?name=${name}`)\n                .then(data => createHero(data))\n        } else if (e.target.classList.contains('close')) {\n            list.innerHTML = '';\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/heroes')\n            .then(data => (0,_createList__WEBPACK_IMPORTED_MODULE_1__.createList)(data))\n        }\n    })\n\n    function createHero(data) {\n        data = data[0];\n        list.innerHTML = '';\n        let hero = document.createElement('div');\n        let heroName = data.name ? `<div class=\"hero-name\">${data.name}</div>` : '';\n        let dataPhoto = data.photo ? data.photo : '';\n        let dataActors = data.actors ? ` <div><b>Actor</b>: ${data.actors}</div>` : '';\n        let dataGender = data.gender ? ` <div><b>Gender</b>: ${data.gender}</div>` : '';\n        let dateBirthBlock = data.birthDay ? `<div> <b>Birth</b>: ${data.birthDay}</div>` : '';\n        let dateDeathBlock = data.deathDay ? `<div> <b>Death</b>: ${data.deathDay}</div>` : '';\n        let species = data.species ? `<div><b>Species</b>: ${data.species}</div>` : '';\n        let movies = data.movies ? `<div class=\"movies\"><b>Movies</b>: ${data.movies.join(', ')}</div>` : '';\n        let dataStatus = data.status ? ` <div><b>Status</b>: ${data.status}</div>` : '';\n        let dataCitizenship = data.citizenship ? ` <div><b>Citizenship</b>: ${data.citizenship}</div>` : '';\n        let dataRealName = data.realName ? ` <div><b>Real name</b>: ${data.realName}</div>` : '';\n\n        hero.innerHTML = `<div class=\"data\">\n            <div class=\"close\">X</div>\n            ${heroName}\n            <div class=\"img-box\">\n            <img class=\"hero-img\" src=\"${dataPhoto}\" alt=\"hero-photo\">\n            </div>\n            <div class=\"info\">\n            ${dataRealName}\n            ${dataActors}\n            ${dataGender}\n            ${dateBirthBlock}\n            ${dateDeathBlock}\n            ${dataCitizenship}\n            ${species}\n            ${movies}\n            ${dataStatus}\n            </div>\n        </div>`\n\n        list.append(hero)\n    }\n    \n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/heroCardList.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCards */ \"./src/modules/createCards.js\");\n/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createList */ \"./src/modules/createList.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n\n\n\n\n\nconst search = () => {\n    const container = document.querySelector('.container');\n    const inputSearch = document.querySelector('.input-search');\n    const debounceSearch = (0,_helper__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => {\n        \n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)(`http://localhost:3000/heroes/?name_like=${inputSearch.value}`)\n            .then(data => {\n                container.classList.contains('noActive-container') ? (0,_createList__WEBPACK_IMPORTED_MODULE_2__.createList)(data) : (0,_createCards__WEBPACK_IMPORTED_MODULE_1__.createCards)(data)\n        })\n    }, 500)\n\n    inputSearch.addEventListener('input', debounceSearch)\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/search.js?");

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