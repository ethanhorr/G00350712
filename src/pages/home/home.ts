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
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http, public lolData: LolDataProvider, private vibration: Vibration, public storage: Storage) {
  }


  openArticlePage() {
    this.vibration.vibrate(1000); //Vibrates when Random Button is pressed
    this.navCtrl.push(ArticlePage);
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }


}
