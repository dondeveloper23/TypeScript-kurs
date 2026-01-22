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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst orders = [];\nfunction addOrder(name, locationStr, zip, productName, amount, currency) {\n    const splitName = name.split(\" \"); // \"Tomislav Nikolic\" => [\"Tomislav\", \"Nikolic\"]\n    const splitLocation = locationStr.split(\" \"); // \"Belgrade Serbia\" => [\"Belgrade\", \"Serbia\"]\n    if (splitName.length > 2 || splitLocation.length > 2) {\n        throw new Error(\"Name is too long!\");\n    }\n    return {\n        firstName: splitName[0],\n        lastName: splitName[1],\n        city: splitLocation[0],\n        country: splitLocation[1],\n        zip: zip,\n        productName: productName,\n        amount: amount,\n        currency: currency,\n    };\n}\nfunction listOrders(orders) {\n    const orderDiv = document.getElementById(\"order-list\");\n    orderDiv.innerHTML = \"\";\n    orders.forEach(order => {\n        const singleOrder = document.createElement(\"div\");\n        const orderName = document.createElement(\"h1\");\n        orderName.textContent = `${order.firstName} ${order.lastName}`;\n        const orderLocation = document.createElement(\"p\");\n        orderLocation.textContent = `${order.city}, ${order.country}`;\n        const orderProductName = document.createElement(\"p\");\n        orderProductName.textContent = `${order.productName}`;\n        const orderPrice = document.createElement(\"span\");\n        orderPrice.textContent = `${order.amount}`;\n        singleOrder.append(orderName, orderLocation, orderProductName, orderPrice);\n        orderDiv.append(singleOrder);\n    });\n}\nfunction search(searchTerm, orderList) {\n    const searchLower = searchTerm.toLowerCase();\n    const filteredorders = orderList.filter(order => {\n        if (order.productName.toLowerCase() === searchLower) {\n            return order;\n        }\n    });\n    listOrders(filteredorders);\n}\nconst singleOrder = addOrder(\"Tomislav Nikolic\", \"Belgrade Serbia\", 11000, \"Monitor\", 5, \"EUR\");\nconst singleOrder2 = addOrder(\"Dusan Sasic\", \"Belgrade Serbia\", 11000, \"Monitor\", 5, \"EUR\");\norders.push(singleOrder, singleOrder2);\nlistOrders(orders);\n\n\n//# sourceURL=webpack://predavanje3/./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0,__webpack_exports__);
/******/ 	
/******/ })()
;