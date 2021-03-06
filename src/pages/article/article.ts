import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LolDataProvider } from '../../providers/lol-data/lol-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})

/**
 * Author: Ethan Horrigan
 */

export class ArticlePage {

  /**
   * Generates Random Int & Gets Data on page enter.
   */
  constructor(public navCtrl: NavController, public http: Http, public lolData: LolDataProvider) {
    this.randomInt();
    this.getLolData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

  randomArticle: any = [];
  newsArticles: any = [];
  r: number;

  /**
   * Generate random integer
   * (Used to select random article)
   */
  randomInt() {
    this.r = Math.floor(Math.random() * 9) + 1
    console.log(this.r);
  }

  /*
   * Navigates to the Home Page
   */
  openHome() {
    this.navCtrl.push(HomePage);
  }

  /*
   * Navigates to the Profile Page
   */
  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  /**
   * Grabs Data from API 
   * Adds to Random Article Array
   */
  getLolData() {
    this.lolData.getData().subscribe(data => {
      for (let i = 0; i < 10; i++) {
        this.newsArticles.push(data.articles[i]);
      }
      this.randomArticle.push(data.articles[this.r]);
      console.log(this.newsArticles);
      console.log(this.randomArticle);
    });
  }
}
