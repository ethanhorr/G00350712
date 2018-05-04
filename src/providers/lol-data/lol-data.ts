import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Author: Ethan Horrigan
 */

@Injectable()
export class LolDataProvider {

  public key: string = "f5617d913f7e42928c9a7bc6eee15573";
  public default: string = "https://newsapi.org/v2/top-headlines?sources=the-lad-bible&apiKey=";

  constructor(private http: Http, public storage: Storage, private alertCtrl: AlertController) {
    console.log('Hello LolData Provider');
    this.storage.get('mySource').then((val) => {
      this.news = val;
    });

  }

  public news: string;
  public url: string = this.news + this.key;

  /**
   * Alerts user if no source Selected
   */
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'No News Source Selected!',
      subTitle: 'Please select a news source in Profile!',
      buttons: ['Ok']
    });

    alert.present();
  }

  getData() {
    this.storage.get('mySource').then((val) => {
      if (val == null) {
        this.doAlert();
      }
      else {
        this.news = val;
      }
    });
    return this.http.get(this.news + this.key).map(res => res.json());
  }



}
