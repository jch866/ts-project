class Parent{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    static getNames(){
        return this.name
    }
}
class Child extends Parent{
    constructor(name,age){
        super(name);
        this.age = age;
    }
}
const c = new Child('lison',18);    
console.log(c instanceof Child) //true
console.log(c instanceof Parent) //true
console.log(Object.getPrototypeOf(Child)===Parent) //true


// super作为函数 super 作为函数调用时，内部的 this 指的是子类实例
// super作为对象 super 作为对象时，在普通方法中，指向父类的原型对象，即 Parent1.prototype；在静态方法中，指向父类。
//     在普通方法中指向的是父类的原型对象
//     在静态方式中指向父类  super作为对象，用在静态方法之中，这时 super 将直接指向父类，而不是父类的原型对象。
class Parent1{
    constructor(){
        this.type  = 'parent'
    }
    getName(){
        return this.type;
    }
}
Parent1.getType=()=>{
    return 'is parent'
}
class Child1 extends Parent1{
    constructor(){
        super();
        console.log('constructor: '+super.getName())
    }
    getParentName(){
        console.log('getParentName: '+super.getName())
    }
    static getParentType(){
        console.log('getParentType: '+super.getType())
    }
}
const c1 = new Child1();
c1.getParentName();
// c1.getParentType();
Child1.getParentType();


class Parent2 {
    constructor(){
        this.name ='parent'
    }
    print(){
        console.log(this.name)
    }
}
class Child2 extends Parent2{
    constructor(){
        super();
        this.name = 'child'
    }
    childprint(){
        super.print();
        // console.log(super) // 单独使用就报错 https://www.cnblogs.com/wenxuehai/p/10361653.html
    }
}
const c2 = new Child2();
c2.childprint();

let objs = new Object();
console.log(objs.__proto__ === Object.prototype)

// Boolean
// Object
// Array
// String
// Error
// Number
// Function
// RegExp 
// ES5中原生对象没法继承 es6中可以
class CustomArray extends Array{
    constructor(...args){
        super(...args)
    }
}
const myarray = new CustomArray(3,4,5)
console.log(myarray)



