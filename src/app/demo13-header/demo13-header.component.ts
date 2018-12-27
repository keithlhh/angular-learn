import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-demo13-header",
  templateUrl: "./demo13-header.component.html",
  styleUrls: ["./demo13-header.component.css"]
})
export class Demo13HeaderComponent implements OnInit {
  constructor() {}
  @Output() myEvent=new EventEmitter()
  // 定义事件类型
  ngOnInit() {}
  /**
  * 能够触发myEvent事件并且将true/false事件，
  * *点击登录注销时调用此方法
    @param isLogin true/false
  */
  operateLogin(isLogin) {
    this.myEvent.emit(isLogin);
  }
}
