(self["webpackChunkIRaoCor"] = self["webpackChunkIRaoCor"] || []).push([["src_app_Page_login_login_module_ts"],{

/***/ 8636:
/*!****************************************************!*\
  !*** ./src/app/Page/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 436);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 6667:
/*!********************************************!*\
  !*** ./src/app/Page/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 8636);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 436);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        exports: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 436:
/*!******************************************!*\
  !*** ./src/app/Page/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6839);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 5967);
/* harmony import */ var _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Auth/auth.service */ 9558);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _model_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/validators */ 1213);








//  import { SplashScreenPage } from './../splash-screen/splash-screen.page';
let LoginPage = class LoginPage {
    constructor(navCtrl, fBuilder, auth) {
        this.navCtrl = navCtrl;
        this.fBuilder = fBuilder;
        this.auth = auth;
        this.buttonIcon = 'chevron-back-outline';
    }
    ngOnInit() {
        this.createForm();
        //this.auth.getUser();
    }
    createForm() {
        this.fGroup = this.fBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_model_validators__WEBPACK_IMPORTED_MODULE_3__.regexValidators.email),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ])
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_model_validators__WEBPACK_IMPORTED_MODULE_3__.regexValidators.password),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ])
            ],
        });
    }
    login() {
        this.auth.login(this.fGroup.value)
            .subscribe(data => {
            console.log('Response Login: ' + JSON.stringify(data));
            if (data) {
                this.navCtrl.navigateRoot('home');
            }
            else {
                this.navCtrl.navigateRoot('home');
            }
        });
    }
    redorect() {
    }
    loading() {
        this.navCtrl.navigateForward('usuario');
    }
    cadastro() {
        this.navCtrl.navigateForward('cadastro-usuario');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _Services_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1213:
/*!*********************************!*\
  !*** ./src/model/validators.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regexValidators": () => (/* binding */ regexValidators)
/* harmony export */ });
// O validador de e-mail Angular aceita um e-mail como "rob@example", talvez porque "rob@localhost" possa ser válido.
// O regex pureEmail não aceita "ryan@example" como um endereço de e-mail válido, o que eu acho que é uma coisa boa.
// See: EMAIL_REGEXP from https://github.com/angular/angular.js/blob/ffb6b2fb56d9ffcb051284965dd538629ea9687a/src/ng/directive/input.js#L16
const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PURE_EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
// As senhas devem ter pelo menos 6 caracteres e devem conter pelo menos  um número, uma letra e um caractere especial.
// As senhas devem ter pelo menos 6 caracteres, letras maiusculas e minusculas.
// const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
const PASSWORD_REGEXP = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const CPF_REGEXP = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const CNPJ_REGEXP = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const RG_REGEXP = /(\d{1,2})(\d{3})(\d{3})(\d{1})$/;
// As senhas devem ter pelo menos 8 caracteres e devem conter um número, um caractere e um caractere especial.
const AMBOS_REGEXP = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
const AMBOS_REGEXPDOC = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
//Telefones
const TELEFONE_REGEX = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
//Telefones
const CEP_REGEX = /^\d{5}-\d{3}$/;
const regexValidators = {
    email: PURE_EMAIL_REGEXP,
    password: PASSWORD_REGEXP,
    cpf: CPF_REGEXP,
    cnpj: CNPJ_REGEXP,
    rg: RG_REGEXP,
    ambos: AMBOS_REGEXP,
    ambosDoc: AMBOS_REGEXPDOC,
    telefone: TELEFONE_REGEX,
    cep: CEP_REGEX
};


/***/ }),

/***/ 5967:
/*!********************************************!*\
  !*** ./src/app/Page/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex-center {\n  position: absolute;\n  width: 536px;\n  height: 705.73px;\n  left: -82px;\n  top: -70px;\n  background: #000000;\n  border: 10px solid #DB0000;\n  border-radius: 0px 0px 269.5px 269.5px;\n  font-family: \"Gotham\";\n}\n\n.logo {\n  position: absolute;\n  width: 176px;\n  height: 88px;\n  left: 165px;\n  top: 80px;\n}\n\n.card-content {\n  position: absolute;\n  width: 316px !important;\n  height: 470px;\n  left: -70px;\n  top: 187px;\n  background: #FFFFFF;\n  mix-blend-mode: normal;\n  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 48px;\n  text-align: center;\n  padding: 20px;\n  align-items: center;\n}\n\n.boas-vindas {\n  font-family: \"Gotham Bold\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: 900 !important;\n  justify-content: center;\n  padding-top: 30px !important;\n}\n\n.titulo {\n  top: -20px;\n}\n\n.pergunta {\n  top: -30px;\n  font-size: 12px;\n}\n\nion-input {\n  font-family: \"Gotham\";\n  font-weight: 700;\n  --placeholder-color: rgba(0, 0, 0, 0.3);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 600;\n}\n\n.email {\n  --background: #C4C4C4;\n  height: 75px;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  box-shadow: 0px 0px 0px 0px !important;\n  color: rgba(0, 0, 0, 0.3);\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.senha {\n  --background: #C4C4C4;\n  height: 65px;\n  padding-top: 20px;\n  margin-bottom: 25px;\n  box-shadow: 0px 0px 0px 0px !important;\n  color: rgba(0, 0, 0, 0.3);\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.esqueceu-senha {\n  font-family: \"Gotham Bold\";\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n\n.botao {\n  color: #000000;\n}\n\nion-button {\n  --background: rgba(255, 90, 90, 0.35);\n  width: 176px;\n  height: 40px;\n  font-family: \"Gotham Bold\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  /* or 000% */\n  text-align: center;\n  text-transform: uppercase;\n  color: #000000;\n  margin-bottom: 20px;\n}\n\n.dizer-botao {\n  padding-top: 2px;\n}\n\n.cadastre-se {\n  padding-left: 40px;\n  padding-right: 40px;\n  font-family: \"Gotham\";\n  font-size: 12px;\n}\n\na {\n  text-decoration: none;\n  color: #000000 !important;\n}\n\na:hover {\n  color: #bd0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUlBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFLQTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFPRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7QUFKSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MzZweDtcclxuICBoZWlnaHQ6IDcwNS43M3B4O1xyXG4gIGxlZnQ6IC04MnB4O1xyXG4gIHRvcDogLTcwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNEQjAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNjkuNXB4IDI2OS41cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0nO1xyXG5cclxufVxyXG5cclxuLmxvZ297XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNzZweDtcclxuICBoZWlnaHQ6IDg4cHg7XHJcbiAgbGVmdDogMTY1cHg7XHJcbiAgdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzE2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ3MHB4O1xyXG4gIGxlZnQ6IC03MHB4O1xyXG4gIHRvcDogMTg3cHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJveC1zaGFkb3c6IDFweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcy12aW5kYXN7XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gQm9sZCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICB0b3A6IC0yMHB4O1xyXG59XHJcblxyXG4ucGVyZ3VudGF7XHJcbiAgdG9wOiAtMzBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0nO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5lbWFpbHtcclxuICAtLWJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnNlbmhhe1xyXG4gIC0tYmFja2dyb3VuZDogI0M0QzRDNDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4uZXNxdWVjZXUtc2VuaGF7XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0gQm9sZCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYm90YW97XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDkwLCA5MCwgMC4zNSk7XHJcbiAgd2lkdGg6IDE3NnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LWZhbWlseTogJ0dvdGhhbSBCb2xkJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIC8qIG9yIDAwMCUgKi9cclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIHJpZ2h0OiAtMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpemVyLWJvdGFve1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICB9XHJcblxyXG4gIC5jYWRhc3RyZS1zZXtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhhbSc7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNiZDAwMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 6839:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Page/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"flex-center\">\n    <div class=\"logo\">\n      <img src=\"assets/img/capa irão.png\" />\n\n      <div class=\"card-content\">\n        <p class=\"boas-vindas\">Obrigado por estar aqui!</p>\n        <p class=\"pergunta\">Como deseja continuar?</p>\n\n        <form [formGroup]=\"fGroup\" (ngSubmit)=\"login()\">\n          <ion-item class=\"email\">\n            <ion-input\n              type=\"email\"\n              placeholder=\"E-mail\"\n              formControlName=\"email\"\n            ></ion-input>\n          </ion-item>\n          <ion-item class=\"senha\">\n            <ion-input\n              type=\"password\"\n              placeholder=\"Senha\"\n              formControlName=\"password\"\n            ></ion-input>\n          </ion-item>\n\n          <p class=\"esqueceu-senha\">Esqueceu a sua senha?</p>\n\n          <!-- <ion-button (click)=\"loading()\" class=\"botao\" shape=\"round\"><p class=\"dizer-botao\">Começar</p></ion-button> -->\n          <ion-button\n            [disabled]=\"!fGroup.valid\"\n            (click)=\"login()\"\n            class=\"botao\"\n            shape=\"round\"\n            ><p class=\"dizer-botao\">Começar</p></ion-button\n          >\n\n          <p class=\"esqueceu-senha\">ou</p>\n\n          <div class=\"cadastre-se\">\n            <a (click)=\"cadastro()\"\n              ><p><b>Cadastre-se</b> e encontre uma loja perto de você!</p></a\n            >\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Page_login_login_module_ts.js.map