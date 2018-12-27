import { Directive ,ElementRef,Input,OnInit} from '@angular/core';
//自定义指令的配置
@Directive({
  selector: '[appDemo09Lianxi]'
})
export class Demo09LianxiDirective {

  @Input() appDemo09Lianxi=''
  //接收appChangeBg所传过来的属性值
  constructor(
    private eleRef:ElementRef
    //ts语法后边是类型 前面是变量
    //将类实例化
  ) { 
    console.log(this.eleRef)
  }
  //组件初始化时的构造函数
  ngOnInit(){
    this.eleRef.nativeElement.style.backgroundColor=this.appDemo09Lianxi;
    console.log(this.appDemo09Lianxi)
  }
}
