import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo14-chatroom",
  templateUrl: "./demo14-chatroom.component.html",
  styleUrls: ["./demo14-chatroom.component.css"]
})
export class Demo14ChatroomComponent implements OnInit {
  myTodo = [];
  constructor() {}

  ngOnInit() {}
  // 处理chatEvent的事件处理函数,父组件接收子组件的内容
  handleMyEvent(msg) {
    this.myTodo.push(msg)
  }
}
