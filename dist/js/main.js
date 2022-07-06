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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validator */ \"./modules/validator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('05 july 2022')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_validator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100)\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n    const calcBlock = document.querySelector('.calc-block')\n    const calcType = document.querySelector('.calc-type')\n    const caclSquare = document.querySelector('.calc-square')\n    const calcCount = document.querySelector('.calc-count')\n    const calcDay = document.querySelector('.calc-day')\n    const total = document.getElementById('total')\n\n\n\n    const countCalc = () => {\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\n        const calcSquareValue = caclSquare.value\n        let totalValue = 0\n        let calcCountValue = 1\n        let calcDayValue = 1\n        if (calcDay.value && calcDay.value < 5) {\n            calcDayValue = 2\n        } else if (calcDay.value && calcDay.value < 10) {\n            calcDayValue = 1.5\n        }\n        if (calcCount.value > 1) {\n            calcCountValue += calcCount.value / 10\n        }\n        if (calcType.value && caclSquare.value) {\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue\n        } else {\n            totalValue = 0\n        }\n        total.textContent = totalValue\n\n    }\n    calcBlock.addEventListener('input', (e) => {\n        countCalc()\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({\n    timing,\n    draw,\n    duration\n}) => {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n}\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst twoJsFunction = () => {\n    const menuBtn = document.querySelector('.menu')\n    const menu = document.querySelector(\"menu\")\n\n    const handleMenu = () => {\n        menu.classList.toggle('active-menu')\n    }\n\n    menuBtn.addEventListener('click', handleMenu)\n\n    menu.addEventListener('click', (e) => {\n        if (e.target.closest('a')) {\n            handleMenu()\n        }\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twoJsFunction);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\n\nconst modal = () => {\n    const buttons = document.querySelectorAll('.popup-btn')\n    const modal = document.querySelector('.popup')\n    const popupContent = modal.querySelector('.popup-content')\n    let bounceEaseOut\n\n    const animation = () => {\n        modal.style.display = 'block'\n        ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 1500,\n            timing: bounceEaseOut,\n            draw: function (progress) {\n                popupContent.style.left = progress * 40 + '%';\n            }\n        });\n    }\n\n    const makeEaseOut = (timing) => {\n        return function (timeFraction) {\n            return 1 - timing(1 - timeFraction);\n        }\n    }\n\n    const bounce = (timeFraction) => {\n        for (let a = 0, b = 1; 1; a += b, b /= 2) {\n            if (timeFraction >= (7 - 4 * a) / 11) {\n                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)\n            }\n        }\n    }\n\n\n\n\n    buttons.forEach(btn => {\n        bounceEaseOut = makeEaseOut(bounce);\n        btn.addEventListener('click', animation)\n    })\n\n    modal.addEventListener('click', (e) => {\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\n            modal.style.display = 'none'\n        }\n    })\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderBlock = document.querySelector('.portfolio-content')\n    const slides = document.querySelectorAll('.portfolio-item')\n    const dotsList = document.querySelector('.portfolio-dots')\n    let dots = document.querySelectorAll('.dot')\n\n    let currentSlide = 0\n    let interval\n    let timeInterval\n\n    const dotsAdder = () => {\n\n        slides.forEach(i => {\n            let dot = document.createElement('li')\n            dot.classList.add('dot')\n            dotsList.append(dot)\n\n        })\n        dots = document.querySelectorAll('.dot')\n    }\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n    const autoSlide = () => {\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\n        prevSlide(dots, currentSlide, 'dot-active')\n        currentSlide++\n        if (currentSlide >= slides.length) {\n            currentSlide = 0\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\n        nextSlide(dots, currentSlide, 'dot-active')\n    }\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer)\n    }\n    const stopSlide = () => {\n        clearInterval(interval)\n    }\n\n\n    dotsAdder()\n    sliderBlock.addEventListener('click', (e) => {\n        e.preventDefault()\n        if (!e.target.matches('.dot, .portfolio-btn')) {\n            return\n        }\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\n        prevSlide(dots, currentSlide, 'dot-active')\n        if (e.target.matches('#arrow-right')) {\n            currentSlide++\n        } else if (e.target.matches('#arrow-left')) {\n            currentSlide--\n        } else if (e.target.classList.contains('dot')) {\n            dots.forEach((dot, index) => {\n                if (e.target === dot) {\n                    currentSlide = index\n                }\n            })\n        }\n        if (currentSlide >= slides.length) {\n            currentSlide = 0\n        }\n        if (currentSlide < 0) {\n            currentSlide = slides.length - 1\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\n        nextSlide(dots, currentSlide, 'dot-active')\n    })\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide()\n        }\n    }, true)\n    sliderBlock.addEventListener('mouseleave', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            startSlide(timeInterval)\n        }\n    }, true)\n\n\n\n    startSlide(timeInterval)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n    const tabPanel = document.querySelector('.service-header')\n    const tabContent = document.querySelectorAll('.service-tab')\n    const tabs = document.querySelectorAll('.service-header-tab')\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab')\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active')\n                    tabContent[index].classList.remove('d-none')\n                } else {\n                    tab.classList.remove('active')\n                    tabContent[index].classList.add('d-none')\n                }\n            })\n        }\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerHours = document.querySelector(\"#timer-hours\")\n    const timerMinutes = document.querySelector(\"#timer-minutes\")\n    const timerSeconds = document.querySelector(\"#timer-seconds\")\n\n    const getTimeRemaining = () => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n\n        let hours = Math.floor(timeRemaining / 60 / 60)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return {\n            timeRemaining,\n            hours,\n            minutes,\n            seconds,\n        }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining(deadline)\n\n        if (getTime.hours < 10) {\n            timerHours.textContent = '0' + `${getTime.hours}`\n        } else {\n            timerHours.textContent = getTime.hours\n        }\n        if (getTime.minutes < 10) {\n            timerMinutes.textContent = '0' + `${getTime.minutes}`\n        } else {\n            timerMinutes.textContent = getTime.minutes\n        }\n        if (getTime.seconds < 10) {\n            timerSeconds.textContent = '0' + `${getTime.seconds}`\n        } else {\n            timerSeconds.textContent = getTime.seconds\n        }\n\n\n    }\n    const starter = () => {\n        let getTime = getTimeRemaining(deadline)\n        const idInterval = setInterval(updateClock, 1000)\n        if (getTime.timeRemaining < 0) {\n            clearTimeout(idInterval)\n        }\n    }\n    starter()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validator.js":
/*!******************************!*\
  !*** ./modules/validator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validator = () => {\n    const calculatorInputsCollection = document.querySelectorAll('.calc-block>input')\n    const topInputContainer = document.querySelector('.main-form-input')\n    const bottomInputContainer = document.querySelector('.footer-form-input')\n    const bottomInputCollection = bottomInputContainer.querySelectorAll('input')\n    const topInputCollection = topInputContainer.querySelectorAll('input')\n\n    const numberValidator = (input) => {\n        input.addEventListener('input', (e) => {\n            e.target.value = e.target.value.replace(/\\D+/, '')\n        })\n    }\n\n    const cyrillicValidator = (e) => {\n        e.target.value = e.target.value.replace(/[^А-я-=]/, '')\n    }\n    const emeilValidator = (e) => {\n        e.target.value = e.target.value.replace(/[^A-z@-_.!~*'\\d]/, '')\n    }\n    const telephoneValidator = (e) => {\n        e.target.value = e.target.value.replace(/[^\\d()-]/, '')\n    }\n\n    calculatorInputsCollection.forEach(numberValidator)\n    bottomInputCollection[3].addEventListener('input', cyrillicValidator)\n    bottomInputCollection[0].addEventListener('input', cyrillicValidator)\n    topInputCollection[0].addEventListener('input', cyrillicValidator)\n    topInputCollection[1].addEventListener('input', emeilValidator)\n    bottomInputCollection[1].addEventListener('input', emeilValidator)\n    topInputCollection[2].addEventListener('input', telephoneValidator)\n    bottomInputCollection[2].addEventListener('input', telephoneValidator)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack:///./modules/validator.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;