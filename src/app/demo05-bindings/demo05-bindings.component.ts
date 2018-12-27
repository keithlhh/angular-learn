import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05-bindings',
  templateUrl: './demo05-bindings.component.html',
  styleUrls: ['./demo05-bindings.component.css']
})
export class Demo05BindingsComponent implements OnInit {
  // 双向绑定数据
  myName='zhangsan'
  myUrl='http://www.baidu.com'
  handleClick(){
    console.log('btn is clicked');
  }
  constructor() { }

  ngOnInit() {
  }

}
