import { Injectable } from '@angular/core';

@Injectable({ //注射 注入 到组件
  providedIn: 'root' //root 根模块
})
export class LogService { //导出名称

  constructor() { }
  print1(msg){
    console.log(msg)
  }
}
