webpackJsonp([1],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.account = {
            name: '',
            email: '',
            password: '',
            number: '',
            myDate: 'MM/DD/YYYY',
            gender: 'm'
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        this.user.signup(this.account).subscribe(function (resp) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4____["a" /* FirstRunPage */]);
        }, function (err) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4____["a" /* FirstRunPage */]);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: "Você se registrou com sucesso . Por favor, Registre-se .",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage.prototype.welcomePage = function () {
        this.navCtrl.push('WelcomePage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"H:\ionic\RedeEtec\redesEtec\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="welcomePage()">\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="titu1">{{ \'------ Página de Registro ------\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <img src="../assets/img/Vestibulinho1.jpg">\n  <form (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Nome\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Celular\' | translate }}</ion-label>\n        <ion-input type="number" [(ngModel)]="account.number" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label fixed>{{ \'Senha\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Data de nascimento\' | translate }}</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY"></ion-datetime>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Sexo</ion-label>\n        <ion-select>\n          <ion-option value="f">Feminino</ion-option>\n          <ion-option value="m">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Qual seu Curso técnico </ion-label>\n        <ion-select multiple="true" okText="Ok" cancelText="Cancelar">\n          <ion-option>Logística</ion-option>\n          <ion-option>Informatica para Internet</ion-option>\n          <ion-option>Desenvolvimento de Sistemas</ion-option>\n          <ion-option>Secretariado</ion-option>\n          <ion-option>Marketing</ion-option>\n          <ion-option>Administração</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <div padding>\n        <button ion-button class="signUpBtn" block>{{ \'REGISTRAR-SE\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n<ion-footer class="rodape1">\n  <ion-title>RedeEtec</ion-title>\n</ion-footer>\n'/*ion-inline-end:"H:\ionic\RedeEtec\redesEtec\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map