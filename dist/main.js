/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addremove.js":
/*!**************************!*\
  !*** ./src/addremove.js ***!
  \**************************/
/*! exports provided: AddTodolist, removeTodolist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTodolist\", function() { return AddTodolist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodolist\", function() { return removeTodolist; });\nconst AddTodolist = (target, newtodo) => {\n  if (target.length >= 1) {\n    newtodo.id = target[target.length - 1].id + 1;\n  } else {\n    newtodo.id = 0;\n  }\n\n  target.push(newtodo);\n  return target;\n};\nconst removeTodolist = (target, todo_id) => {\n  const index = target.findIndex((x) => x.id === todo_id);\n  target.splice(index, 1);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./src/addremove.js?");

/***/ }),

/***/ "./src/createproject.js":
/*!******************************!*\
  !*** ./src/createproject.js ***!
  \******************************/
/*! exports provided: Project, displayprojects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayprojects\", function() { return displayprojects; });\nconst Project = (name, todolist = [], id = null) => {\n  return { name, todolist, id };\n};\n\nconst displayprojects = (project, display_projects) => {\n  const projectContainer = document.createElement(\"div\");\n  projectContainer.id = project.id;\n  projectContainer.className = \"project_container\";\n  display_projects.appendChild(projectContainer);\n\n  const projectname = document.createElement(\"h2\");\n  projectname.className = \"project_name\";\n  projectname.innerHTML = project.name;\n  projectContainer.appendChild(projectname);\n};\n\n\n//# sourceURL=webpack:///./src/createproject.js?");

/***/ }),

/***/ "./src/createtodolist.js":
/*!*******************************!*\
  !*** ./src/createtodolist.js ***!
  \*******************************/
/*! exports provided: default, displaytodolists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todolist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaytodolists\", function() { return displaytodolists; });\nclass Todolist {\n  constructor(\n    title,\n    description,\n    dueDate,\n    priority,\n    notes = [],\n    checklist = [],\n    id = null\n  ) {\n    [\n      this.title,\n      this.description,\n      this.dueDate,\n      this.priority,\n      this.notes = [],\n      this.checklist = [],\n      this.id = null,\n    ] = [\n      title,\n      description,\n      dueDate,\n      priority,\n      (notes = []),\n      (checklist = []),\n      (id = null),\n    ];\n  }\n\n  priorityUp() {\n    if (this.priority < 4) {\n      priority += 1;\n    }\n  }\n  priorityDown() {\n    if (this.priority > 0) {\n      priority = priority - 1;\n    }\n  }\n}\n\nconst displaytodolists = (todolist, display_todolists) => {\n  const todolistContainer = document.createElement(\"div\");\n  todolistContainer.id = todolist.id;\n  todolistContainer.className = \"todolist_container\";\n  display_todolists.appendChild(todolistContainer);\n\n  const todolisttitle = document.createElement(\"h2\");\n  todolisttitle.className = \"todolist_title\";\n  todolisttitle.innerHTML = todolist.title;\n  todolistContainer.appendChild(todolisttitle);\n\n  const description = document.createElement(\"p\");\n  description.className = \"todolist_desc\";\n  description.innerHTML = todolist.description;\n  todolistContainer.appendChild(description);\n\n  const duedate = document.createElement(\"p\");\n  duedate.className = \"todolist_date\";\n  duedate.innerHTML = todolist.dueDate;\n  todolistContainer.appendChild(duedate);\n\n  const priority = document.createElement(\"p\");\n  priority.className = \"todolist_priority\";\n  priority.innerHTML = todolist.priority;\n  todolistContainer.appendChild(priority);\n};\n\n\n//# sourceURL=webpack:///./src/createtodolist.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: addproject, addtodo, closes, createtodo, gettodovalues, getprojectvalues, createproject, display_projects, project_container, getprojectsclick, display_todolists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addproject\", function() { return addproject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addtodo\", function() { return addtodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closes\", function() { return closes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createtodo\", function() { return createtodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gettodovalues\", function() { return gettodovalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getprojectvalues\", function() { return getprojectvalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createproject\", function() { return createproject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display_projects\", function() { return display_projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project_container\", function() { return project_container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getprojectsclick\", function() { return getprojectsclick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display_todolists\", function() { return display_todolists; });\nconst addproject = document.getElementById(\"show_project_form\");\nconst projectform = document.getElementById(\"project_form\");\nconst addtodo = document.getElementById(\"show_todo_form\");\nconst todoform = document.getElementById(\"todo_form\");\nconst closes = document.querySelectorAll(\".close\");\nconst createtodo = document.getElementById(\"create_todo\");\nconst createproject = document.getElementById(\"create_project\");\nconst display_projects = document.getElementById(\"display_projects\");\nconst project_container = document.querySelectorAll(\".project_name\");\nconst display_todolists = document.getElementById(\"display_todolists\");\naddproject.addEventListener(\"click\", () => {\n  projectform.className = \"project_form\";\n});\naddtodo.addEventListener(\"click\", () => {\n  todoform.className = \"todo_form\";\n});\ncloses.forEach((close) => {\n  close.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    todoform.className = \"none\";\n    projectform.className = \"none\";\n  });\n});\n\nconst gettodovalues = () => {\n  const todotitle = document.getElementById(\"title\").value;\n  const tododescription = document.getElementById(\"description\").value;\n  const todopriority = document.getElementById(\"priority\").value;\n  const tododate = document.getElementById(\"date\").value;\n  return { todotitle, tododescription, todopriority, tododate };\n};\nconst getprojectvalues = () => {\n  const projectname = document.getElementById(\"name\").value;\n  return projectname;\n};\nconst getprojectsclick = () => {\n  const projects_list_click = document.querySelectorAll(\".project_name\");\n  return projects_list_click;\n};\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addremove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addremove */ \"./src/addremove.js\");\n/* harmony import */ var _createtodolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtodolist */ \"./src/createtodolist.js\");\n/* harmony import */ var _createproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createproject */ \"./src/createproject.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\nconst projects_list = [{ name: \"Default\", todolist: [], id: 0 }];\nlet newtodo = new _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n  \"my daily rotine\",\n  \"it a list of what I do\",\n  \"2020-12-9\",\n  3\n);\n\nlet selectedproject = 0;\n\nconst add_to_chosen_object = (target, id, myobject, todo) => {\n  const index = target.findIndex((x) => x.id === id);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"AddTodolist\"])(target[index][myobject], todo);\n};\n\nconst desplay_items = (item_div, items_list, item_method) => {\n  item_div.innerHTML = \"\";\n  items_list.forEach((item) => {\n    item_method(item, item_div);\n  });\n};\n_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let todo = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"gettodovalues\"])();\n  newtodo = new _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n    todo.todotitle,\n    todo.tododescription,\n    todo.tododate,\n    todo.todopriority\n  );\n\n  add_to_chosen_object(projects_list, selectedproject, \"todolist\", newtodo);\n  desplay_items(\n    display_todolists,\n    projects_list[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n  );\n});\n\n_dom__WEBPACK_IMPORTED_MODULE_3__[\"createproject\"].addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let project = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectvalues\"])();\n  let newproject = Object(_createproject__WEBPACK_IMPORTED_MODULE_2__[\"Project\"])(project);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"AddTodolist\"])(projects_list, newproject);\n  desplay_items(_dom__WEBPACK_IMPORTED_MODULE_3__[\"display_projects\"], projects_list, _createproject__WEBPACK_IMPORTED_MODULE_2__[\"displayprojects\"]);\n  projectclick = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectsclick\"])();\n  addeventtoclickproject();\n});\n\ndesplay_items(_dom__WEBPACK_IMPORTED_MODULE_3__[\"display_projects\"], projects_list, _createproject__WEBPACK_IMPORTED_MODULE_2__[\"displayprojects\"]);\ndesplay_items(\n  display_todolists,\n  projects_list[selectedproject].todolist,\n  _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n);\nlet projectclick = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectsclick\"])();\n\nconst addeventtoclickproject = () => {\n  projectclick.forEach((project) => {\n    project.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      selectedproject = e.target.parentElement.id;\n      desplay_items(\n        display_todolists,\n        projects_list[selectedproject].todolist,\n        _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n      );\n    });\n  });\n};\n\naddeventtoclickproject();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });