// class Point{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     getPosition(){
//         return `${this.x}:${this.y}`
//     }
// }
// const p1 = new Point(1,2);
// console.log(p1)

// console.log(p1.hasOwnProperty("x"))
// console.log(p1.hasOwnProperty("getPosition"))
// console.log(p1.__proto__.hasOwnProperty("getPosition"))


var info = {
    _age:18,
    set age(newval){
        if(newval>18){
            console.log('big')
        }else{
            console.log('small')
        }
    },
    get age(){
        return this._age;
    }
}
info.age = 20;
info.age = 15;

// const func = function(){}
// function func(){}

// class Info{
//     constructor(){}
// }
// const Info = class C{
//     constructor(){}
// }
// const Info = class {
//     constructor(){}
// }

class User {
    static getname(){
        return User.name
    }
}
const u1 = new User();
// console.log(u1.getname())  // error
// console.log(User.getname())
class Peop{
    z = 0 // 直接设置值也可以
    constructor(){
        this.x =0
    }
}
Peop.y =1; //类似静态属性
let p1 = new Peop();
// console.log(p1.x) //0
// console.log(p1.y) // undefined
// console.log(p1.__proto__.y) // undefined

//a.js 保护私有方法或者属性
const _fn2 = ()=>{}
class Human{
    fn1(){
        _fn2.call(this)
    }
}
const func1 = Symbol('func1');
export default class Myfn {
    static [func1](){
        return 'func1'
    }
}
//b.js  
// import Myfn from a.js;
// const h1 = new Human();
// let myfn1 = new Myfn();
// console.log(myfn1)

// class ClassWithPrivateMethod {  //私有类字段，写法是使用一个#作为前缀
//     #privateMethod() {
//       return 'hello world'
//     }
  
//     getPrivateMessage() {
//         return this.#privateMethod()
//     }
// }

// function MyFn2(){
//     console.log(new.target)
// }
// const myfn2 = new MyFn2(); //有值
// const myfn3 = MyFn2(); //undefined
 
// class Carrot {
//     constructor(){
//         console.log(new.target) 
//     }
// }
// const myfn4 =new Carrot();  

//继承
class parent{
    constructor(){
         console.log(new.target) 
         //new.target 指向的是初始化类的类定义
        // if(new.target === parent){//规定只能用子类来实例
        //     throw new Error('不能实例化')
        // }
    }
}
class child extends parent{
    constructor(){
        super()
    }
}
const child1 = new child()
// new parent() //Uncaught Error: 不能实例化