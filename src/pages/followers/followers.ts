import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,LoadingController} from 'ionic-angular';
import {Items, User} from '../../providers';
import {ItemSliding} from "ionic-angular/umd";

@IonicPage()
  @Component({
  selector: 'followers',
  templateUrl: 'followers.html'
})
export class Followers {
  currentItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

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


  followBack(user: User, slidingItem: ItemSliding) {
    let loading = this.loadingCtrl.create({
      content: 'Por favor aguarde...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: "Você começou a seguir " + user['name'] + " Com sucesso .",
        duration: 2000,
        position: 'top'
      });
      slidingItem.close();
      toast.present();
    }, 2000);
  }
}
