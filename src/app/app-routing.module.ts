import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my/my.component';
import { FrontComponent } from './front/front.component';
import { FindComponent } from './find/find.component';
import { ClassifyComponent } from './classify/classify.component';
import { DetailComponent } from './detail/detail.component';
import { MoreComponent } from './more/more.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  {path:"",redirectTo:"/front",pathMatch:"full"},
  {path:"front",component:FrontComponent,},//首页
  {path:"classify",component:ClassifyComponent},//分类
  {path:"find",component:FindComponent},//发现
  {path:"my",component:MyComponent},//我的
  {path:"more",component:MoreComponent},//主页跳更多
  
  {path:"detail",component:DetailComponent}, //观看详情页

  {path:"**",component:Code404Component}//404页面
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
