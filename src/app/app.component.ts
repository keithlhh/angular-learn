import { Component } from '@angular/core';

@Component({//装饰器:用来描述当前人类是什么样子
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
