(self["webpackChunkIRaoCor"] = self["webpackChunkIRaoCor"] || []).push([["src_app_Page_geo-endereco_geo-endereco_module_ts"],{

/***/ 8413:
/*!******************************************************************!*\
  !*** ./src/app/Page/geo-endereco/geo-endereco-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoEnderecoPageRoutingModule": () => (/* binding */ GeoEnderecoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _geo_endereco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo-endereco.page */ 1235);




const routes = [
    {
        path: '',
        component: _geo_endereco_page__WEBPACK_IMPORTED_MODULE_0__.GeoEnderecoPage
    }
];
let GeoEnderecoPageRoutingModule = class GeoEnderecoPageRoutingModule {
};
GeoEnderecoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeoEnderecoPageRoutingModule);



/***/ }),

/***/ 6523:
/*!**********************************************************!*\
  !*** ./src/app/Page/geo-endereco/geo-endereco.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoEnderecoPageModule": () => (/* binding */ GeoEnderecoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _geo_endereco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo-endereco-routing.module */ 8413);
/* harmony import */ var _geo_endereco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geo-endereco.page */ 1235);







let GeoEnderecoPageModule = class GeoEnderecoPageModule {
};
GeoEnderecoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _geo_endereco_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeoEnderecoPageRoutingModule
        ],
        declarations: [_geo_endereco_page__WEBPACK_IMPORTED_MODULE_1__.GeoEnderecoPage]
    })
], GeoEnderecoPageModule);



/***/ }),

/***/ 1235:
/*!********************************************************!*\
  !*** ./src/app/Page/geo-endereco/geo-endereco.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoEnderecoPage": () => (/* binding */ GeoEnderecoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_geo_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./geo-endereco.page.html */ 8915);
/* harmony import */ var _geo_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geo-endereco.page.scss */ 7035);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let GeoEnderecoPage = class GeoEnderecoPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    mapa() {
        this.navCtrl.navigateForward('mapa-endereco');
    }
    endereco() {
        this.navCtrl.navigateForward('endereco');
    }
};
GeoEnderecoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
GeoEnderecoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-geo-endereco',
        template: _raw_loader_geo_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_geo_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GeoEnderecoPage);



/***/ }),

/***/ 7035:
/*!**********************************************************!*\
  !*** ./src/app/Page/geo-endereco/geo-endereco.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  color: #bd0000;\n  font-weight: 800;\n  left: -20px;\n}\n\nion-toolbar {\n  border-bottom: 1px #bd0000 solid;\n}\n\nion-back-button {\n  color: #bd0000;\n}\n\n.container-saudacao {\n  width: 100%;\n  text-align: center;\n  padding-top: 100px;\n  padding-inline: 20px;\n}\n\n.saudacao {\n  font-family: \"Gotham Bold\";\n  font-size: 12px;\n  align-items: center;\n}\n\n.mensagem {\n  font-family: \"Gotham\";\n  font-size: 12px;\n  align-items: center;\n}\n\n.container-botao-localizacao {\n  width: 100%;\n  text-align: center;\n  padding-top: 30px;\n}\n\n.container-botao-endereco {\n  width: 100%;\n  text-align: center;\n  padding-top: 20px;\n}\n\n.botao-localizacao {\n  width: 320px;\n  height: 50px !important;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.botao-endereco {\n  width: 320px;\n  height: 50px !important;\n  border: #bd0000 1px solid;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.conteiner-separador {\n  padding-top: 30px;\n  text-align: center;\n}\n\n.separador {\n  font-family: \"Gotham Bold\";\n}\n\n.footer {\n  position: absolute;\n  width: 539px;\n  height: 705.73px;\n  left: -82px;\n  top: 428px;\n  background: #000000;\n  border: 10px solid #DB0000;\n  border-radius: 269.5px 269.5px 0px 0px;\n}\n\n.logo {\n  position: absolute;\n  left: 165px;\n  top: 30px;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlby1lbmRlcmVjby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUVFLFlBQUE7RUFDQSx1QkFBQTtFQUdBLGVBQUE7RUFDQSxpQkFBQTtFQUdBLGtCQUFBO0FBRkY7O0FBS0E7RUFFRSxZQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUdBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUVBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSwwQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQ0FBQTtBQU5GOztBQVVFO0VBQ0Usa0JBQUE7RUFJQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFWSiIsImZpbGUiOiJnZW8tZW5kZXJlY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIGNvbG9yOiNiZDAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZWZ0OiAtMjBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNiZDAwMDAgc29saWQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBjb2xvcjojYmQwMDAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXNhdWRhY2Fve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XHJcbn1cclxuXHJcbi5zYXVkYWNhb3tcclxuICBmb250LWZhbWlseTogJ0dvdGhhbSBCb2xkJztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnNhZ2Vte1xyXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1ib3Rhby1sb2NhbGl6YWNhb3tcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm90YW8tZW5kZXJlY297XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYm90YW8tbG9jYWxpemFjYW97XHJcblxyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAvL2JhY2tncm91bmQ6ICNiZDAwMDA7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAjYmQwMDAwIDFweCBzb2xpZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYm90YW8tZW5kZXJlY297XHJcblxyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAvL2JhY2tncm91bmQ6ICNiZDAwMDA7XHJcbiAgYm9yZGVyOiAjYmQwMDAwIDFweCBzb2xpZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY29udGVpbmVyLXNlcGFyYWRvcntcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlcGFyYWRvcntcclxuICBmb250LWZhbWlseTogJ0dvdGhhbSBCb2xkJztcclxufVxyXG5cclxuLmZvb3RlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUzOXB4O1xyXG4gIGhlaWdodDogNzA1LjczcHg7XHJcbiAgbGVmdDogLTgycHg7XHJcbiAgdG9wOiA0MjhweDtcclxuXHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBib3JkZXI6IDEwcHggc29saWQgI0RCMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiAyNjkuNXB4ICAyNjkuNXB4ICAwcHggMHB4O1xyXG4gIC8vIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIC0xLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gd2lkdGg6IDE3NnB4O1xyXG4gICAgLy8gaGVpZ2h0OiA4OHB4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAxNjVweDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ 8915:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Page/geo-endereco/geo-endereco.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      text=\"\"\n      icon=\"arrow-back\"\n      color=\"danger\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">LOCALIZAÇÃO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"container-saudacao\">\n    <p class=\"saudacao\">Que legal você chegou até aqui!</p>\n      <p class=\"mensagem\">Escolha a melhor forma de te encontrarmos.</p>\n    </div>\n\n    <div class=\"container-botao-localizacao\">\n      <ion-button color=\"danger\" class=\"botao-localizacao\" (click)=\"mapa()\">\n        <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\n        USAR MINHA LOCAZAÇÃO\n      </ion-button>\n    </div>\n\n    <div class=\"conteiner-separador\">\n      <p class=\"separador\">ou</p>\n    </div>\n\n    <div class=\"container-botao-endereco\">\n      <ion-button color=\"danger\" class=\"botao-endereco\" fill=\"clear\" (click)=\"endereco()\">\n        <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\n        CADASTRAR MEU ENDEREÇO\n      </ion-button>\n    </div>\n\n\n\n    <div class=\"footer\">\n      <div class=\"logo\">\n        <img src=\"assets/img/logo_menor.png\">\n      </div>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Page_geo-endereco_geo-endereco_module_ts.js.map