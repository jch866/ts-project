let myAdd: (x: number, y: number) => number =
function(x: number, y: number): number { return x + y; };
//  myAdd =  (x: number, y: number): number=>{ return x + y; };

type myAdd1 = (x: number, y: number) => number ; //  类型别名 type
let myfn1:myAdd1;
myfn1 = (x: number, y: number): number=>{ return x + y; };

let myfn2 =  (x: number, y: number = 8): number=>{ return x + y; }; // y  设置默认值
// type  myAdd2 =  (x: number, y?: number): number=>number ;// y  可选

const handleData  = (arg1:number,...arg2:number[])=>{}     // 扩展
 
//重载
function handleData1(x:string):string[];
function handleData1(x:number):number[];
//函数实体 不是重载的一部分
function handleData1(x:any):any{
    if(typeof x ==='string'){
        return x.split('')
    }else{
        return x.toString().split('').map((item)=>Number(item));
    }
}
console.log(handleData1('abc'))
console.log(handleData1(123))