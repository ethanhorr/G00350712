import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { LolDataProvider } from '../../providers/lol-data/lol-data';
import { Vibration } from '@ionic-native/vibration';
import { ArticlePage } from '../article/article';
import { ProfilePage } from '../profile/profile';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http, public lolData: LolDataProvider, private vibration: Vibration) {
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

  openAbout() {
    this.navCtrl.push(AboutPage);
  }

}
