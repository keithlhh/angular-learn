import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo03",
  templateUrl: "./demo03.component.html",
  styleUrls: ["./demo03.component.css"]
})
export class Demo03Component implements OnInit {
  isMember = true;
  myList=['元素1','元素2','元素3'];
  constructor() {}

  ngOnInit() {}
}
