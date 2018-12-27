import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-demo16-lianxi',
  templateUrl: './demo16-lianxi.component.html',
  styleUrls: ['./demo16-lianxi.component.css']
})
export class Demo16LianxiComponent implements OnInit {
  myList:[];
  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
  }
  handleClick(){
    var that=this;
    this.myHttp.get('http://localhost:3000/goodsList').subscribe((res:any)=>{ //冒号后面是数据类型,将res对象类型赋值为任何类型
      console.log(res);
      this.myList=res;
    })
  }
}
