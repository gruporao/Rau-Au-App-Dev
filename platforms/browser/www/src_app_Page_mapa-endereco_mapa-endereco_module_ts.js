(self["webpackChunkIRaoCor"] = self["webpackChunkIRaoCor"] || []).push([["src_app_Page_mapa-endereco_mapa-endereco_module_ts"],{

/***/ 1606:
/*!********************************************************************!*\
  !*** ./src/app/Page/mapa-endereco/mapa-endereco-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaEnderecoPageRoutingModule": () => (/* binding */ MapaEnderecoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mapa_endereco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa-endereco.page */ 1471);




const routes = [
    {
        path: '',
        component: _mapa_endereco_page__WEBPACK_IMPORTED_MODULE_0__.MapaEnderecoPage
    }
];
let MapaEnderecoPageRoutingModule = class MapaEnderecoPageRoutingModule {
};
MapaEnderecoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapaEnderecoPageRoutingModule);



/***/ }),

/***/ 5055:
/*!************************************************************!*\
  !*** ./src/app/Page/mapa-endereco/mapa-endereco.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaEnderecoPageModule": () => (/* binding */ MapaEnderecoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _mapa_endereco_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapa-endereco-routing.module */ 1606);
/* harmony import */ var _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/Geolocalizacao/geolocalizacao.service */ 3425);
/* harmony import */ var _mapa_endereco_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapa-endereco.page */ 1471);










let MapaEnderecoPageModule = class MapaEnderecoPageModule {
};
MapaEnderecoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _mapa_endereco_routing_module__WEBPACK_IMPORTED_MODULE_2__.MapaEnderecoPageRoutingModule
        ],
        declarations: [_mapa_endereco_page__WEBPACK_IMPORTED_MODULE_4__.MapaEnderecoPage],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__.NativeGeocoder,
            _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_3__.GeolocalizacaoService
        ]
    })
], MapaEnderecoPageModule);



/***/ }),

/***/ 1471:
/*!**********************************************************!*\
  !*** ./src/app/Page/mapa-endereco/mapa-endereco.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaEnderecoPage": () => (/* binding */ MapaEnderecoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mapa_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mapa-endereco.page.html */ 6603);
/* harmony import */ var _mapa_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa-endereco.page.scss */ 7134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Services/Geolocalizacao/geolocalizacao.service */ 3425);







// import { title } from 'process';

let MapaEnderecoPage = class MapaEnderecoPage {
    constructor(geolocation, nativeGeocoder, NavCtrl, ngZone, navCtrl, geolocalizacaoService) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.NavCtrl = NavCtrl;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.geolocalizacaoService = geolocalizacaoService;
        this.listaEndereco = [];
        this.autoComplete = new google.maps.places.AutocompleteService();
        this.direction = new google.maps.DirectionsService();
        this.directionsRende = new google.maps.DirectionsRenderer();
    }
    ionViewWillEnter() {
        this.exibiMapa();
    }
    ngOnInit() {
    }
    exibiMapa() {
        const posicao = new google.maps.LatLng(-22.789446296740238, -42.949668020783825);
        const opcoes = {
            center: posicao,
            zoom: 4,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);
        // new google.maps.Marker({
        //   position: posicao,
        //   map: this.map,
        //   title: 'Estou Aqui!',
        //   animation: google.maps.Animation.BOUNCE
        // });
        this.buscarPosicao();
    }
    buscarPosicao() {
        this.geolocalizacaoService.buscarPosicao()
            .then((resp) => {
            // resp.coords.latitude;
            //   // resp.coords.longitude;
            this.minhaPosicao = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            this.geoLocation(resp.coords.latitude, resp.coords.longitude);
            this.irParaMinhaPosicaao();
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    geoLocation(lat, long) {
        const options = {
            useLocale: true,
            maxResults: 5
        };
        alert(lat + ' ' + long);
        return this.nativeGeocoder.reverseGeocode(lat, long, options)
            .then(result => {
            console.log('Reverse: ', result);
        })
            //   (result: NativeGeocoderResult[]) => {
            //   alert(JSON.stringify(result[0]));
            //   console.log('Retorno do GeoCoder: ' , JSON.stringify(result[0]))
            // })
            .catch((error) => console.log('Erro: ', error));
    }
    irParaMinhaPosicaao() {
        this.map.setCenter(this.minhaPosicao);
        this.map.setZoom(16);
        const contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
            '<div id="bodyContent">' +
            "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large </p> " +
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
            "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
            "(last visited June 22, 2009).</p>" +
            "</div>" +
            "</div>";
        // var markers = new MarkerWithLabel({
        //   map: this.map,
        //   draggable: true,
        //   raiseOnDrag: true,
        //   labelContent: "ABCD",
        //   labelAnchor: new google.maps.Point(15, 65),
        //   labelClass: "labels", // the CSS class for the label
        //   labelInBackground: false,
        //   icon: ''
        // });
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        infowindow.open();
        const icone = {
            url: '../../../assets/img/icones/minha_localizacao.png',
            scaledSize: new google.maps.Size(30, 38),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(40, 5), // anchor
            // strokeWeight: 1,
            // fillColor: '#0084ff',
            // fillOpacity: 1,
            // strokeColor: '#ffffff',
            // bottom: '30px'
        };
        const marker = new google.maps.Marker({
            position: this.minhaPosicao,
            title: 'Estou aqui!',
            //   label:{
            //     text: 'Teste Label',
            //     color: 'black',
            //     fontSize: '12px',
            //     className:'label'
            //     // x: '200',
            //     // y: '100'
            // },
            icon: icone,
            animation: google.maps.Animation.DROP,
            map: this.map
        });
        marker.addListener('click', () => {
            infowindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: true,
            });
        });
    }
    buscarEndereco(eventoCampoBuscar) {
        const busca = eventoCampoBuscar.target.value;
        if (!busca.trim().length) {
            this.listaEndereco = [];
            return false;
        }
        this.autoComplete.getPlacePredictions({ input: busca }, (arrayLocais, status) => {
            if (status === 'OK') {
                this.ngZone.run(() => {
                    this.listaEndereco = arrayLocais;
                });
            }
            else {
                this.listaEndereco = [];
            }
        });
    }
    tracarRota(local) {
        this.listaEndereco = [];
        new google.maps.Geocoder().geocode({ address: local.description }, resultado => {
            console.log(resultado[0].geometry.location);
            this.map.setCenter(resultado[0].geometry.location);
            this.map.setZoom(19);
            const marker = new google.maps.Marker({
                position: resultado[0].geometry.location,
                title: resultado[0].formatted_address,
                animation: google.maps.Animation.DROP,
                // icon:'#000',
                label: 'Teste',
                map: this.map
            });
            //------ Traça a Rota -----------------
            // const rota: google.maps.DirectionsRequest = {
            //   origin: this.minhaPosicao,
            //   destination: resultado[0].geometry.location,
            //   unitSystem: google.maps.UnitSystem.METRIC,
            //   travelMode: google.maps.TravelMode.DRIVING
            // };
            // this.direction.route(rota, (result, status) => {
            //   if(status == 'OK'){
            //     this.directionsRende.setMap(this.map);
            //     this.directionsRende.setDirections(result);
            //     this.directionsRende.setOptions({
            //        suppressMarkers: true,
            //     });
            //     console.log(result);
            //   }
            //  });
        });
    }
    enderecoUsuario() {
    }
    endereco() {
        this.navCtrl.navigateForward('endereco');
    }
};
MapaEnderecoPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _Services_Geolocalizacao_geolocalizacao_service__WEBPACK_IMPORTED_MODULE_4__.GeolocalizacaoService }
];
MapaEnderecoPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef, static: false },] }]
};
MapaEnderecoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mapa-endereco',
        template: _raw_loader_mapa_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mapa_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapaEnderecoPage);



/***/ }),

/***/ 7134:
/*!************************************************************!*\
  !*** ./src/app/Page/mapa-endereco/mapa-endereco.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  color: #bd0000;\n  font-weight: 800;\n  left: -20px;\n}\n\nion-toolbar {\n  border-bottom: 1px #bd0000 solid;\n}\n\nion-back-button {\n  color: #bd0000;\n}\n\nion-searchbar {\n  position: absolute;\n  z-index: 99999;\n}\n\n.searchbar {\n  -webkit-border-radius: 30px;\n  -moz-border-radius: 30px;\n  --border-radius: 30px;\n  --icon-color: #db0000;\n  --placeholder-color: #db0000;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n  background-color: #d1d1d1;\n}\n\nion-list {\n  width: 95%;\n  position: absolute;\n  top: 120px;\n  z-index: 99;\n  margin-left: 2.5%;\n  padding-top: 0;\n  padding-bottom: 0;\n  box-shadow: 0 5px 11px 3px rgba(0, 0, 0, 0.75);\n}\n\n.botao {\n  color: #db0000;\n}\n\nion-button {\n  --background: #FFFFFF;\n  width: 320px;\n  height: 50px;\n  font-family: \"Gotham Bold\";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  text-align: center;\n  text-transform: uppercase;\n  bottom: 100px;\n  z-index: 9999;\n  position: absolute;\n  left: 40px;\n}\n\n.content-botton {\n  width: 100%;\n  align-items: center;\n}\n\n.label {\n  width: 30px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcGEtZW5kZXJlY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBQUY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1FO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFISiIsImZpbGUiOiJtYXBhLWVuZGVyZWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICBjb2xvcjojYmQwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gIGJvcmRlci1ib3R0b206IDFweCAjYmQwMDAwIHNvbGlkO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgY29sb3I6I2JkMDAwMDtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXJ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgLS1pY29uLWNvbG9yOiAjZGIwMDAwO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICNkYjAwMDA7XHJcbn1cclxuXHJcbiNtYXB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2QxZDFkMSA7XHJcblxyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyMHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcblxyXG59XHJcblxyXG4uYm90YW97XHJcbiAgY29sb3I6ICNkYjAwMDA7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnR290aGFtIEJvbGQnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgLy8gLyogb3IgMDAwJSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm90dG9tOjEwMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC1ib3R0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubGFiZWwge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 6603:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Page/mapa-endereco/mapa-endereco.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      text=\"\"\n      icon=\"arrow-back\"\n      color=\"danger\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">LOCALIZAÇÃO NO MAPA</ion-title>\n  <!-- </ion-toolbar>\n  <ion-toolbar> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar placeholder=\"Destino\" (ionChange)=\"buscarEndereco($event)\" class=\"searchbar\"></ion-searchbar>\n\n  <ion-list [hidden]=\"!this.listaEndereco.length\">\n    <ion-item button *ngFor=\"let local of listaEndereco\" lines=\"full\" (click)=\"tracarRota(local)\">\n      {{local.description}}\n    </ion-item>\n  </ion-list>\n  <div #map id=\"map\">\n  </div>\n\n  <div class=\"content-botton\">\n    <ion-button\n      (click)=\"endereco()\"\n      class=\"botao\"\n      shape=\"round\"><p class=\"botao\">Comfirmar Local</p></ion-button>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Page_mapa-endereco_mapa-endereco_module_ts.js.map