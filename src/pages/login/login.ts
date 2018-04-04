import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading;

  constructor(private nav: NavController, 
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController) {
      
  }


  loginWithFB(){

    this.loading = this.loadingCtrl.create({
      content: 'Login In...'
    });
    this.loading.present();

    this.userProvider.loginWithFB()
    .then(res => {
      this.loading.dismiss();
      this.nav.setRoot(HomePage);
    })
    .catch(err => {
      alert("Error occured");
      this.loading.dismiss();
    });
  }


  loginWithGoogle(){

    this.loading = this.loadingCtrl.create({
      content: 'Login In...'
    });
    this.loading.present();
    
    this.userProvider.loginWithGoogle()
    .then(res => {
      this.loading.dismiss();
      this.nav.setRoot(HomePage);
    })
    .catch(err => {
      alert("Error occured");
      this.loading.dismiss();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage1');
  }

}
