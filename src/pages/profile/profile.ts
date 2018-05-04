import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

/**
 * Author: Ethan Horrigan
 */

export class ProfilePage {

  /**
   * String to hold News Source API URL
   */
  public mySource: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.mySource);
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

  /**
   * Saves News Source API Link to Storage
   */
  save() {
    this.storage.set("mySource", this.mySource);
    window.location.reload();
    console.log(this.mySource);
  }

  /**
   * Retrieve News Source API Link in Storage
   */
  getData() {
    this.storage.get('mySource').then((val) => {
      console.log('Your source is', val);
    });
  }

  /**
   * Clears storage
   */
  clearStorage() {
    this.storage.clear();
    window.location.reload();
  }

}
