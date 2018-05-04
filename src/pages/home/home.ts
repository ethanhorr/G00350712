import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LolDataProvider } from '../../providers/lol-data/lol-data';
import { Vibration } from '@ionic-native/vibration';
import { ArticlePage } from '../article/article';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/**
 * Author: Ethan Horrigan
 */

export class HomePage {

  constructor(public navCtrl: NavController, public http: Http, public lolData: LolDataProvider, private vibration: Vibration, public storage: Storage) {
  }

  default: string;

  /**
   * Navigate to Article Page & Vibrate when pressed
   */
  openArticlePage() {
    this.vibration.vibrate(1000); //Vibrates when Random Button is pressed
    this.navCtrl.push(ArticlePage);
  }

  /**
   * Navigate to Home Page
   */
  openHome() {
    this.navCtrl.push(HomePage);
  }

  /**
   * Navigate to Profile Page
   */
  openProfile() {
    this.navCtrl.push(ProfilePage);
  }


}
