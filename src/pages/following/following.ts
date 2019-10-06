import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, LoadingController} from 'ionic-angular';

import {Items, User} from '../../providers';
import {ItemSliding} from "ionic-angular/umd";

@IonicPage()
@Component({
  selector: 'following',
  templateUrl: 'following.html'
})
export class Following {
  currentItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

    // console.log(this.items.query());

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

  unfollowSomeOne(user: User,slidingItem: ItemSliding) {

    let loading = this.loadingCtrl.create({
      content: 'Por favor aguarde...'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: "Você deixo de seguir "+user['name']+" Com sucesso .",
        duration: 2000,
        position: 'top'
      });
      slidingItem.close();
      toast.present();
    }, 2000);
  }
}
