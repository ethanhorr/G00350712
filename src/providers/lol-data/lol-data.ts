import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
@Injectable()
export class LolDataProvider {



  public key: string = "f5617d913f7e42928c9a7bc6eee15573";
  //private url: string = "https://newsapi.org/v2/top-headlines?sources=the-lad-bible&apiKey=" + this.key;



  constructor(private http: Http, public storage: Storage) {
    console.log('Hello LolData Provider');
    this.storage.get('mySource').then((val) => {
      this.news = val;
    });

  }

  public news: string;
  public url: string = this.news + this.key;


  getData(){
    this.storage.get('mySource').then((val) => {
      this.news = val;
    });
    return this.http.get(this.news + this.key).map(res=>res.json());
  }



}
