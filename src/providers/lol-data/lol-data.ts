import { Http, Response, ResponseOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

@Injectable()
export class LolDataProvider {

  private key: string = "f5617d913f7e42928c9a7bc6eee15573";
  private url: string = "https://newsapi.org/v2/top-headlines?sources=the-lad-bible&apiKey=" + this.key;

  constructor(private http: Http) {
    console.log('Hello LolData Provider');
  }

  getData(){
    return this.http.get(this.url).map(res=>res.json());
  }

}
