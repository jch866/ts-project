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
obj2[s5] = 'dufu'//可以更改
// obj2.s5 = 'dufu'// 报错

//访问属性 obj['name']   obj.name    obj[SymbolName] 

//以下四种方法都得不到以Symbol为key的值
for(const key in obj2){
    console.log(key)
}
console.log(Object.keys(obj2))
console.log(Object.getOwnPropertyNames(obj2))
console.log(JSON.stringify(obj2))
// 得到以Symbol为key的值
console.log(Object.getOwnPropertySymbols(obj2)) //只有symbol属性
console.log(Reflect.ownKeys(obj2)) //所有属性

//Symbol.for()  Symbol.keyFor()

const s6 = Symbol('lison');
const s7 = Symbol('lison');
const s8 = Symbol.for('lison');
const s9 = Symbol.for('lison');//用这个字符串去找全局有没有用这个字符串创建的，有就直接用,没找到，就直接创建一个
//  (s8===s9) true
const s10 = Symbol.for('haha');
console.log(Symbol.keyFor(s10)) // haha  Symbol.for()创建的
console.log(Symbol.keyFor(s6))  //undefined  Symbol()创建的

//instance  
const obj3 = {
    [Symbol.hasInstance](otherobj){
        console.log(otherobj)
    }
}
console.log({a:'3'} instanceof <any>obj3)

let obj4:unknown = {
    [Symbol.toPrimitive](type){
        console.log(type)
    }
}
// const res = (obj4 as number)++
const res = `abc${obj4}`
//ES2015正则表达式在调用match()方法时，其实就是调用的regexp[Symbol.match]()
// Symbol.hasInstance
// 一个确定一个构造器对象识别的对象是否为它的实例的方法。被 instanceof 使用。
// Symbol.isConcatSpreadable ; array[Symbol.isConcatSpreadable]
// 一个布尔值，表明一个对象是否应该flattened为它的数组元素。被 Array.prototype.concat() 使用。
// Symbol.unscopables
// 拥有和继承属性名的一个对象的值被排除在与环境绑定的相关对象外。
// Symbol.species
// 一个用于创建派生对象的构造器函数。
// Symbol.toPrimitive
// 一个将对象转化为基本数据类型的方法。
// Symbol.toStringTag
// 用于对象的默认描述的字符串值。被 Object.prototype.toString() 使用。
// 1: Symbol.hasInstance 一个在执行 instanceof 时调用的方法，用于检测对象的继承信息
// 2: Symbol.isConcatSpreadable 一个布尔值，用于表示当传递一个集合作为Array.prototype.concat()的参数是，是否应该将集合内的元素拍平到同一层级
// 3: Symbol.iterator 在迭代器和生成器那篇文章已经细讲过

// 4: Symbol.match 一个在调用String.prototype.match()时调用的方法，用于比较字符串
// 5: Symbol.replace 一个在调用String.prototype.replace()时调用的方法，用于替换字符串的子串
// 6: Symbol.search 一个在调用String.prototype.search()时调用的方法，用于定位子串在字符串中的位置
// 7: Symbol.split 一个在调用String.prototype.split()时调用的方法，用于分割字符串

// 8: Symbol.species 用于创建派生对象的构造函数
// 9: Symbol.toPrimitive 一个返回对象原始值的方法
// 10: Symbol.toStringTag 一个在调用Object.prototype.toString()时使用的字符换，用于创建对象的描述
// 11: Symbol.unscopables 一个定义了一些不可被with语句引用的对象属性名称的对象集合