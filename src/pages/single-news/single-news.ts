import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NewsDetailsPage} from "../news-details/news-details";

/**
 * Generated class for the SingleNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-news',
  templateUrl: 'single-news.html',
})
export class SingleNewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    openNews(){
        this.navCtrl.push(NewsDetailsPage);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleNewsPage');
  }

}
