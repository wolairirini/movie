import { Component, OnInit } from '@angular/core';
import { ClassifydetailService } from '../service/classifydetail.service';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.css']
})
export class ClassifyComponent implements OnInit {
  

  private classdetail;
  constructor(private classifydetailService:ClassifydetailService,private http:Http) { }

  ngOnInit() {
    this.classifydetailService.getclassify()
    .subscribe(
      (product)=>{
        this.classdetail = product;
        this.classdetail=JSON.parse(this.classdetail._body)
        console.log(this.classdetail);
      }
    )
  }

}
