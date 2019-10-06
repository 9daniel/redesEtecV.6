import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Danilo bolt",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Classificado.",
  };


  constructor() {
    let items = [
      {
        "name": "Danilo bolt",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Sempre lute com garra e determinação pelos seus ideais. O Verdadeiro Campeão é aquele que acredita na Vitória !."
      },
      {
        "name": "Daniela lorena",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Todo mundo é um cientista maluco e a vida é o Laboratório. A gente está sempre experimentando, tentando achar um jeito de viver, de resolver os problemas, de se livrar da loucura do caos."
      },
      {
        "name": "Andressa Martins",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "A mosca que pousa no mel não pode voar... ASSIM, a alma que fica presa ao sabor do prazer, sente-se impedida em sua liberdade e contemplação."
      },
      {
        "name": "Leticia Moraes",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Não há satisfação maior do que aquela que sentimos quando proporcionamos alegria aos outros."
      },
      {
        "name": "Lucas Vital",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "O melhor líder não é necessariamente aquele que faz as melhores coisas. Ele é aquele que faz com que pessoas realizem as melhores coisas."
      },
      {
        "name": "Valdemir Pedro",
        "profilePic": "assets/img/speakers/giraffe.jpg",
        "about": "Feliz é aquele que transfere o que sabe e aprende o que ensina. Aula de Programação web foi bem produtiva hoje."
      },
      {
        "name": "Rosiene Silva",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Fizemos uma visita a empresa xxx de fibra ótica, descobrimos que ela não envia dados da mesma maneira que os cabos convencionais. Para garantir mais velocidade, todo o sinal é transformado em luz, com o auxilio de conversores integrados aos transmissores."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
