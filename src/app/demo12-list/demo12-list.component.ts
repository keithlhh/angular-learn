import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo12-list',
  templateUrl: './demo12-list.component.html',
  styleUrls: ['./demo12-list.component.css']
})
export class Demo12ListComponent implements OnInit {
  listObj=[
    {stuName:'tom1',stuScore:'35'},
    {stuName:'tom2',stuScore:'63'},
    {stuName:'tom3',stuScore:'83'},
    {stuName:'tom4',stuScore:'43'},
    {stuName:'tom5',stuScore:'99'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
