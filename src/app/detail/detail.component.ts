import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  introducebtn="introduce top";

  constructor() { }

  ngOnInit() {
  }

  goback(){
    window.history.back();  //返回上一页
  }

  lookintroduce(){
    if(this.introducebtn=="introduce top"){
      this.introducebtn="introduce bottom";
    }else{
      this.introducebtn="introduce top";
    }
    
  }

}
