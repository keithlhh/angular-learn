import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04-lianxi',
  templateUrl: './demo04-lianxi.component.html',
  styleUrls: ['./demo04-lianxi.component.css']
})
export class Demo04LianxiComponent implements OnInit {
  stuList=[
    {stuName:'dingding',stuScore:55},
    {stuName:'tom',stuScore:65},
    {stuName:'jerry',stuScore:75},
    {stuName:'keith',stuScore:45},
    {stuName:'Zelma',stuScore:98}
  ]
  mytest:[1,2,3,5,6]
  constructor() { }

  ngOnInit() {
  }

}
