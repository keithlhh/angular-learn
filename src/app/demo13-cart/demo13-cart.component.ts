import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo13-cart',
  templateUrl: './demo13-cart.component.html',
  styleUrls: ['./demo13-cart.component.css']
})
export class Demo13CartComponent implements OnInit {
  //定义接收msg值的变量
  /**
   * 数据的初始化，读，写
   */
  isShow=''
  constructor() { }

  ngOnInit() {
  }
  //事件myEvent触发时的处理函数
  handleMyEvent(msg){
    console.log('父组件接收到子组件传递来的数据时'+msg);
    this.isShow=msg;
  }
}
