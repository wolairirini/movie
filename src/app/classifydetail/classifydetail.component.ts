import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassifydetailService } from '../service/classifydetail.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-classifydetail',
  templateUrl: './classifydetail.component.html',
  styleUrls: ['./classifydetail.component.css']
})
export class ClassifydetailComponent implements OnInit {
  
  hidde=true;

  // 分类ID
  cId;
  private categoryName;
  
  private classdetails;

  constructor(private routeInfo:ActivatedRoute,private classifydetailService:ClassifydetailService,private http:Http) { 
    // 通过路由传递分类ID和名称
    this.cId  = this.routeInfo.snapshot.params["categoryId"];
    this.categoryName  = this.routeInfo.snapshot.queryParams["categoryName"];
    
  }

  ngOnInit() {

    this.classifydetailService.getclassdetails(this.cId)
    .subscribe(
      (product)=>{
        this.classdetails = product;
        // 传过来数据转化成json格式
        this.classdetails=JSON.parse(this.classdetails._body);
        this.classdetails=this.classdetails.content;
        console.log(this.classdetails);
      }
    )
  }

  goback(){
    window.history.back();  //返回上一页
  }

  sort(){
    this.hidde=!this.hidde;
  }

  gosort(newid){
    this.classifydetailService.getnewclassdetails(this.cId,newid)
    .subscribe(
      (product)=>{
        this.classdetails = product;
        // 传过来数据转化成json格式
        this.classdetails=JSON.parse(this.classdetails._body);
        this.classdetails=this.classdetails.content;
        console.log(this.classdetails);
      }
    )
  }

}
