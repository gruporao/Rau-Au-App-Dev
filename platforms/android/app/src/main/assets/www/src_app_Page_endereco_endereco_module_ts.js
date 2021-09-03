(self["webpackChunkIRaoCor"] = self["webpackChunkIRaoCor"] || []).push([["src_app_Page_endereco_endereco_module_ts"],{

/***/ 5667:
/*!**********************************************************!*\
  !*** ./src/app/Page/endereco/endereco-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoPageRoutingModule": () => (/* binding */ EnderecoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _endereco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endereco.page */ 4356);




const routes = [
    {
        path: '',
        component: _endereco_page__WEBPACK_IMPORTED_MODULE_0__.EnderecoPage
    }
];
let EnderecoPageRoutingModule = class EnderecoPageRoutingModule {
};
EnderecoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnderecoPageRoutingModule);



/***/ }),

/***/ 2686:
/*!**************************************************!*\
  !*** ./src/app/Page/endereco/endereco.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoPageModule": () => (/* binding */ EnderecoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! br-mask */ 2375);
/* harmony import */ var _endereco_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endereco-routing.module */ 5667);
/* harmony import */ var _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/Geolocalizacao/geolocalizacao.service */ 3425);
/* harmony import */ var _endereco_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endereco.page */ 4356);










let EnderecoPageModule = class EnderecoPageModule {
};
EnderecoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _endereco_routing_module__WEBPACK_IMPORTED_MODULE_2__.EnderecoPageRoutingModule,
            br_mask__WEBPACK_IMPORTED_MODULE_1__.BrMaskerModule
        ],
        exports: [_endereco_page__WEBPACK_IMPORTED_MODULE_4__.EnderecoPage],
        declarations: [_endereco_page__WEBPACK_IMPORTED_MODULE_4__.EnderecoPage],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation,
            _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_3__.GeolocalizacaoService
        ]
    })
], EnderecoPageModule);



/***/ }),

/***/ 4356:
/*!************************************************!*\
  !*** ./src/app/Page/endereco/endereco.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoPage": () => (/* binding */ EnderecoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./endereco.page.html */ 5822);
/* harmony import */ var _endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endereco.page.scss */ 4180);
/* harmony import */ var _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Geolocalizacao/geolocalizacao.service */ 3425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_model_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/validators */ 1213);
/* harmony import */ var _Services_Endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Services/Endereco/endereco.service */ 4793);









let EnderecoPage = class EnderecoPage {
    constructor(navCtrl, fBuilder, loadingCtrl, toastCtl, enderecoService, geolocalizacaoService) {
        this.navCtrl = navCtrl;
        this.fBuilder = fBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtl = toastCtl;
        this.enderecoService = enderecoService;
        this.geolocalizacaoService = geolocalizacaoService;
        this.descricao = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.cep = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.endereco = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.numero = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.complemento = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.bairro = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.cidade = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.uf = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.referencia = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.latitude = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
        this.longitude = _angular_forms__WEBPACK_IMPORTED_MODULE_5__.AbstractControl;
    }
    ngOnInit() {
        this.validForm();
        this.inputLoading = false;
        this.retornaEndereco = '';
        this.tratSemComplemento = false;
        this.tratSemNumero = false;
        this.getLocalizacao();
    }
    validForm() {
        this.fGroup = this.fBuilder.group({
            cep: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(src_model_validators__WEBPACK_IMPORTED_MODULE_3__.regexValidators.cep),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ]),
            ],
            endereco: [
                '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
            ],
            numero: [''],
            complemento: [''],
            referencia: [''],
            bairro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            cidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            uf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            semNumero: [false],
            semComplemento: [false],
        });
    }
    getCep(ev) {
        const buscaCep = ev.value.replace(/[^0-9]/g, '');
        const tratCep = buscaCep.length;
        // console.log('Form cep: ', tratCep);
        if (tratCep === 8) {
            this.inputLoading = true;
            this.enderecoService.getConsultaCep(buscaCep)
                .toPromise()
                .then(resp => {
                if (resp) {
                    this.inputLoading = false;
                    this.retornaEndereco = resp;
                    this.listEndereco = {
                        cep: this.retornaEndereco.cep,
                        endereco: this.retornaEndereco.logradouro,
                        complemento: this.retornaEndereco.complemento ? this.retornaEndereco.complemento : 'Complemento',
                        bairro: this.retornaEndereco.bairro,
                        cidade: this.retornaEndereco.localidade,
                        uf: this.retornaEndereco.uf
                    };
                }
                console.log('Retorno do Cep: ', this.listEndereco.cep);
            });
        }
    }
    semNumero(ev) {
        // console.log('Evento Numeto=> ', ev.detail.checked);
        this.tratSemNumero = ev.detail.checked;
    }
    semComplemento(ev) {
        // console.log('Evento Complemento => ', ev.detail.checked);
        this.tratSemComplemento = ev.detail.checked;
    }
    getLocalizacao() {
        this.geolocalizacaoService.buscarPosicao()
            .then((resp) => {
            this.minhaLocalizacao = {
                lat: resp.coords.latitude,
                long: resp.coords.longitude
            };
            // console.log('Gelocation: ', this.minhaLocalizacao.lat, ' ', this.minhaLocalizacao.long);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    setEndereco() {
        const dadosPost = {
            descricao: this.fGroup.value.descricao,
            cep: this.fGroup.value.cep.replace(/[^0-9]/g, ''),
            endereco: this.fGroup.value.endereco,
            complemento: this.fGroup.value.complemento,
            referencia: this.fGroup.value.referencia,
            numero: this.fGroup.value.numero,
            bairro: this.fGroup.value.bairro,
            cidade: this.fGroup.value.cidade,
            uf: this.fGroup.value.uf,
            latitude: this.minhaLocalizacao.lat,
            longitude: this.minhaLocalizacao.long,
            user_id: localStorage.getItem('id')
        };
        this.presentLoading();
        this.enderecoService.setEndereco(dadosPost)
            .toPromise()
            .then(resp => {
            this.resposta = resp;
            // console.log('Retorno da Chamada: ', resp);
            this.presentToast(this.resposta.mensagem);
            this.home();
        }).catch(error => {
            console.log('Erro=> ', error);
            this.errorPresentToast(error);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                mode: 'md',
                message: 'Salvando o Endereço!',
                duration: 3000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            // console.log('Loading dismissed!');
        });
    }
    presentToast(par) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    home() {
        this.navCtrl.navigateForward('home');
    }
};
EnderecoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _Services_Endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__.EnderecoService },
    { type: _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_2__.GeolocalizacaoService }
];
EnderecoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-endereco',
        template: _raw_loader_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnderecoPage);



/***/ }),

/***/ 4793:
/*!*******************************************************!*\
  !*** ./src/app/Services/Endereco/endereco.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoService": () => (/* binding */ EnderecoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let EnderecoService = class EnderecoService {
    constructor(http) {
        this.http = http;
    }
    getConsultaCep(cep) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlConsultaCep}/${cep}/json/`);
    }
    setEndereco(data) {
        console.log('Informações no service: ', data);
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlBase}/auth/endereco`, data);
    }
};
EnderecoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
EnderecoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EnderecoService);



/***/ }),

/***/ 4180:
/*!**************************************************!*\
  !*** ./src/app/Page/endereco/endereco.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  color: #bd0000;\n  font-weight: 800;\n  left: -20px;\n  text-transform: uppercase;\n}\n\nion-toolbar {\n  border-bottom: 1px #bd0000 solid;\n  text-align: center;\n}\n\nion-back-button {\n  color: #bd0000;\n}\n\n.mensagem {\n  font-family: \"Gotham\";\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 40px;\n}\n\n.form-conteiner {\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: 20px;\n}\n\nion-input {\n  height: 40px;\n  font-family: \"Gotham\";\n  font-size: 12px;\n  font-weight: 600;\n  border: #bd0000 1px solid;\n  border-radius: 5px;\n  --placeholder-color: #000000 !important;\n  --placeholder-opacity: 1;\n  --padding-start: 5px;\n}\n\n.item {\n  font-family: \"Gotham\";\n  font-size: 12px;\n  font-weight: 400;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n}\n\n.input-menor {\n  font-family: \"Gotham\";\n  font-size: 12px;\n  font-weight: 400;\n  padding-left: 6px;\n  padding-right: 2px;\n  padding-bottom: 10px;\n  vertical-align: middle;\n}\n\n.check {\n  left: 1px;\n}\n\nion-textarea {\n  font-family: \"Gotham\";\n  font-size: 12px;\n  font-weight: 600;\n  border: #bd0000 1px solid;\n  border-radius: 5px;\n  --placeholder-color: #000000 !important;\n  --placeholder-opacity: 1;\n  --padding-start: 5px;\n}\n\n.conteiner-botao {\n  justify-content: center;\n  text-align: center;\n  padding: 20px;\n}\n\nion-button {\n  --background: rgba(255, 90, 90, 0.35);\n  width: 176px;\n  height: 40px;\n  font-family: \"Gotham Bold\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  /* or 000% */\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n\nion-grid ion-col {\n  --ion-grid-padding: 10px;\n}\n\n.green {\n  border: #2dd36f 2px solid;\n}\n\n.desabled {\n  border: #F8F9FA 2px solid;\n}\n\n.botao {\n  --color: #000000;\n  --background: rgba(255, 90, 90, 0.35);\n}\n\n.botao-green {\n  --background: #2dd36f;\n  --color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZGVyZWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0FBSEo7O0FBT0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBSko7O0FBT0U7RUFDRSxTQUFBO0FBSko7O0FBT0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFPRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSko7O0FBT0U7RUFDRSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVVNO0VBQ0Usd0JBQUE7QUFQUjs7QUFZSTtFQUNFLHlCQUFBO0FBVE47O0FBWUk7RUFDRSx5QkFBQTtBQVROOztBQVlJO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtBQVROOztBQWFJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQVZOIiwiZmlsZSI6ImVuZGVyZWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICBjb2xvcjojYmQwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNiZDAwMDAgc29saWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgY29sb3I6I2JkMDAwMDtcclxufVxyXG5cclxuLm1lbnNhZ2Vte1xyXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jb250ZWluZXJ7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5pb24taW5wdXR7XHJcbiAgaGVpZ2h0OiA0MHB4OztcclxuICBmb250LWZhbWlseTogJ0dvdGhhbSc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiNiZDAwMDAgMXB4IHNvbGlkO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gIC8vIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbXtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5pbnB1dC1tZW5vcntcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5jaGVja3tcclxuICAgIGxlZnQ6IDFweDtcclxuICB9XHJcblxyXG4gIGlvbi10ZXh0YXJlYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6I2JkMDAwMCAxcHggc29saWQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVpbmVyLWJvdGFve1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDkwLCA5MCwgMC4zNSk7XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0dvdGhhbSBCb2xkJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAvKiBvciAwMDAlICovXHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gcmlnaHQ6IC0zMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICBpb24tY29se1xyXG4gICAgICAgIC0taW9uLWdyaWQtcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JlZW4ge1xyXG4gICAgICBib3JkZXI6ICMyZGQzNmYgMnB4IHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlcjogI0Y4RjlGQSAycHggc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJvdGFve1xyXG4gICAgICAtLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCA5MCwgOTAsIDAuMzUpO1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYm90YW8tZ3JlZW4ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyZGQzNmY7XHJcbiAgICAgIC0tY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 5822:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Page/endereco/endereco.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n      <!-- <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button> -->\n    </ion-buttons>\n    <ion-title>Endereço</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"mensagem\">\n    <p>Esse endereço será classificado como principal.</p>\n    <p>Você poderá adicionar novos endereços depois.</p>\n  </div>\n\n  <div class=\"form-conteiner\">\n\n    <form [formGroup]=\"fGroup\" (ngSubmit)=\"setEndereco()\">\n\n  <div class=\"item\">\n\n  <ion-input\n  type=\"text\"\n  placeholder=\"Descrição ex: Casa, Trabalho e etc...\"\n  [ngClass]=\"!fGroup.controls.descricao.hasError('required') ? 'green' : '' \"\n  name=\"descricao\"\n  #descricao\n  formControlName=\"descricao\"\n  >\n  </ion-input>\n\n</div>\n<div class=\"item\">\n  <ion-input\n  type=\"numeric\"\n  placeholder=\"CEP\"\n  [ngClass]=\"!fGroup.controls.cep.hasError('required') ? 'green' : '' \"\n  autofocus=\"true\"\n  name=\"cep\"\n  #cep\n  [brmasker]=\"{mask:'00000-00', len:9,  type:'num', userCaracters: false}\"\n  formControlName=\"cep\"\n  (ionInput)=\"getCep($event.target)\"\n  >\n\n  <ion-label>\n    <ion-spinner\n      name=\"lines\"\n      *ngIf=\"this.inputLoading\"\n      ></ion-spinner>\n    </ion-label>\n\n</ion-input>\n</div>\n\n<div class=\"item\">\n  <ion-input\n  type=\"text\"\n  placeholder=\"Endereço\"\n  [ngClass]=\"!fGroup.controls.endereco.hasError('required') ? 'green' : '' \"\n  [value]= \"listEndereco ? listEndereco.endereco : ''\"\n  name=\"endereco\"\n  #endereco\n  formControlName=\"endereco\"\n  >\n\n</ion-input>\n</div>\n\n<ion-grid class=\"input-menor\">\n  <ion-row>\n    <ion-col size=\"5\">\n      <div >\n       <ion-input\n       type=\"numeric\"\n       placeholder=\"Número\"\n       name=\"numero\"\n       [ngClass]=\"!fGroup.controls.numero.hasError('required') ? 'green' : '' \"\n       [value]=\"this.tratSemNumero ? 0 :''\"\n      #numero\n      [brmasker]=\"{mask:'00000', len:5,  type:'num', userCaracters: true}\"\n      [attr.disabled]=\"tratSemNumero\"\n      formControlName=\"numero\"\n      ></ion-input>\n      </div>\n    </ion-col>\n    <ion-col size=\"7\">\n      <div >\n        <ion-input\n        type=\"text\"\n        placeholder=\"{{ listEndereco ? listEndereco.complemento: 'Complemento' }}\"\n        minlength=\"3\"\n        maxlength=\"50\"\n        [ngClass]=\"!fGroup.controls.complemento.hasError('required') ? 'green' : '' \"\n        [value]=\"this.tratSemComplemento ? ' ' :''\"\n        name=\"complemento\"\n        #complemento\n        [attr.disabled]=\"tratSemComplemento\"\n        formControlName=\"complemento\"\n        ></ion-input>\n      </div>\n    </ion-col>\n\n      <ion-col size=\"1\">\n        <ion-checkbox\n        checked=\"false\"\n        mode=\"md\"\n        color=\"danger\"\n        name=\"semNumero\"\n        [value]=\"false\"\n        [required]=\"!tratSemNumero ? true : false\"\n        formControlName=\"semNumero\"\n        (ionChange)=\"semNumero($event)\"\n            ></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"4\">\n        Sem Número\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-checkbox\n            checked=\"false\"\n            mode=\"md\"\n            color=\"danger\"\n            name=\"semComplemento\"\n            [value]=\"false\"\n            [required]=\"!tratSemComplemento ? true : false\"\n            formControlName=\"semComplemento\"\n            (ionChange)=\"semComplemento($event)\"\n        ></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"6\">\n        Sem Complemento\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n\n\n\n\n<div class=\"item\">\n  <ion-textarea\n  type=\"text\"\n  rows=\"7\"\n  cols=\"20\"\n  placeholder=\"Ponto de referência (opicional)\"\n  [ngClass]=\"!fGroup.controls.referencia.hasError('required') ? 'green' : '' \"\n  name=\"referencia\"\n  #referencia\n  formControlName=\"referencia\"></ion-textarea>\n</div>\n<div class=\"item\">\n  <ion-input\n  type=\"text\"\n  placeholder=\"Bairro\"\n  [value]=\"listEndereco ? listEndereco.bairro: ''\"\n  [ngClass]=\"!fGroup.controls.bairro.hasError('required') ? 'green' : '' \"\n  name=\"bairro\"\n  #bairro\n  formControlName=\"bairro\" required></ion-input>\n</div>\n\n<div >\n  <ion-grid class=\"input-menor\">\n    <ion-row>\n      <ion-col size=\"9\">\n  <ion-input\n  type=\"text\"\n  placeholder=\"Cidade\"\n  [value]=\"listEndereco ? listEndereco.cidade: ''\"\n  [ngClass]=\"!fGroup.controls.cidade.hasError('required') ? 'green' : '' \"\n  name=\"cidade\"\n  #cidade\n  formControlName=\"cidade\" required></ion-input>\n\n</ion-col>\n    <ion-col size=\"3\">\n\n\n  <ion-input\n  type=\"text\"\n  placeholder=\"UF\"\n  [value]=\"listEndereco ? listEndereco.uf: ''\"\n  [ngClass]=\"!fGroup.controls.uf.hasError('required') ? 'green' : '' \"\n  name=\"uf\"\n  #uf\n  formControlName=\"uf\" required></ion-input>\n</ion-col>\n</ion-row>\n</ion-grid>\n</div>\n\n<div class=\"conteiner-botao\">\n  <ion-button\n      type=\"submit\"\n      [ngClass]=\"fGroup.valid ? 'botao-green' : 'botao' \"\n      shape=\"round\"\n      [disabled]=\"!fGroup.valid\"\n      ><p class=\"dizer-botao\">Confirmar</p></ion-button>\n <!-- {{fGroup.valid}} -->\n<!-- <p>Form name: {{ fGroup.controls.bairro.hasError('required') | json }}</p> -->\n<!-- <p>Form name: {{ fGroup.controls.cep.hasError('pattern') | json }}</p> -->\n<!-- <p>Form name: {{ fGroup.controls.complemento.hasError('required') | json }}</p> -->\n<!-- <p>Form name: {{ fGroup.controls.endereco.hasError('pattern') | json }}</p> -->\n\n\n</div>\n</form>\n</div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Page_endereco_endereco_module_ts.js.map