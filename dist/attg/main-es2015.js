(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class='content-container'>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"container\">\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"content\">\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\n  <div class='left'>\n\n    <form (submit)=\"submit($event)\">\n\n      <div class=\"form-group select-city\">\n        <div class='title'>City</div>\n        <i></i>\n        <select\n          class=\"form-control\"\n          id=\"power\"\n          required\n          #t\n          (change)='changeCity(t.value)'\n        >\n          <option value='0' selected>None</option>\n          <option\n            *ngFor=\"let city of cities\"\n            [value]=\"city.id\"\n            [selected]=\"city.id == filter.data.city_id\"\n          >\n            {{city.name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group checkbox-categories\">\n        <div class='title'>Categories</div>\n        <ul *ngFor=\"let category of categories\" class=\"unstyled\">\n          <li>\n            <input\n              class=\"checkbox\"\n              type=\"checkbox\"\n              [attr.id]='\"category-\" + category.id'\n              [checked]='category.__selected'\n              (change)='changeCategory($event, category.id)'\n            />\n            <label [attr.for]='\"category-\" + category.id'>{{category.name}}</label><span class='count'>({{category.__size}})</span>\n          </li>\n        </ul>\n\n      </div>\n\n      <div class=\"form-group slider-price\">\n        <div class='title'>Price</div>\n        <ng5-slider [(value)]=\"filter.data.price_start\" [(highValue)]=\"filter.data.price_end\" [options]=\"options\"></ng5-slider>\n        <div class='values-and-submit'>\n          <div class='values'>\n            ${{filter.data.price_start}}<span class='delimeter'>-</span>${{filter.data.price_end}}\n          </div>\n          <button class='submit'>Filter</button>\n        </div>\n      </div>\n\n\n    </form>\n  </div>\n\n  <div class='right'>\n    <div *ngFor=\"let item of filtered_data\" class=\"item\">\n      <div class='first-row'>\n        <div class='overlay'></div>\n        <div class='city'>\n          {{getCityById(item.city).name}}\n        </div>\n      </div>\n      <div class='second-row'>\n        <div class='name'> {{item.name}} </div>\n        <div class='category-and-price'>\n          <div class='category'> {{getCategoryById(item.category).name}} </div>\n          <div class='price'> ${{item.price}} </div>\n        </div>\n      </div>\n    </div>\n    <div class='_placeholder item' *ngIf=\"filtered_data.length % 3 === 2\">\n      <div class='first-row'></div>\n      <div class='second-row'></div>\n    </div>\n  </div>\n  \n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_app_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/app/header/header.component */ "./src/app/components/app/header/header.component.ts");
/* harmony import */ var _components_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app/footer/footer.component */ "./src/app/components/app/footer/footer.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/app_routing/app_routing.module */ "./src/app/modules/app_routing/app_routing.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_app_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _modules_app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng5_slider__WEBPACK_IMPORTED_MODULE_5__["Ng5SliderModule"],
        ],
        providers: [],
        bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n  min-height: 100vh;\n  min-width: 1200px;\n  margin: 0px;\n  display: block;\n}\n:host .content-container {\n  margin: 48px 96px;\n  padding-bottom: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvYzpcXHdyXFxhbmd1bGFyXFxhdHRnL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogNDhweCA5NnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE4MHB4O1xyXG4gIH1cclxuXHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuY29udGVudC1jb250YWluZXIge1xuICBtYXJnaW46IDQ4cHggOTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE4MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'attg';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/components/app/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/app/footer/footer.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  bottom: 0px;\n  height: 180px;\n  width: 100%;\n  background: #dedfe0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvZm9vdGVyL2M6XFx3clxcYW5ndWxhclxcYXR0Zy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIFxyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2RlZGZlMDtcclxufSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkZWRmZTA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/app/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/app/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/app/header/header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 180px;\n  background: #dedfe0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcHAvaGVhZGVyL2M6XFx3clxcYW5ndWxhclxcYXR0Zy9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNkZWRmZTA7XHJcbn0iLCIuY29udGVudCB7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQ6ICNkZWRmZTA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/app/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/pages/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n}\n.container .left {\n  width: 288px;\n  margin-right: 72px;\n}\n.container .right {\n  min-width: 720px;\n}\n.left {\n  position: relative;\n}\n.left .title {\n  font-weight: 700;\n  font-family: arial;\n  font-size: 18px;\n  display: block;\n  margin-bottom: 28px;\n  text-transform: uppercase;\n}\n.left .form-group {\n  margin-bottom: 56px;\n}\n.left .select-city i {\n  position: absolute;\n  top: 66px;\n  right: 16px;\n  border: solid black;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n}\n.left .select-city select {\n  width: 100%;\n  padding: 12px 35px 12px 12px;\n  font-family: monospace;\n  font-size: 16px;\n  border: 1px solid #CCC;\n  /*height: 42px;*/\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n}\n.left .checkbox-categories label {\n  font-family: monospace;\n}\n.left .checkbox-categories .count {\n  font-family: monospace;\n  padding-left: 8px;\n  color: lightgray;\n}\n.left .slider-price .title {\n  margin-bottom: 0px;\n}\n.left .slider-price .values-and-submit {\n  display: flex;\n  margin-top: 20px;\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 18px;\n  justify-content: space-between;\n  align-items: center;\n}\n.left .slider-price .values-and-submit .delimeter {\n  padding: 0px 12px;\n}\n.left .slider-price .values-and-submit .submit {\n  font-family: tahoma;\n  font-weight: 700;\n  font-size: 12px;\n  color: white;\n  background: #1cb9ff;\n  text-transform: uppercase;\n  padding: 10px 0;\n  width: 90px;\n  border: 0px;\n}\n.right {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n}\n.right ._placeholder {\n  visibility: hidden;\n}\n.right .item {\n  width: 30%;\n  margin-right: 12px;\n  margin-bottom: 12px;\n  border: 1px solid lightgray;\n  max-height: 310px;\n}\n.right .item .first-row {\n  background-image: url(/assets/imgs/desert.jpg);\n  width: 100%;\n  height: 192px;\n  background-size: cover;\n  position: relative;\n}\n.right .item .first-row .overlay {\n  width: 100%;\n  height: 100%;\n}\n.right .item .first-row .city {\n  bottom: 12px;\n  left: 12px;\n  color: white;\n  font-family: monospace;\n  font-size: 13px;\n  position: absolute;\n}\n.right .item .second-row {\n  padding: 12px;\n  height: 92px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.right .item .second-row .name {\n  font-weight: 700;\n  font-family: tahoma;\n  font-size: 15px;\n  line-height: 150%;\n}\n.right .item .second-row .category-and-price {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.right .item .second-row .category-and-price .category {\n  font-family: monospace;\n  font-weight: 700;\n  color: lightgray;\n}\n.right .item .second-row .category-and-price .price {\n  font-family: monospace;\n  font-weight: 700;\n  font-size: 18px;\n}\n.right .item:hover {\n  box-shadow: 0px 6px 10px 0px lightgray;\n  cursor: pointer;\n}\n.right .item:hover .overlay {\n  background: #0d08;\n}\n.checkbox {\n  position: absolute;\n  opacity: 0;\n}\n.checkbox + label {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n}\n.checkbox + label:before {\n  content: \"\";\n  margin-right: 10px;\n  display: inline-block;\n  vertical-align: text-top;\n  width: 16px;\n  height: 16px;\n  background: white;\n  border: 1px solid lightgray;\n}\n.checkbox:hover + label:before {\n  background: #1cb9ffaa;\n}\n.checkbox:focus + label:before {\n  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);\n}\n.checkbox:checked + label:before {\n  background: white;\n  border-color: #1cb9ff;\n}\n.checkbox:disabled + label {\n  color: #b8b8b8;\n  cursor: auto;\n}\n.checkbox:disabled + label:before {\n  box-shadow: none;\n  background: #ddd;\n  border-color: #aaa;\n}\n.checkbox:checked + label:after {\n  content: \"\";\n  position: absolute;\n  left: 4px;\n  top: 8px;\n  background: #1cb9ff;\n  width: 2px;\n  height: 2px;\n  box-shadow: 2px 0 0 #1cb9ff, 4px 0 0 #1cb9ff, 4px -2px 0 #1cb9ff, 4px -4px 0 #1cb9ff, 4px -6px 0 #1cb9ff, 4px -8px 0 #1cb9ff;\n  transform: rotate(45deg);\n}\n.unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\nli {\n  margin: 20px 0;\n}\n::ng-deep .slider-price {\n  /*background: red;*/\n}\n::ng-deep .slider-price .ng5-slider-bubble {\n  display: none !important;\n}\n::ng-deep .slider-price .ng5-slider .ng5-slider-pointer {\n  width: 16px;\n  height: 16px;\n  top: -7px;\n}\n::ng-deep .slider-price .ng5-slider .ng5-slider-pointer:after {\n  width: 12px;\n  height: 12px;\n  top: 2px;\n  left: 2px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2M6XFx3clxcYW5ndWxhclxcYXR0Zy9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBREdFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUU7RUFDRSxtQkFBQTtBQ0ZKO0FETUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDSk47QURNSTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSx1QkFBQTtBQ0pOO0FEU0k7RUFDRSxzQkFBQTtBQ1BOO0FEU0k7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNQTjtBRFlJO0VBQ0Usa0JBQUE7QUNWTjtBRFlJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVk47QURZTTtFQUNFLGlCQUFBO0FDVlI7QURhTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNYUjtBRGtCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDZkY7QURnQkU7RUFDRSxrQkFBQTtBQ2RKO0FEZ0JFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDZEo7QURlSTtFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDYk47QURjTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDWlI7QURjTTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWlI7QURlSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNiTjtBRGNNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1pSO0FEY007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEYVE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYVjtBRGFRO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNYVjtBRGVJO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0FDYk47QURjTTtFQUNFLGlCQUFBO0FDWlI7QURtQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNoQkY7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDaEJKO0FEbUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ2pCSjtBRG9CRTtFQUNFLHFCQUFBO0FDbEJKO0FEcUJFO0VBQ0UseUNBQUE7QUNuQko7QURzQkU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FDcEJKO0FEdUJFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNyQko7QUR3QkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN0Qko7QUR5QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0SEFDRTtFQU1GLHdCQUFBO0FDN0JKO0FEaUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQzlCRjtBRGlDQTtFQUNFLGNBQUE7QUM5QkY7QURrQ0U7RUFDRSxtQkFBQTtBQy9CSjtBRGdDSTtFQUNFLHdCQUFBO0FDOUJOO0FEa0NNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDaENSO0FEaUNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDL0JWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzJweDtcclxuXHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgbWluLXdpZHRoOiA3MjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC1jaXR5IHtcclxuICAgIGkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNjZweDtcclxuICAgICAgcmlnaHQ6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgYmxhY2s7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTJweCAzNXB4IDEycHggMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xyXG4gICAgICAvKmhlaWdodDogNDJweDsqL1xyXG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1jYXRlZ29yaWVzIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIH1cclxuICAgIC5jb3VudCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNsaWRlci1wcmljZSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudmFsdWVzLWFuZC1zdWJtaXQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIC5kZWxpbWV0ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VibWl0IHtcclxuICAgICAgICBmb250LWZhbWlseTogdGFob21hO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWNiOWZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLl9wbGFjZWhvbGRlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWF4LWhlaWdodDogMzEwcHg7XHJcbiAgICAuZmlyc3Qtcm93IHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9kZXNlcnQuanBnKTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTkycHg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuY2l0eSB7XHJcbiAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlY29uZC1yb3cge1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBoZWlnaHQ6ICA5MnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB0YWhvbWE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXRlZ29yeS1hbmQtcHJpY2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggbGlnaHRncmF5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMGQwODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcblxyXG4gICYgKyBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgJiArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxY2I5ZmZhYTtcclxuICB9XHJcbiAgXHJcbiAgJjpmb2N1cyArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcblxyXG4gICY6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzFjYjlmZjtcclxuICB9XHJcbiAgXHJcbiAgJjpkaXNhYmxlZCArIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjYjhiOGI4O1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcclxuICB9XHJcblxyXG4gICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWNiOWZmO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYm94LXNoYWRvdzogXHJcbiAgICAgIDJweCAwIDAgIzFjYjlmZixcclxuICAgICAgNHB4IDAgMCAjMWNiOWZmLFxyXG4gICAgICA0cHggLTJweCAwICMxY2I5ZmYsXHJcbiAgICAgIDRweCAtNHB4IDAgIzFjYjlmZixcclxuICAgICAgNHB4IC02cHggMCAjMWNiOWZmLFxyXG4gICAgICA0cHggLThweCAwICMxY2I5ZmY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4udW5zdHlsZWQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5zbGlkZXItcHJpY2Uge1xyXG4gICAgLypiYWNrZ3JvdW5kOiByZWQ7Ki9cclxuICAgIC5uZzUtc2xpZGVyLWJ1YmJsZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmc1LXNsaWRlciB7XHJcbiAgICAgIC5uZzUtc2xpZGVyLXBvaW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgLmxlZnQge1xuICB3aWR0aDogMjg4cHg7XG4gIG1hcmdpbi1yaWdodDogNzJweDtcbn1cbi5jb250YWluZXIgLnJpZ2h0IHtcbiAgbWluLXdpZHRoOiA3MjBweDtcbn1cblxuLmxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGVmdCAudGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubGVmdCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDU2cHg7XG59XG4ubGVmdCAuc2VsZWN0LWNpdHkgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NnB4O1xuICByaWdodDogMTZweDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5sZWZ0IC5zZWxlY3QtY2l0eSBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAzNXB4IDEycHggMTJweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICAvKmhlaWdodDogNDJweDsqL1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5sZWZ0IC5jaGVja2JveC1jYXRlZ29yaWVzIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi5sZWZ0IC5jaGVja2JveC1jYXRlZ29yaWVzIC5jb3VudCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLmxlZnQgLnNsaWRlci1wcmljZSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubGVmdCAuc2xpZGVyLXByaWNlIC52YWx1ZXMtYW5kLXN1Ym1pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxlZnQgLnNsaWRlci1wcmljZSAudmFsdWVzLWFuZC1zdWJtaXQgLmRlbGltZXRlciB7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xufVxuLmxlZnQgLnNsaWRlci1wcmljZSAudmFsdWVzLWFuZC1zdWJtaXQgLnN1Ym1pdCB7XG4gIGZvbnQtZmFtaWx5OiB0YWhvbWE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMWNiOWZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJpZ2h0IC5fcGxhY2Vob2xkZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucmlnaHQgLml0ZW0ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWF4LWhlaWdodDogMzEwcHg7XG59XG4ucmlnaHQgLml0ZW0gLmZpcnN0LXJvdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvZGVzZXJ0LmpwZyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE5MnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmlnaHQgLml0ZW0gLmZpcnN0LXJvdyAub3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucmlnaHQgLml0ZW0gLmZpcnN0LXJvdyAuY2l0eSB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yaWdodCAuaXRlbSAuc2Vjb25kLXJvdyB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGhlaWdodDogOTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnJpZ2h0IC5pdGVtIC5zZWNvbmQtcm93IC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6IHRhaG9tYTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbn1cbi5yaWdodCAuaXRlbSAuc2Vjb25kLXJvdyAuY2F0ZWdvcnktYW5kLXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJpZ2h0IC5pdGVtIC5zZWNvbmQtcm93IC5jYXRlZ29yeS1hbmQtcHJpY2UgLmNhdGVnb3J5IHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5yaWdodCAuaXRlbSAuc2Vjb25kLXJvdyAuY2F0ZWdvcnktYW5kLXByaWNlIC5wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yaWdodCAuaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggbGlnaHRncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmlnaHQgLml0ZW06aG92ZXIgLm92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiAjMGQwODtcbn1cblxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuLmNoZWNrYm94ICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbi5jaGVja2JveCArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY2hlY2tib3g6aG92ZXIgKyBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMWNiOWZmYWE7XG59XG4uY2hlY2tib3g6Zm9jdXMgKyBsYWJlbDpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5jaGVja2JveDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogIzFjYjlmZjtcbn1cbi5jaGVja2JveDpkaXNhYmxlZCArIGxhYmVsIHtcbiAgY29sb3I6ICNiOGI4Yjg7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5jaGVja2JveDpkaXNhYmxlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGJvcmRlci1jb2xvcjogI2FhYTtcbn1cbi5jaGVja2JveDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxY2I5ZmY7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMnB4O1xuICBib3gtc2hhZG93OiAycHggMCAwICMxY2I5ZmYsIDRweCAwIDAgIzFjYjlmZiwgNHB4IC0ycHggMCAjMWNiOWZmLCA0cHggLTRweCAwICMxY2I5ZmYsIDRweCAtNnB4IDAgIzFjYjlmZiwgNHB4IC04cHggMCAjMWNiOWZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi51bnN0eWxlZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5saSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG46Om5nLWRlZXAgLnNsaWRlci1wcmljZSB7XG4gIC8qYmFja2dyb3VuZDogcmVkOyovXG59XG46Om5nLWRlZXAgLnNsaWRlci1wcmljZSAubmc1LXNsaWRlci1idWJibGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNsaWRlci1wcmljZSAubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdG9wOiAtN3B4O1xufVxuOjpuZy1kZWVwIC5zbGlkZXItcHJpY2UgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItcG9pbnRlcjphZnRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var services_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/filter.service */ "./src/app/services/filter.service.ts");




let HomeComponent = class HomeComponent {
    constructor(API, filter) {
        this.API = API;
        this.filter = filter;
        this.filtered_data = [];
        this.options = {
            floor: 0,
            ceil: 300,
        };
    }
    ngOnInit() {
        this.filter.setFromQuery();
        this.setCategories();
        this.setCities();
        this.setData();
    }
    setCategories() {
        // this.CS.getCategories().subscribe(cats => this.categories = cats)
        this.API.categories().subscribe(data => {
            console.log(data);
            this.categories = data;
            this.norm_categories = this._normalizeById(this.categories);
            this.filter.data.category_ids.forEach(id => this.norm_categories[id].__selected = true);
        });
    }
    setCities() {
        this.API.cities().subscribe(data => {
            this.cities = data;
            this.norm_cities = this._normalizeById(this.cities);
        });
    }
    setData() {
        this.API.data().subscribe(data => {
            console.log(data);
            this.data = data;
            this.filtered_data = this.data;
            this.calculateSizeCaterories();
            this.doFilter();
        });
    }
    submit(e) {
        this.doFilter();
        e.preventDefault();
        return false;
    }
    getCategoryById(id) {
        return this.categories.find((category) => id === category.id);
    }
    getCityById(id) {
        return this.cities.find((city) => id === city.id);
    }
    calculateSizeCaterories() {
        this.categories.forEach((category) => category.__size = 0);
        this.data.forEach((item) => {
            let category = this.norm_categories[item.category];
            if (!category)
                return;
            category.__size = category.__size + 1;
        });
    }
    doFilter() {
        this.filtered_data = this.filter.get(this.data);
    }
    changeCategory(event_or_bool, id) {
        const result = (typeof event == 'boolean') ? event_or_bool : event_or_bool.target.checked;
        this.norm_categories[id].__selected = result;
        if (result)
            this.filter.data.category_ids.push(id);
        else
            this.filter.data.category_ids = this.filter.data.category_ids.filter((category_id) => category_id != id);
    }
    changeCity(id) {
        this.filter.data.city_id = +id;
    }
    _normalizeById(array) {
        let result = {};
        if (array)
            array.forEach(item => result[item.id] = item);
        return result;
    }
};
HomeComponent.ctorParameters = () => [
    { type: services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/app_routing/app_routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/app_routing/app_routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");




// import { OnasComponent }        from 'components/pages/onas/onas.component'
// import { FaqComponent }         from 'components/pages/faq/faq.component';
// import { TarifComponent }       from 'components/pages/tarif/tarif.component';
// import { BezopasnostComponent } from 'components/pages/bezopasnost/bezopasnost.component';
// import { LegalComponent }       from 'components/pages/legal/legal.component';
// import { CatComponent }         from 'components/cats/cat.component';
// import { Page404Component }     from 'components/pages/page404/page404.component';
const routes = [
    { path: '', component: components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        // this.get().subscribe(data => {console.log(data); });
    }
    categories() {
        return this.http.get("./assets/mocks/api/category.json");
    }
    cities() {
        return this.http.get("./assets/mocks/api/city.json");
    }
    data() {
        return this.http.get("./assets/mocks/api/data.json");
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FilterService = class FilterService {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.data = {
            city_id: 0,
            category_ids: [],
            price_start: 0,
            price_end: 300,
        };
    }
    get(data) {
        console.log(this.data);
        let filtered_data = [];
        data.forEach(item => {
            if (this._isCity(item)
                && this._isCategories(item)
                && this._isPrice(item)) {
                filtered_data.push(item);
            }
        });
        this._setQuery(this.data);
        console.log(filtered_data);
        return filtered_data;
    }
    _setQuery(params) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: params,
        });
    }
    setFromQuery() {
        this._setFromQuery('price_end');
        this._setFromQuery('price_start');
        this._setFromQuery('category_ids');
        this._setFromQuery('city_id');
    }
    _setFromQuery(name) {
        const result = this.route.snapshot.queryParams[name];
        if (!result)
            return;
        if (Array.isArray(this.data[name]))
            this.data[name] = Array.isArray(result) ? result.map(item => +item) : [+result];
        else
            this.data[name] = +result;
    }
    _isPrice(item) {
        return this.data.price_start <= item.price && this.data.price_end >= item.price;
    }
    _isCity(item) {
        return this.data.city_id ? this.data.city_id == item.city : true;
    }
    _isCategories(item) {
        if (this.data.category_ids.length <= 0)
            return true;
        if (!this.data.category_ids.some(value => !!value))
            return true;
        return this.data.category_ids.some(id => id == item.category);
    }
};
FilterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilterService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wr\angular\attg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map