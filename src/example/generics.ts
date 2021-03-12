//泛型 抽像出参数的类型 动态传入不同类型的参数类型，如string ,nubmer等等
// const getArray = <T>(value:T,times:number=5):T[]=>{
//     return new Array(times).fill(value)
// }
// console.log(getArray<number>(123,4).map(item=>item.toFixed()))


// const getArray = <T,U>(arg1:T,arg2:U,times:number=5): [T,U][]=>{
//     return new Array(times).fill([arg1,arg2]);
// }

// console.log(getArray<number,string>(2,'a',6)) //<number,string>这个不写，ts可以推断出类型

// let getArray:<T>(arg:T,times:number)=>T[] // 定义函数类型 1

// getArray = (arg:any,times:number)=>{
//     return new Array(times).fill(arg)
// }

// type GetArray:<T>(arg:T,times:number)=>T[] // 定义函数类型 2
// let getArray:GetArray = (arg:any,times:number)=>{
//     return new Array(times).fill(arg)
// }

// interface GetArray <T>{
//     (arg:T,times:number):T[],
//     array:T[]
// }

// interface ValueWithLength { 
//     length:number
// }

// let getArray = <T extends ValueWithLength>(arg:T,times:number):T[]=>{  //泛型继承接口
//     return new Array(times).fill(arg)
// }
// getArray([1,2],4)
// getArray({length:3},4)
// getArray(123,4) //报错了

const getProps = <T,K extends keyof T>(obj:T,propName:K)=>{ // 控制属性在可控范围内
    return obj[propName]
}
const obj1 = {
    "a":1,
    "b":2
}
getProps(obj1,'a')
// getProps(obj1,'c') //error


// class Queue<T>{
//     private data = [];
//     push(item:T){
//        return this.data.push(item)
//     }
//     pop():T{
//         return this.data.shift();
//     }
// }
// const queue = new Queue<number>();
// queue.push(1);
// console.log(queue.pop().toFixed())

// const queue2 = new Queue<string>();
// queue2.push('str');
// console.log(queue2.pop().length)

interface keypair<T,U>{
    key:T,
    value:U
}
let key1:keypair<number,string> = {key:1,value:"name"}
let key2:keypair<string,number> = {key:"name",value:2}

let garr:number[] = [1,2,3];
let garr1:Array<number> = [1,2,4,5,6];

// interface Iplus{ //interface描述函数类
//     (a:number,b:number):number;
// }
interface Iplus<T>{ //interface描述函数类 会用泛型
    (a:T,b:T):T;//函数泛型以()为KEY
}
function plus(a:number,b:number):number{
    return a+b;
}
function connect(a:string,b:string):string{
    return a+b
}
let a:Iplus<number> = plus;
let b:Iplus<string> = connect;


type PlusType = (x:number,y:number)=>number;
function getSum(x:number,y:number):number{
    return x+y;
}
const getSum2:PlusType = getSum;

type nameResolver = ()=>string;
type nameOrResoler = string | nameResolver; //联合类型
function getName(n:nameOrResoler):string{
    if(typeof n === 'string'){
        return n
    }else{
        return n();
    }
}
//type assertion  类型断言 不通断言成联合类型中不存在的类型
function  getLength1(input:string|number):number{
    // const str = input as String;
    // if(str.length){
    //     return str.length;
    // }else{
    //     const number = input as Number;
    //     return number.toString().length;
    // }
    if(<String>input){ // 类型断言的快捷写法不用 as
        return (<String>input).length
    }else{
        return input.toString().length;
    }
}











