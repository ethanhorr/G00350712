import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openAbout() {
    this.navCtrl.push(AboutPage);
  }

  setSource(source) {
    switch (source) {
      case 1:
      this.storage.set('newsSource', 'LadsBible');
      break;
      case 2:
      this.storage.set('newsSource', 'SportsBible');
      break;
      case 3:
      this.storage.set('newsSource', 'IGN');
      break;
    }
    console.log("Set");
  }

  getData() {
    this.storage.get('newsSource').then((val) => {
      console.log('Your source is', val);
    });
  }

  saveData() {

  }
}
