import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-demo14-input",
  templateUrl: "./demo14-input.component.html",
  styleUrls: ["./demo14-input.component.css"]
})
export class Demo14InputComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  // 初始化空的字符串
  sendName = "";
  constructor() {}
  @Input() uName = "";
  ngOnInit() {}
  handleClick() {
    //1.获取输入框内的值
    this.myEvent.emit(this.sendName);
    this.sendName='';
    //2.将值通过触发事件(chatEvent)的方式传递给父组件(output EventEmitter)
  }
}
