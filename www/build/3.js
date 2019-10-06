webpackJsonp([3],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedModule", function() { return NewsfeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsfeed__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsfeedModule = /** @class */ (function () {
    function NewsfeedModule() {
    }
    NewsfeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */]
            ]
        })
    ], NewsfeedModule);
    return NewsfeedModule;
}());

//# sourceMappingURL=newsfeed.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsFeed = /** @class */ (function () {
    function NewsFeed(navCtrl, modalCtrl, items, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = items;
        this.toastCtrl = toastCtrl;
        this.press = 0;
        this.likes = 10;
        this.cardItems = [
            {
                user_avtar: 'assets/img/marty-avatar.png',
                user_name: 'josé Antonio Gallo Junior',
                date: '9 Maio ',
                image: 'assets/img/advance-card-bttf.png',
                content: '28 de março a 9 de abril – Inscrição para pedido de redução da taxa de inscrição do Vestibulinho e envio da documentação por meio digital (upload). No último dia, a inscrição termina às 15 horas.',
            },
            {
                user_avtar: 'assets/img/sarah-avatar.jpg',
                user_name: 'Marcio Moraes',
                date: '9 Maio ',
                image: 'assets/img/advance-card-tmntr1.jpg',
                content: 'Amanhã vai ter Panceta no intervalo.'
            },
            {
                user_avtar: 'assets/img/ian-avatar.png',
                user_name: 'Dr. Ronan Adriel Zenatti',
                date: '9 Maio ',
                image: 'assets/img/advance-card-jp.jpg',
                content: 'O time jogou com inteligência e não se afobou nas poucas investidas do time adversário. Vitória de suma importância. '
            }
        ];
    }
    NewsFeed.prototype.addNewsFeed = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('NewsfeedCreate');
        addModal.onDidDismiss(function (item) {
            if (item) {
                console.log(item);
                _this.cardItems.push(item);
            }
        });
        addModal.present();
    };
    NewsFeed.prototype.dblClickEvent = function (ev, user_name) {
        this.press++;
        if (this.press == 2) {
            var toast = this.toastCtrl.create({
                message: "Você gostou disto.",
                duration: 2000,
                position: 'top'
            });
            toast.present();
            this.press = 0;
            this.likes++;
        }
    };
    NewsFeed = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'news-feed',template:/*ion-inline-start:"H:\ionic\RedeEtec\redesEtec\src\pages\newsfeed\newsfeed.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Noticias\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addNewsFeed()" ><ion-icon name="add"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let item of cardItems">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.user_avtar">\n      </ion-avatar>\n      <h2>{{item.user_name}}</h2>\n      <p>{{item.date}}</p>\n    </ion-item>\n\n    <img (tap)="dblClickEvent($event,item.user_name)"  [src]="item.image">\n\n    <ion-card-content>\n      <p>{{item.content}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          {{likes}} Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          4 Comentarios\n        </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h atrás\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n<ion-footer class="rodape1">\n    <ion-title>RedeEtec</ion-title>\n</ion-footer>\n'/*ion-inline-end:"H:\ionic\RedeEtec\redesEtec\src\pages\newsfeed\newsfeed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewsFeed);
    return NewsFeed;
}());

//# sourceMappingURL=newsfeed.js.map

/***/ })

});
//# sourceMappingURL=3.js.map