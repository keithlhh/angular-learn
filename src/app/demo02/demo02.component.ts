import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.css']
})
export class Demo02Component implements OnInit {
  myList = ['商品1','商品2','商品3'];
  constructor() { }

  ngOnInit() {
  }

}
