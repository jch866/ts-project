// const getfullname = ({firstname,lastname})=>{
//     return `${firstname} ${lastname}`
// }


interface NameInfo{
    firstname:string,
    lastname:string
}
const getfullname = ({firstname,lastname}:NameInfo)=>{
    return `${firstname} ${lastname}`
}
// const getfullname = ({firstname,lastname}:{firstname:string,lastname:string})=>{
//     return `${firstname} ${lastname}`
// }
getfullname({firstname:'a',lastname:'b'});

interface Vegetables{
    color?:string, //可选属性
    type:string,
    [prop:string]:any //多的属性
}
const getVegetables = ({color,type}:Vegetables)=>{
 return `A ${color?(color+''):''} ${type}`
}
let vege = {color:"red",type:'tomato',size:2};
// console.log(getVegetables({color:"red",type:'tomato'} as Vegetables))
// console.log(getVegetables(vege))

interface arrInter {
    0:string,
    readonly 1:number //指定类型只可读
}
let arr01:arrInter = ['abc',3];

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

//函数接口
// 下面的接口简化成  type addFn =  (num1:number,num2:number) => number 
interface addFn {
    (num1:number,num2:number):number
}
const add:addFn=(n1,n2)=>  n1+n2


//索引类型
interface RoleDic1 {
    [id:number]:string
}

const role1:RoleDic1 = {
   1:'admin'
}
// const role2:RoleDic = { //报错了
//     "a":'admin'
// }
interface RoleDic2 {
    [id:string]:string
}

const role2:RoleDic2 = {
    "a":"super",
    1:'admin'   // 数字类型的key会转成字符串
}

//接口继承

interface Vegetable1 {
    color:string;
}
interface Tomato1 extends Vegetable1 {
    radius:number;
}
interface Carrot1 {
    length:number;
}
const tomato1 :Tomato1 = {
    radius:1,
    color:"red"
}

// 方法1 全局变量更新值 
// let count = 0;
// const countUp = ()=>{count ++};
// countUp();
// console.log(count)
// countUp();
// console.log(count)
// countUp();
// console.log(count)

// 方法2 闭包更新值 
// const countUp = (()=>{
//     let count = 0;
//     return ()=>{
//         return count++
//     }
// })()
// console.log(countUp())
// console.log(countUp())
// console.log(countUp())

// 方法3 给当前函数添加属性来更新值 
// const countUp = ()=>{
//     countUp.count ++
// };
// countUp.count=0;
// countUp();
// console.log(countUp.count);
// countUp();
// console.log(countUp.count);

// 方法4 给当前函数添加属性来更新值 
// const countUp = ()=>{
//     countUp.count ++
// };
// countUp.count=0;
// countUp();
// console.log(countUp.count);
// countUp();
// console.log(countUp.count);


// 方法4 给当前函数添加属性来更新值   以接口的形式来写
interface Counter {
    ():void,
    count:number
}

const getCounter = ():Counter=>{
    const c= ()=>{c.count++}
    c.count =0;
    return c;
}
const counter:Counter = getCounter();
counter();
console.log(counter.count)  // 1
counter();
console.log(counter.count) // 2
 















