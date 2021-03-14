class Point1{
    public x:number
    public y:number
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    public getPosition(){
        return `(${this.x},${this.y})`
    }
}
const point1 = new Point1(1,2);
console.log(point1);

class Parent{
    public name:string
    constructor(name:string){
        this.name = name;
    }
}
class Child extends Parent{
    constructor(name){
        super(name)
    }
}

//修饰符
// public 
// private 只能在类中使用
//protected
// readonly
//抽象类 不能创建实例 由子类来实现  与接口的区别
// abstract class  People{
//     constructor(name:string){}
//     public abstract printname():viod
// }
// const p1 = new People;//报错
// class Man extends People {
//     name:string
//     constructor(name:string){
//         super(name);
//         this.name = name;
//     }
//     public printname(){
//         console.log(this.name)
//     }
// }
// const man = new Man('lison');
// man.printname()

// abstract class Pepole{
//     abstract _name:string
//     abstract get insidename():string
//     abstract set insidename(name:string)
// }
// class P1 extends Pepole {
//     public _name:string
//     public insidename:string
// }

class Human1 {
    constructor(public name:string){}
}
let H1:Human1 = new Human1('lison')
class Human2 {
    constructor(public name:string){}
}
H1 = new Human2('haha');//Human1 Human2都是一样的构造类型 真要区别还要用到instanceof

interface Food{
    type:string
}
//类实现接口
class Meat implements Food{
    // public static type:string 报错  因为type是类上的，而不是实例上的；接口检查 的是实例上的属性
    public type:string 
}
class A {
    protected name:string
}
//接口继承类
interface B extends A{

}
class C extends A implements B{ //如果没有extends A 那A中protected name在C 中就会报错
    public name:string
}
//new()=>T 传入了一个new之后会返回T类型的构造函数constructor,即类的实例的 instanceof类本身
const create = <T>(c: new() =>T):T =>{
    return new c()
}
class Infos {
    public age:number
    constructor(){
        this.age = 18;
    }
}

let createA = create<Infos>(Infos);
console.log(createA)