(self["webpackChunkIRaoCor"] = self["webpackChunkIRaoCor"] || []).push([["src_app_Page_cadastro-usuario_cadastro-usuario_module_ts"],{

/***/ 6258:
/*!**************************************************************************!*\
  !*** ./src/app/Page/cadastro-usuario/cadastro-usuario-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroUsuarioPageRoutingModule": () => (/* binding */ CadastroUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-usuario.page */ 596);




const routes = [
    {
        path: '',
        component: _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_0__.CadastroUsuarioPage
    }
];
let CadastroUsuarioPageRoutingModule = class CadastroUsuarioPageRoutingModule {
};
CadastroUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CadastroUsuarioPageRoutingModule);



/***/ }),

/***/ 8125:
/*!******************************************************************!*\
  !*** ./src/app/Page/cadastro-usuario/cadastro-usuario.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroUsuarioPageModule": () => (/* binding */ CadastroUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cadastro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-usuario-routing.module */ 6258);
/* harmony import */ var _cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro-usuario.page */ 596);







let CadastroUsuarioPageModule = class CadastroUsuarioPageModule {
};
CadastroUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cadastro_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroUsuarioPageRoutingModule
        ],
        exports: [_cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_1__.CadastroUsuarioPage],
        declarations: [_cadastro_usuario_page__WEBPACK_IMPORTED_MODULE_1__.CadastroUsuarioPage]
    })
], CadastroUsuarioPageModule);



/***/ }),

/***/ 596:
/*!****************************************************************!*\
  !*** ./src/app/Page/cadastro-usuario/cadastro-usuario.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroUsuarioPage": () => (/* binding */ CadastroUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cadastro_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro-usuario.page.html */ 4539);
/* harmony import */ var _cadastro_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro-usuario.page.scss */ 3632);
/* harmony import */ var _Services_CadastroUsuario_cadastro_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/CadastroUsuario/cadastro-usuario.service */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _model_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/validators */ 1213);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);









let CadastroUsuarioPage = class CadastroUsuarioPage {
    constructor(navCtrl, router, fBuilder, loadingCtrl, toastCtl, cadUsuario) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.fBuilder = fBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtl = toastCtl;
        this.cadUsuario = cadUsuario;
        this.formValidation();
    }
    ngOnInit() {
        //
    }
    formValidation() {
        this.fGroup = this.fBuilder.group({
            name: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ]),
            ],
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_model_validators__WEBPACK_IMPORTED_MODULE_3__.regexValidators.email),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                ]),
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_model_validators__WEBPACK_IMPORTED_MODULE_3__.regexValidators.password),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                ]),
            ],
            password_confirmation: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_model_validators__WEBPACK_IMPORTED_MODULE_3__.regexValidators.password),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                ]),
            ],
        });
    }
    setUsuario() {
        this.cadUsuario.setUsuario(this.fGroup)
            .toPromise()
            .then(resp => {
            const callBack = [resp];
            console.log('Resposta com Sucesso: ', callBack[0]);
            this.presentLoading('Validando as informações!');
            localStorage.setItem('id', callBack[0].user.id);
            if (callBack[0].message) {
                this.presentToast(callBack[0].message);
                this.navCtrl.navigateRoot('endereco');
                // this.router.navigate(['/endereco'], callBack[0]);
            }
        }).catch(erro => {
            let errorTrat = JSON.parse(erro.error);
            console.log('Erro no calback: ', errorTrat.email[0]);
            if (errorTrat.email[0]) {
                // this.erroPresentLoading(errorTrat.email[0]);
                this.errorPresentToast(errorTrat.email[0]);
            }
        });
    }
    presentLoading(par) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                mode: 'md',
                message: `${par}`,
                duration: 3000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    erroPresentLoading(par) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: `${par}`,
                duration: 3000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    presentToast(par) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtl.create({
                cssClass: 'sucess-class',
                color: 'success',
                mode: 'md',
                message: `${par}`,
                duration: 3000
            });
            toast.present();
        });
    }
    errorPresentToast(par) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtl.create({
                cssClass: 'error-class',
                color: 'danger',
                mode: 'md',
                message: `${par}`,
                duration: 3000
            });
            toast.present();
        });
    }
    redirectUsuario(id) {
        // this.navCtrl.navigateRoot('endereco');
        this.router.navigate(['/endereco'], id.id);
    }
};
CadastroUsuarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _Services_CadastroUsuario_cadastro_usuario_service__WEBPACK_IMPORTED_MODULE_2__.CadastroUsuarioService }
];
CadastroUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cadastro-usuario',
        template: _raw_loader_cadastro_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastro_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CadastroUsuarioPage);



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

/***/ 3632:
/*!******************************************************************!*\
  !*** ./src/app/Page/cadastro-usuario/cadastro-usuario.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  color: #bd0000;\n  font-weight: 800;\n}\n\nion-toolbar {\n  border-bottom: 1px #bd0000 solid;\n}\n\nion-back-button {\n  color: #bd0000;\n}\n\nion-content {\n  display: flex;\n  padding: 100px;\n}\n\n.form-conteiner {\n  padding-top: 150px;\n}\n\n.item {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 25px;\n}\n\nion-input {\n  font-family: \"Gotham\";\n  border: #bd0000 1px solid;\n  border-radius: 15px;\n  --placeholder-color: var(#000000);\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 800;\n  padding-left: 10px !important;\n}\n\n.green {\n  border: #2dd36f 2px solid;\n}\n\n.termos {\n  font-family: \"Gotham\";\n  font-size: 12px;\n  padding-inline: 20px;\n  padding-top: 20px;\n}\n\nion-checkbox {\n  --background-checked: #bd0000;\n  --border-color: #bd0000;\n  --border-color-checked: #000000;\n}\n\n.conteiner-botao {\n  justify-content: center;\n  text-align: center;\n  padding: 50px;\n}\n\n.botao {\n  --color: #000000;\n  --background: rgba(255, 90, 90, 0.35);\n}\n\n.botao-green {\n  --background: #2dd36f;\n  --color: #FFFFFF;\n}\n\nion-button {\n  width: 176px;\n  height: 40px;\n  font-family: \"Gotham Bold\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  /* or 000% */\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n\n.error-class {\n  --background: #bd0000;\n  --color: #FFFFFF;\n}\n\n.loading {\n  --background: #000000, ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBSUU7RUFDRSx5QkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FBREo7O0FBSUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtBQURKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBV0c7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0c7RUFDQyx1QkFBQTtBQVJKIiwiZmlsZSI6ImNhZGFzdHJvLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIGNvbG9yOiNiZDAwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNiZDAwMDAgc29saWQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBjb2xvcjojYmQwMDAwO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6MTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRlaW5lcntcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICBib3JkZXI6I2JkMDAwMCAxcHggc29saWQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigjMDAwMDAwKTtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogODAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcblxyXG4gIC5ncmVlbiB7XHJcbiAgICBib3JkZXI6ICMyZGQzNmYgMnB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLnRlcm1vc3tcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tY2hlY2tib3h7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2JkMDAwMDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjYmQwMDAwO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5jb250ZWluZXItYm90YW97XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NTBweDtcclxuICB9XHJcblxyXG4gIC5ib3Rhb3tcclxuICAgIC0tY29sb3I6ICMwMDAwMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCA5MCwgOTAsIDAuMzUpO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90YW8tZ3JlZW4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmRkMzZmO1xyXG4gICAgLS1jb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDE3NnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHb3RoYW0gQm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgLyogb3IgMDAwJSAqL1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIHJpZ2h0OiAtMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAvLyAgLnN1Y2Vzcy1jbGFzcyB7XHJcblxyXG4gIC8vICB9XHJcblxyXG4gICAuZXJyb3ItY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYmQwMDAwO1xyXG4gICAgLS1jb2xvcjogI0ZGRkZGRjtcclxuICAgfVxyXG5cclxuICAgLmxvYWRpbmcge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwLFxyXG4gICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 4539:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Page/cadastro-usuario/cadastro-usuario.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          text=\"\"\n          icon=\"arrow-back\"\n          color=\"danger\"></ion-back-button>\n      <!-- <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button> -->\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">CADASTRO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<form [formGroup]=\"fGroup\" (ngSubmit)=\"setUsuario()\">\n  <div class=\"form-conteiner\">\n\n    <div class=\"item\">\n      <ion-input\n          type=\"text\"\n          [ngClass]=\"!fGroup.controls.name.hasError('required') && !fGroup.controls.name.hasError('pattern') ? 'green' : null \"\n          inputmode=\"text\"\n          placeholder=\"Nome*\"\n          autofocus=\"true\"\n          autocomplete=\"off\"\n          formControlName=\"name\"\n          showCancelButton=\"always\"></ion-input>\n    </div>\n  <div class=\"item\">\n    <ion-input\n        type=\"email\"\n        [ngClass]=\"!fGroup.controls.email.hasError('required') && !fGroup.controls.email.hasError('pattern') ? 'green' : null \"\n        inputmode=\"email\"\n        placeholder=\"E-mail*\"\n        autofocus=\"true\"\n        autocomplete=\"off\"\n        formControlName=\"email\"\n        showCancelButton=\"always\"></ion-input>\n  </div>\n\n  <div class=\"item\">\n    <ion-input\n        type=\"password\"\n        [ngClass]=\"!fGroup.controls.password.hasError('required') && !fGroup.controls.password.hasError('pattern')? 'green' : null \"\n        placeholder=\"Senha\"\n        formControlName=\"password\"></ion-input>\n        <ion-label\n          *ngIf=\"fGroup.controls.password.hasError('required') && !fGroup.controls.password.hasError('required')\"\n          class=\"ion-text-wrap\">\n            As senhas devem ter pelo menos 6 caracteres, letras maiusculas e minusculas\n          </ion-label>\n\n  </div>\n  <div class=\"item\">\n    <ion-input\n        type=\"password\"\n        [ngClass]=\"!fGroup.controls.password_confirmation.hasError('required') && !fGroup.controls.password_confirmation.hasError('pattern') && fGroup.controls.password.value === fGroup.controls.password_confirmation.value ? 'green' : null \"\n        placeholder=\"Confirmação de Senha\"\n        formControlName=\"password_confirmation\"></ion-input>\n        <ion-label\n          *ngIf=\"fGroup.controls.password_confirmation.hasError('required') && fGroup.controls.password_confirmation.hasError('pattern') ||\n            fGroup.controls.password.value !== fGroup.controls.password_confirmation.value\">Senhas não coincidem</ion-label>\n  </div>\n\n  <div class=\"conteiner-botao\">\n    <ion-button\n      [disabled]=\"!fGroup.valid\"\n      type=\"submit\"\n      [ngClass]=\"fGroup.valid ? 'botao-green' : 'botao' \"\n      shape=\"round\">\n      <p class=\"dizer-botao\">Cadastrar</p>\n    </ion-button>\n\n  </div>\n  <!-- <p>Form value: {{ fGroup.value | json }}</p> -->\n  <!-- <p>Form value: {{ fGroup.controls.senha.hasError('pattern') | json }}</p> -->\n  <!-- <p>Form status: {{ fGroup.valid| json }}</p>\n  <p>Form name: {{ fGroup.controls.name.hasError('required') | json }}</p>\n  <p>Form email: {{ fGroup.controls.email.hasError('pattern') | json }}</p>\n  <p>Form password: {{ fGroup.controls.senha.hasError('pattern') | json }}</p>\n  <p>Form confirmeSenha: {{ fGroup.controls.name.hasError('pattern') | json }}</p> -->\n</div>\n</form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Page_cadastro-usuario_cadastro-usuario_module_ts.js.map