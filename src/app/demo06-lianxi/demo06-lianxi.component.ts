import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06-lianxi',
  templateUrl: './demo06-lianxi.component.html',
  styleUrls: ['./demo06-lianxi.component.css']
})
export class Demo06LianxiComponent implements OnInit {
  toShow=[] //存储的输入框数据
  toDo="" //定义，读， 写
  add(){
    //1.获取输入框的值

    //2.插入到列表绑定背后的数据头部
    this.toShow.unshift(this.toDo)
  }
  constructor() { }

  ngOnInit() {
  }

}
