(self["webpackChunkIRaoCor"] = self["webpackChunkIRaoCor"] || []).push([["src_app_Page_localizacao_localizacao-routing_module_ts-src_app_Page_localizacao_localizacao_m-5fd1f4"],{

/***/ 2740:
/*!****************************************************************!*\
  !*** ./src/app/Page/localizacao/localizacao-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizacaoPageRoutingModule": () => (/* binding */ LocalizacaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _localizacao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localizacao.page */ 2692);




const routes = [
    {
        path: '',
        component: _localizacao_page__WEBPACK_IMPORTED_MODULE_0__.LocalizacaoPage
    },
    {
        path: 'localizacao',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../Page/localizacao/localizacao.module */ 5713)).then(m => m.LocalizacaoPageModule)
    }
];
let LocalizacaoPageRoutingModule = class LocalizacaoPageRoutingModule {
};
LocalizacaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocalizacaoPageRoutingModule);



/***/ }),

/***/ 5713:
/*!********************************************************!*\
  !*** ./src/app/Page/localizacao/localizacao.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizacaoPageModule": () => (/* binding */ LocalizacaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _localizacao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localizacao-routing.module */ 2740);
/* harmony import */ var _localizacao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localizacao.page */ 2692);







let LocalizacaoPageModule = class LocalizacaoPageModule {
};
LocalizacaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _localizacao_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocalizacaoPageRoutingModule
        ],
        declarations: [_localizacao_page__WEBPACK_IMPORTED_MODULE_1__.LocalizacaoPage]
    })
], LocalizacaoPageModule);



/***/ }),

/***/ 2692:
/*!******************************************************!*\
  !*** ./src/app/Page/localizacao/localizacao.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizacaoPage": () => (/* binding */ LocalizacaoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_localizacao_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./localizacao.page.html */ 3301);
/* harmony import */ var _localizacao_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localizacao.page.scss */ 4674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LocalizacaoPage = class LocalizacaoPage {
    constructor() { }
    ngOnInit() {
    }
};
LocalizacaoPage.ctorParameters = () => [];
LocalizacaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-localizacao',
        template: _raw_loader_localizacao_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_localizacao_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocalizacaoPage);



/***/ }),

/***/ 4674:
/*!********************************************************!*\
  !*** ./src/app/Page/localizacao/localizacao.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbGl6YWNhby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3301:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Page/localizacao/localizacao.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Localizacao</ion-title>\n    <ion-back-button\n    text=\"\"\n    icon=\"arrow-back\"\n    color=\"danger\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Page_localizacao_localizacao-routing_module_ts-src_app_Page_localizacao_localizacao_m-5fd1f4.js.map