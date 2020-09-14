
let num : number;
let bool:boolean = false;
// 数组类型：
let arr:number[];
let arr1:(number|string)[]
let arr2:Array<number>
// 元组类型
let tuple :[string ,number,boolean];
tuple = ['123',12,false];

// 枚举类型
enum Roles{
    ADMIN,
    USER
}
console.log(Roles.ADMIN)

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//any类型

//void类型
function consoleText(text:string):void{
    console.log(text)
}
consoleText('console test')
//null undefined

let u:undefined = undefined
let n:null = null;
//num = undefined;
//never类型 是任何类型的子类型
const errorFn = (msg:string):never=>{
    throw new Error(msg)
}
const infiniteFn = ():never=>{
    while(true){}
}
// let neverVar = ((){
//     while(true){}
// })()
// num = neverVar;
//object类型
let obj = {}
function getObj(obj:object):void{
    console.log(obj)
}
getObj(obj)

//类型断言   1.<string>target   2. target as string
let  getLength = (target:string|number):number=>{
    if((<string>target).length||(target as string).length===0){
        return (<string>target).length;
    }else{
        return target.toString().length;
    }
}
getLength(123)
getLength('abc')


