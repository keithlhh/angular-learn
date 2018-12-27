import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexChange'
  // 元数据，管道类可被调用的名称
})
export class SexChangePipe implements PipeTransform {
  // 过滤器
  // @param value:要处理的原始数据
  // @param args :传递的参数（可有可无）
  // 返回值：
  // vue : {{expression | myFilter1}}
  // angular : {{expression | myPipe1 | myPipe2:1:2}}
  //冒号后面为类型

  /*
    参数：
    true->男

    argus 的值false->body
  */
  transform(value: any, args?: any): any {
    if(value==1){
      if(args){
        return 'boy'
      }else{
        return '男'
      }
    }else if(value==0){
      if(args){
        return 'girl'
      }else{
        return '女'
      }
    }
    // return将处理后的结果返回
  }

}
