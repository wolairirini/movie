import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { FrontComponent } from './front/front.component';
import { FindComponent } from './find/find.component';
import { ClassifyComponent } from './classify/classify.component';
import { DetailComponent } from './detail/detail.component';
import { MoreComponent } from './more/more.component';
import { Code404Component } from './code404/code404.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { JingcaidaoshiComponent } from './jingcaidaoshi/jingcaidaoshi.component';
import { JingcaidaoshiService } from './service/jingcaidaoshi.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    FrontComponent,
    FindComponent,
    ClassifyComponent,
    DetailComponent,
    MoreComponent,
    Code404Component,
    FooterComponent,
    LayoutComponent,
    JingcaidaoshiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [JingcaidaoshiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
