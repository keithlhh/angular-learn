import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-demo15-http',
  templateUrl: './demo15-http.component.html',
  styleUrls: ['./demo15-http.component.css']
})
export class Demo15HttpComponent implements OnInit {

  //将HttpClient类实例化成一个对象
  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
  }
  handleClick(){
    console.log("btn is clicked");
    //发起一次HTTP请求:HttpClient
    //网络请求：1.url地址 2.参数的个数和类型 3.返回值和预期的数据是否一致

    /*异步处理promise
    // async/await
    // callback
    // 观察者 订阅者模式observables/subscribe
    // rxj s
    */
    var url='http://jsonplaceholder.typicode.com/users';
    this.myHttp.get(url).subscribe((res)=>{
      console.log(res);
    })
  }
}
