import { Component, OnInit,OnChanges } from '@angular/core';
import { JingcaidaoshiService } from '../service/jingcaidaoshi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jingcaidaoshi',
  templateUrl: './jingcaidaoshi.component.html',
  styleUrls: ['./jingcaidaoshi.component.css']
})
export class JingcaidaoshiComponent implements OnInit {

  constructor(private JC:JingcaidaoshiService) { }

  private movies=[];
  toggle(e){
    var video = e.target;
    //console.log(e)
    if(video.paused){
      video.play();
    }else{
      video.pause();
    }
  }
  ngOnInit() {
    this.JC.getFaxian()
      .subscribe((result)=>{
        this.movies = result.json().content
        console.log(this.movies)
      })
  }

}

export class Movies{

}