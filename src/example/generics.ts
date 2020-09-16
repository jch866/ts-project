//泛型
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






















