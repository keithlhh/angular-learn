import { Component, OnInit ,Input} from '@angular/core';
//1.属性传值
// 2.import进行引入,处理数据
@Component({
  selector: 'app-demo11-btn',
  templateUrl: './demo11-btn.component.html',
  styleUrls: ['./demo11-btn.component.css']
})
export class Demo11BtnComponent implements OnInit {
  @Input() myTitle = ''
  //@input引用传递进来的值
  constructor() { }

  ngOnInit() {
    
  }

}
