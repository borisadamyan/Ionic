import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  urlImg = 'https://picsum.photos/320/480/?random';
  constructor(public navCtrl: NavController) {

  }

}
