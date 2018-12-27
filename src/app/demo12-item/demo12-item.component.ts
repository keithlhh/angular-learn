import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-demo12-item',
  templateUrl: './demo12-item.component.html',
  styleUrls: ['./demo12-item.component.css']
})
export class Demo12ItemComponent implements OnInit {
  @Input() myItem = ''
  constructor() { }

  ngOnInit() {
  }

}
