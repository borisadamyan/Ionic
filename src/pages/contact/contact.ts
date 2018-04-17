import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsPage} from "../news/news";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
    goNews(){
        this.navCtrl.push(NewsPage);
    }
}
