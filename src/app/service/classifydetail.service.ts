import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ClassifydetailService {

  // categoryid;
  constructor(private http:Http) { }

  getclassify(){
    return this.http.get("http://39.106.23.170:7777/category")
    // .map(res=>res.json())
  }

  getclassdetails(categoryid){
    return this.http.get("http://39.106.14.209:7777/movie/"+categoryid+"/0")
  }

  getnewclassdetails(categoryid,newst){
    return this.http.get("http://39.106.14.209:7777/movie/"+categoryid+"/"+newst)
  }


}

