// const s1 =Symbol();
// console.log(s1)
// const s2 =Symbol();
// console.log(s2)
// console.log(s2===s1) //error

const s3 = Symbol('li')
const s4 = Symbol('li')
//Argument of type '{ s: string; }' is not assignable to parameter of type 'string | number | undefined'.
// const s5 = Symbol({s:'s'}) //error  
console.log(s4.toString())
console.log(!s4)
console.log(Boolean(s4));

const s5 = Symbol('name');
let obj2 = {
    [s5]:'libai',
    age:21,
    sex:'male'
}
obj2[s5] = 'dufu'

//访问属性 obj['name']   obj.name    obj[SymbolName] 

//以下四种方法都得不到以Symbol为key的值
for(const key in obj2){
    console.log(key)
}
console.log(Object.keys(obj2))
console.log(Object.getOwnPropertyNames(obj2))
console.log(JSON.stringify(obj2))
// 得到以Symbol为key的值
console.log(Object.getOwnPropertySymbols(obj2))
console.log(Reflect.ownKeys(obj2))

//Symbol.for()  Symbol.keyFor()

const s6 = Symbol('lison');
const s7 = Symbol('lison');
const s8 = Symbol.for('lison');
const s9 = Symbol.for('lison');//用这个字符串去找全局有没有用这个字符串创建的，有就直接用,没找到，就直接创建一个
//  (s8===s9) true
const s10 = Symbol.for('haha');
console.log(Symbol.keyFor(s10)) // haha
console.log(Symbol.keyFor(s6))  //undefined