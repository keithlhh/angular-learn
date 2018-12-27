import { Component, OnInit } from '@angular/core';
import {LogService} from '../log.service'
@Component({
  selector: 'app-demo17-service',
  templateUrl: './demo17-service.component.html',
  styleUrls: ['./demo17-service.component.css']
})
export class Demo17ServiceComponent implements OnInit {

  //构造函数中实例化
  constructor(private myService:LogService) {
    this.myService.print1("构造函数被调用了")
   }

  ngOnInit() {
    this.myService.print1("组件初始化完毕")
  }

}
