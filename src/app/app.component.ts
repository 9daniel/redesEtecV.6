import {Component, ViewChild} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import {Config, Nav, Platform, ToastController, LoadingController} from 'ionic-angular';
import {FirstRunPage} from '../pages';
import {Settings} from '../providers';

@Component({
  selector: 'side-main-menu',
  template: `<ion-menu [content]="content">
      <ion-header class="headerMAin1">
        <ion-toolbar>
          <ion-buttons left>
            <button class="createUser" ion-button icon-only menuClose (click)="openPage(pages[4])">
              <ion-icon name="ios-create-outline" md="ios-create-outline" style="color:  #ffffff !important;"> Menu</ion-icon>
            </button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content class="sideMenuIoncContent1">
        
        <ion-list class="headerMAin1">
          <ion-item style="background: #f31d1d !important;border-bottom: 0.55px solid #ffffff !important;">
            <ion-list class="logoImage" menuClose (click)="openPage(pages[4])">
              <div class="circle-pic" text-center #profilePic [style.background-image]="'url(../../assets/img/teste.jpg)'"></div>
              <!--<img class="circle-pic" src="../../assets/img/teste.jpg"/>-->
            </ion-list>
            <h3 class="userName">DANIEL COSTA</h3>
            <h3 class="userDetails">TÉCNICO EM INFORMÁTICA</h3>
            </ion-item>
        </ion-list>
        
        <ion-list>
          
          <button menuClose ion-item no-lines style="border-top: 1.55px solid #(252, 0, 0, 0.1); !important;"
                  [class.activeHIghlight]="checkActive(pages[5])" (click)="openPage(pages[5])" class="buttonSIdeBAr1">
            <ion-icon ios="ios-list-box-outline" class="sidebarCss" md="ios-list-box-outline"></ion-icon>
            Atividades
          </button>
          <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[3])"
                  (click)="openPage(pages[3])" class="buttonSIdeBAr1">
            <ion-icon ios="ios-notifications-outline" class="sidebarCss" md="ios-notifications-outline"></ion-icon>
            Notícias
          </button>
          
          <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[4])"
                  (click)="openPage(pages[4])" class="buttonSIdeBAr1">
            <ion-icon ios="ios-person-outline" class="sidebarCss" md="ios-person-outline"></ion-icon>
            Perfil
          </button>
          
          <button menuClose no-lines style="border-bottom: 1.55px solid #(252, 0, 0, 0.1); !important;" ion-item
                  [class.activeHIghlight]="checkActive(pages[0])" (click)="openPage(pages[0])" class="buttonSIdeBAr1">
            <ion-icon class="sidebarCss" ios="ios-log-out-outline" md="ios-log-out-outline"></ion-icon>
            Sair
          </button>
          
        </ion-list>
        
      </ion-content>


      <ion-footer class="rodape1">
      <ion-title>RedeEtec</ion-title>
  </ion-footer>

    </ion-menu>
    <ion-nav #content [root]="rootPage"></ion-nav>`
})


export class MyApp {

  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  activePage: any;

  pages: any[] = [
    {title: 'Bem vindo', component: 'WelcomePage'},
    {title: 'Registrar-se', component: 'LoginPage'},
    {title: 'Mais Detalhes', component: 'ListMasterPage'},
    {title: 'Novas Noticias', component: 'NewsFeed'},
    {title: 'Perfil', component: 'ProfilePage'},
    {title: 'Atividades Etec', component: 'UsersPage'},
    {title: 'Seus Seguidores', component: 'Followers'},
    {title: 'Seguindo', component: 'Following'}
  ]


  constructor(private translate: TranslateService, platform: Platform, settings: Settings,
              private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1ABC9C');

    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }
    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    if (page.component == "WelcomePage") {
      let loading = this.loadingCtrl.create({
        content: 'Por favor aguarde...'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.nav.setRoot(page.component);
        this.activePage = "random";
        let toast = this.toastCtrl.create({
          message: "Você efetuou o logout com sucesso",
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }, 2000);
    } else {
      this.nav.setRoot(page.component);
      this.activePage = page;
      console.log(page.component);
    }
  }
  checkActive(page) {
    return page == this.activePage;
  }
}
