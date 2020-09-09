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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todolist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displaytodolists\", function() { return displaytodolists; });\nclass Todolist {\n  constructor(title, description, dueDate, priority, id = null) {\n    [this.title, this.description, this.dueDate, this.priority, this.id] = [\n      title,\n      description,\n      dueDate,\n      priority,\n      id,\n    ];\n  }\n\n  priorityUp() {\n    if (this.priority < 4) {\n      priority += 1;\n    }\n  }\n  priorityDown() {\n    if (this.priority > 0) {\n      priority = priority - 1;\n    }\n  }\n}\nconst getprio = (num) => {\n  const priobect = {\n    1: \"low\",\n    2: \"medium\",\n    3: \"High\",\n    4: \"Urgent\",\n  };\n  return priobect[num];\n};\n\nconst displaytodolists = (\n  todolist,\n  display_todolists,\n  deletemethod,\n  edittodomethod,\n  showdetails\n) => {\n  const todolistContainer = document.createElement(\"div\");\n  todolistContainer.id = todolist.id;\n  todolistContainer.className = \"todolist_container\";\n  todolistContainer.classList.add(getprio(todolist.priority));\n  display_todolists.appendChild(todolistContainer);\n\n  const todolisttitle = document.createElement(\"h2\");\n  todolisttitle.className = \"todolist_title\";\n  todolisttitle.innerHTML = todolist.title;\n  todolisttitle.onclick = showdetails;\n  todolistContainer.appendChild(todolisttitle);\n\n  const duedate = document.createElement(\"p\");\n  duedate.className = \"todolist_date\";\n  duedate.innerHTML = todolist.dueDate;\n  todolistContainer.appendChild(duedate);\n\n  const todoconf = document.createElement(\"div\");\n  todoconf.className = \"todolist_todoconf\";\n  todolistContainer.appendChild(todoconf);\n\n  const edittodo = document.createElement(\"button\");\n  edittodo.className = \"todolist_edittodo\";\n  edittodo.innerHTML = \"Edit\";\n  edittodo.value = todolist.id;\n  edittodo.onclick = edittodomethod;\n  todoconf.appendChild(edittodo);\n\n  const deletetodo = document.createElement(\"button\");\n  deletetodo.className = \"todolist_deletetodo\";\n  deletetodo.innerHTML = \"delete\";\n  deletetodo.value = todolist.id;\n  deletetodo.onclick = deletemethod;\n  todoconf.appendChild(deletetodo);\n};\n\n\n//# sourceURL=webpack:///./src/createtodolist.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: addproject, addtodo, closes, createtodo, gettodovalues, getprojectvalues, createproject, display_projects, project_container, getprojectsclick, display_todolists, getdeletebutton, posttodovalues, todoform, tododetails, getdetails, details, projectform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addproject\", function() { return addproject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addtodo\", function() { return addtodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closes\", function() { return closes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createtodo\", function() { return createtodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gettodovalues\", function() { return gettodovalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getprojectvalues\", function() { return getprojectvalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createproject\", function() { return createproject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display_projects\", function() { return display_projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project_container\", function() { return project_container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getprojectsclick\", function() { return getprojectsclick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display_todolists\", function() { return display_todolists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getdeletebutton\", function() { return getdeletebutton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"posttodovalues\", function() { return posttodovalues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoform\", function() { return todoform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tododetails\", function() { return tododetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getdetails\", function() { return getdetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"details\", function() { return details; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectform\", function() { return projectform; });\nconst addproject = document.getElementById(\"show_project_form\");\nconst projectform = document.getElementById(\"project_form\");\nconst addtodo = document.getElementById(\"show_todo_form\");\nconst todoform = document.getElementById(\"todo_form\");\nconst closes = document.querySelectorAll(\".close\");\nconst createtodo = document.getElementById(\"create_todo\");\nconst createproject = document.getElementById(\"create_project\");\nconst display_projects = document.getElementById(\"display_projects\");\nconst project_container = document.querySelectorAll(\".project_name\");\nconst display_todolists = document.getElementById(\"display_todolists\");\nconst tododetails = document.getElementById(\"tododetails\");\nconst details = document.querySelector(\".details\");\naddproject.addEventListener(\"click\", () => {\n  projectform.className = \"project_form\";\n});\naddtodo.addEventListener(\"click\", () => {\n  todoform.className = \"todo_form\";\n  create_todo.className = \"createtodo_buttons\";\n});\ncloses.forEach((close) => {\n  close.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    todoform.className = \"none\";\n    projectform.className = \"none\";\n    tododetails.className = \"none\";\n  });\n});\nconst accestodovalues = () => {\n  const todotitle = document.getElementById(\"title\");\n  const tododescription = document.getElementById(\"description\");\n  const todopriority = document.getElementById(\"priority\");\n  const tododate = document.getElementById(\"date\");\n  return { todotitle, tododescription, todopriority, tododate };\n};\nconst getdetails = () => {\n  const tododetails = document.querySelectorAll(\".todolist_title\");\n  return tododetails;\n};\nconst gettodovalues = () => {\n  let val = accestodovalues();\n  let [todotitle, tododescription, todopriority, tododate] = [\n    val.todotitle.value,\n    val.tododescription.value,\n    val.todopriority.value,\n    val.tododate.value,\n  ];\n  return { todotitle, tododescription, todopriority, tododate };\n};\n\nconst posttodovalues = (title, desc, prio, date) => {\n  let val = accestodovalues();\n\n  val.todotitle.value = title;\n  val.tododescription.value = desc;\n  val.todopriority.value = prio;\n  val.tododate.value = date;\n  createtodo.value = \"save\";\n  create_todo.className = \"edittodo_buttons\";\n};\nconst getprojectvalues = () => {\n  const projectname = document.getElementById(\"name\").value;\n  return projectname;\n};\nconst getprojectsclick = () => {\n  const projects_list_click = document.querySelectorAll(\".project_name\");\n  return projects_list_click;\n};\n\nconst getdeletebutton = () => {\n  const todolist_deletetodo = document.querySelector(\".todolist_deletetodo\");\n  return todolist_deletetodo;\n};\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addremove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addremove */ \"./src/addremove.js\");\n/* harmony import */ var _createtodolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtodolist */ \"./src/createtodolist.js\");\n/* harmony import */ var _createproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createproject */ \"./src/createproject.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n\n\nconst getlocalstorage = () => {\n  let projects = [];\n  if (localStorage.getItem(\"projects_list\")) {\n    projects = JSON.parse(localStorage.getItem(\"projects_list\"));\n  } else {\n    projects = [{ name: \"Default\", todolist: [], id: 0 }];\n  }\n  return projects;\n};\nconst projects_list = getlocalstorage();\nlet selectedtodo = null;\nlet selectedproject = 0;\nconst adddeletetotodos = (e) => {\n  let idx = parseInt(e.target.value);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"removeTodolist\"])(projects_list[selectedproject].todolist, idx);\n  localStorage.setItem(\"projects_list\", JSON.stringify(projects_list));\n  desplay_items(\n    display_todolists,\n    projects_list[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n  );\n};\nconst showdetails = (e) => {\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"tododetails\"].className = \"todo_details\";\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"details\"].classList.add(e.target.parentElement.classList[1]);\n};\nconst addedittotodos = (e) => {\n  let idx = parseInt(e.target.value);\n  const index = projects_list[selectedproject].todolist.findIndex(\n    (x) => x.id === idx\n  );\n  selectedtodo = index;\n  let editedtodo = projects_list[selectedproject].todolist[index];\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"todoform\"].className = \"todo_form\";\n  Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"posttodovalues\"])(editedtodo.title, editedtodo.description);\n  desplay_items(\n    display_todolists,\n    projects_list[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n  );\n};\n\nconst add_to_chosen_object = (target, id, myobject, todo) => {\n  const index = target.findIndex((x) => x.id === id);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"AddTodolist\"])(target[index][myobject], todo);\n};\n\nconst desplay_items = (item_div, items_list, item_method) => {\n  item_div.innerHTML = \"\";\n  items_list.forEach((item) => {\n    item_method(item, item_div, adddeletetotodos, addedittotodos, showdetails);\n  });\n};\n\n_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let todo = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"gettodovalues\"])();\n  if (_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].className === \"createtodo_buttons\") {\n    let newtodo = new _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      todo.todotitle,\n      todo.tododescription,\n      todo.tododate,\n      todo.todopriority\n    );\n    add_to_chosen_object(projects_list, selectedproject, \"todolist\", newtodo);\n    localStorage.setItem(\"projects_list\", JSON.stringify(projects_list));\n    console.log(JSON.parse(localStorage.getItem(\"projects_list\")));\n  } else if (_dom__WEBPACK_IMPORTED_MODULE_3__[\"createtodo\"].className === \"edittodo_buttons\") {\n    let editedtodo = new _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n      todo.todotitle,\n      todo.tododescription,\n      todo.tododate,\n      todo.todopriority,\n      selectedtodo\n    );\n    projects_list[selectedproject].todolist[selectedtodo] = editedtodo;\n    localStorage.setItem(\"projects_list\", JSON.stringify(projects_list));\n  }\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"todoform\"].className = \"none\";\n  desplay_items(\n    display_todolists,\n    projects_list[selectedproject].todolist,\n    _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n  );\n});\n\n_dom__WEBPACK_IMPORTED_MODULE_3__[\"createproject\"].addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let project = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectvalues\"])();\n  let newproject = Object(_createproject__WEBPACK_IMPORTED_MODULE_2__[\"Project\"])(project);\n  Object(_addremove__WEBPACK_IMPORTED_MODULE_0__[\"AddTodolist\"])(projects_list, newproject);\n  desplay_items(_dom__WEBPACK_IMPORTED_MODULE_3__[\"display_projects\"], projects_list, _createproject__WEBPACK_IMPORTED_MODULE_2__[\"displayprojects\"]);\n  projectclick = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectsclick\"])();\n  addeventtoclickproject();\n  localStorage.setItem(\"projects_list\", JSON.stringify(projects_list));\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"projectform\"].className = \"none\";\n});\n\ndesplay_items(_dom__WEBPACK_IMPORTED_MODULE_3__[\"display_projects\"], projects_list, _createproject__WEBPACK_IMPORTED_MODULE_2__[\"displayprojects\"]);\ndesplay_items(\n  display_todolists,\n  projects_list[selectedproject].todolist,\n  _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n);\n\nlet projectclick = Object(_dom__WEBPACK_IMPORTED_MODULE_3__[\"getprojectsclick\"])();\n\nconst addeventtoclickproject = () => {\n  projectclick.forEach((project) => {\n    project.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      selectedproject = parseInt(e.target.parentElement.id);\n      desplay_items(\n        display_todolists,\n        projects_list[selectedproject].todolist,\n        _createtodolist__WEBPACK_IMPORTED_MODULE_1__[\"displaytodolists\"]\n      );\n    });\n  });\n};\n\naddeventtoclickproject();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });