import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ClassifydetailService {

  constructor(private http:Http) { }

  getclassify(){
    return this.http.get("http://39.106.23.170:7777/category")
    // .map(res=>res.json())
  }


}

