import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04LianxiComponent } from './demo04-lianxi/demo04-lianxi.component';
import { Demo05BindingsComponent } from './demo05-bindings/demo05-bindings.component';
import { Demo06LianxiComponent } from './demo06-lianxi/demo06-lianxi.component';
import { Demo07StyleComponent } from './demo07-style/demo07-style.component';
import { Demo08DirectiveComponent } from './demo08-directive/demo08-directive.component';
import { TestDirective } from './test.directive';
import { Demo09LianxiDirective } from './demo09-lianxi.directive';
import { Demo09LianxiComponent } from './demo09-lianxi/demo09-lianxi.component';
import { ChangeBgDirective } from './change-bg.directive';
import { Demo10PipeComponent } from './demo10-pipe/demo10-pipe.component';
import { SexChangePipe } from './sex-change.pipe';
import { Demo11BtnComponent } from './demo11-btn/demo11-btn.component';
import { Demo12CartComponent } from './demo12-cart/demo12-cart.component';
import { Demo12ListComponent } from './demo12-list/demo12-list.component';
import { Demo12ItemComponent } from './demo12-item/demo12-item.component';
import { Demo13HeaderComponent } from './demo13-header/demo13-header.component';
import { Demo13CartComponent } from './demo13-cart/demo13-cart.component';
import { Demo14ChatroomComponent } from './demo14-chatroom/demo14-chatroom.component';
import { Demo14InputComponent } from './demo14-input/demo14-input.component';
import { Demo15HttpComponent } from './demo15-http/demo15-http.component';
import { Demo16LianxiComponent } from './demo16-lianxi/demo16-lianxi.component';
import { Demo17ServiceComponent } from './demo17-service/demo17-service.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04LianxiComponent,
    Demo05BindingsComponent,
    Demo06LianxiComponent,
    Demo07StyleComponent,
    Demo08DirectiveComponent,
    TestDirective,
    Demo09LianxiDirective,
    Demo09LianxiComponent,
    ChangeBgDirective,
    Demo10PipeComponent,
    SexChangePipe,
    Demo11BtnComponent,
    Demo12CartComponent,
    Demo12ListComponent,
    Demo12ItemComponent,
    Demo13HeaderComponent,
    Demo13CartComponent,
    Demo14ChatroomComponent,
    Demo14InputComponent,
    Demo15HttpComponent,
    Demo16LianxiComponent,
    Demo17ServiceComponent
  ],
  imports: [
    HttpClientModule,//网络请求 
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
