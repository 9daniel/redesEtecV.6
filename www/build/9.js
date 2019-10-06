webpackJsonp([9],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersModule", function() { return FollowersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followers__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowersModule = /** @class */ (function () {
    function FollowersModule() {
    }
    FollowersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__followers__["a" /* Followers */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__followers__["a" /* Followers */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__followers__["a" /* Followers */]
            ]
        })
    ], FollowersModule);
    return FollowersModule;
}());

//# sourceMappingURL=followers.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Followers; });
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



var Followers = /** @class */ (function () {
    function Followers(navCtrl, navParams, items, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        var items_here = [
            ['input1', 'input2'],
            ['input3', 'input4'],
            ['input5', 'input6'],
            ['input7', 'input8'],
            ['input9', 'input10'],
            ['input11', 'input12'],
            ['input13', 'input14'],
            ['input15', 'input16'],
            ['input17', 'input18'],
            ['input19', 'input20'],
        ];
        items_here[2]['about'] = "Logística";
        items_here[2]['name'] = "Thaina Vitoria";
        items_here[2]['profilePic'] = "../../assets/img/seguindo/user1.jpg";
        items_here[0]['about'] = "Secretariado";
        items_here[0]['name'] = "Sara Martins ";
        items_here[0]['profilePic'] = "../../assets/img/seguindo/user2.jpg";
        items_here[1]['about'] = "Secretariado";
        items_here[1]['name'] = "Marta Moraes";
        items_here[1]['profilePic'] = "../../assets/img/seguindo/user3.jpg";
        items_here[3]['about'] = "Secretariado";
        items_here[3]['name'] = "Caique Araujo";
        items_here[3]['profilePic'] = "../../assets/img/seguindo/user4.jpg";
        items_here[4]['about'] = "Secretariado";
        items_here[4]['name'] = "Ana Vitoria";
        items_here[4]['profilePic'] = "../../assets/img/seguindo/user5.jpg";
        items_here[5]['about'] = "Informática";
        items_here[5]['name'] = "Gustavo Henrique";
        items_here[5]['profilePic'] = "../../assets/img/seguindo/user6.jpg";
        items_here[6]['about'] = "Informática";
        items_here[6]['name'] = "Marcos Vegas";
        items_here[6]['profilePic'] = "../../assets/img/seguindo/user7.jpg";
        items_here[7]['about'] = "Informática";
        items_here[7]['name'] = "Monica Costa";
        items_here[7]['profilePic'] = "../../assets/img/seguindo/user8.jpg";
        items_here[8]['about'] = "Desenvolvimento de Sistemas";
        items_here[8]['name'] = "Hugo Moreira";
        items_here[8]['profilePic'] = "../../assets/img/seguindo/user9.jpg";
        items_here[9]['about'] = "Administração";
        items_here[9]['name'] = "Damares Beth";
        items_here[9]['profilePic'] = "../../assets/img/seguindo/user10.jpeg";
        this.currentItems = items_here;
    }
    Followers.prototype.followBack = function (user, slidingItem) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "Você começou a seguir " + user['name'] + " Com sucesso .",
                duration: 2000,
                position: 'top'
            });
            slidingItem.close();
            toast.present();
        }, 2000);
    };
    Followers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'followers',template:/*ion-inline-start:"H:\ionic\RedeEtec\redesEtec\src\pages\followers\followers.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Seguidores\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let item of currentItems" #slidingItem>\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.profilePic">\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p>{{item.about}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="dark" icon-start (click)="followBack(item,slidingItem)">\n          <ion-avatar item-start>\n            <img class="followers" src="../../assets/img/users/followings.png">\n          </ion-avatar>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"H:\ionic\RedeEtec\redesEtec\src\pages\followers\followers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Followers);
    return Followers;
}());

//# sourceMappingURL=followers.js.map

/***/ })

});
//# sourceMappingURL=9.js.map