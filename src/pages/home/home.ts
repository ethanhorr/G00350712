import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  openLogin() {
    this.navCtrl.push(LoginPage);
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
