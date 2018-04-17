import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsPage} from "../news/news";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  urlImg = 'https://picsum.photos/320/480/?random';
  constructor(public navCtrl: NavController) {

  }
    goNews(){
        this.navCtrl.push(NewsPage);
    }
}
