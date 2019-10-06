import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';
import {Items} from "../../providers";

@IonicPage()
@Component({
  selector: 'news-feed',
  templateUrl: 'newsfeed.html'
})
export class NewsFeed {
  cardItems: any[];
  public press: number = 0;
  public likes: number = 10;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public items: Items, public toastCtrl: ToastController) {
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
  addNewsFeed() {
    let addModal = this.modalCtrl.create('NewsfeedCreate');
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.cardItems.push(item);
      }
    })
    addModal.present();
  }
  dblClickEvent(ev,user_name) {
    this.press++;
    if (this.press == 2) {
      let toast = this.toastCtrl.create({
        message: "Você gostou disto.",
        duration: 2000,
        position: 'top'
      });
      toast.present();
      this.press = 0;
      this.likes++;
    }
  }
}
