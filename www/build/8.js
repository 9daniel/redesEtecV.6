webpackJsonp([8],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowerModule", function() { return FollowerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__following__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowerModule = /** @class */ (function () {
    function FollowerModule() {
    }
    FollowerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__following__["a" /* Following */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__following__["a" /* Following */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__following__["a" /* Following */]
            ]
        })
    ], FollowerModule);
    return FollowerModule;
}());

//# sourceMappingURL=following.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Following; });
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



var Following = /** @class */ (function () {
    function Following(navCtrl, navParams, items, toastCtrl, loadingCtrl) {
        // console.log(this.items.query());
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
        items_here[2]['name'] = "Caio Castro";
        items_here[2]['profilePic'] = "../../assets/img/seguidores/user1.jpg";
        items_here[0]['about'] = "Marketing";
        items_here[0]['name'] = "Chaves do 8 ";
        items_here[0]['profilePic'] = "../../assets/img/seguidores/user2.jpg";
        items_here[1]['about'] = "Marketing";
        items_here[1]['name'] = "Tati Zaqui";
        items_here[1]['profilePic'] = "../../assets/img/seguidores/user3.jpg";
        items_here[3]['about'] = "Secretariado";
        items_here[3]['name'] = "Sandy Leah";
        items_here[3]['profilePic'] = "../../assets/img/seguidores/user4.jpg";
        items_here[4]['about'] = "Administração";
        items_here[4]['name'] = "Luciano Huck";
        items_here[4]['profilePic'] = "../../assets/img/seguidores/user5.jpg";
        items_here[5]['about'] = "Desenvolvimento de Sistemas";
        items_here[5]['name'] = "Robert Downey Jr";
        items_here[5]['profilePic'] = "../../assets/img/seguidores/user6.jpg";
        items_here[6]['about'] = "Informática";
        items_here[6]['name'] = "Paul Walker";
        items_here[6]['profilePic'] = "../../assets/img/seguidores/user7.jpg";
        items_here[7]['about'] = "Secretariado";
        items_here[7]['name'] = "Marina Ruy Barbosa";
        items_here[7]['profilePic'] = "../../assets/img/seguidores/user8.jpg";
        items_here[8]['about'] = "logística";
        items_here[8]['name'] = "Camila Queiroz";
        items_here[8]['profilePic'] = "../../assets/img/seguidores/user9.png";
        items_here[9]['about'] = "Informática";
        items_here[9]['name'] = "Bruna Marquezine";
        items_here[9]['profilePic'] = "../../assets/img/seguidores/user10.jpg";
        // console.log(items_here);
        this.currentItems = items_here;
        // console.log(this.currentItems);
        // this.currentItems = this.items.query()
    }
    Following.prototype.unfollowSomeOne = function (user, slidingItem) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: "Você deixo de seguir " + user['name'] + " Com sucesso .",
                duration: 2000,
                position: 'top'
            });
            slidingItem.close();
            toast.present();
        }, 2000);
    };
    Following = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'following',template:/*ion-inline-start:"H:\ionic\RedeEtec\redesEtec\src\pages\following\following.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Seguindo\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let item of currentItems" #slidingItem>\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.profilePic">\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p>{{item.about}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button  color="dark" icon-start (click)="unfollowSomeOne(item,slidingItem)">\n          <!--<ion-icon ios="ios-return-left" md="md-return-left"></ion-icon>-->\n          <ion-avatar item-start>\n            <img class="followings" src ="../../assets/img/users/followers.png">\n          </ion-avatar>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"H:\ionic\RedeEtec\redesEtec\src\pages\following\following.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Following);
    return Following;
}());

//# sourceMappingURL=following.js.map

/***/ })

});
//# sourceMappingURL=8.js.map