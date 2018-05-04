import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public mySource: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.mySource);
  }

  openHome() {
    this.navCtrl.push(HomePage);
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  save() {
    this.storage.set("mySource", this.mySource);
      window.location.reload();
    console.log(this.mySource);
  }

  getData() {
    this.storage.get('mySource').then((val) => {
      console.log('Your source is', val);
    });
  }

}
