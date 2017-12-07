import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class JingcaidaoshiService {

  constructor(private http:Http) { 
  }
  getFaxian(){
    return this.http.get("http://39.106.14.209:7777/moviefind")
      
  }

}
