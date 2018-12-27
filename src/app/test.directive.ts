import { Directive,ElementRef,Input,OnInit} from '@angular/core';
//引入
@Directive({
  selector: '[appTest]' //指令选择器ElementRef
})
export class TestDirective {
  //
  @Input() appTest='';
  //构造函数：基本的初始化工作，在类被实例化成对象时，肯定会执行的一个方法
  constructor(private eleRef:ElementRef) { //private/public
    console.log("指令被调用了")//typeScript myName:string='zhangsan' :指定前面变量是什么类型
    console.log(this.eleRef);//找到是谁调用了这个指令
    this.eleRef.nativeElement.style.color='red'
    
  }

  ngOnInit(){
    // console.log("收到的数据是"+this.appTest)
  }
}

