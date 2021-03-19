//类型推论

let namea = 'lison';
// name = 123
let arr3= [1,'a'];
// arr3 = [2,'b',false]
window.onmousedown =(MouseEvent)=>{
    console.log(MouseEvent)
}
interface Info{
    name:string,
    info:{
        age:number
    }
} // 递归的检测，
let infos:Info
const infos1 = {name:'lison',info:{age:18}}
const infos2 = {age:18}
const infos3 = {name:'lison',age:18}
infos = infos1
// infos = infos2 // 报错没有name属性
// infos = infos3

//参数个数 要求，少的不能赋值给多的类型
let x = (a:number)=>0
let y = (b:number,c:string)=>0
// y=x
// x=y
const arrs = [1,2,3];
// arrs.forEach((item,index.array)=>{
//     console.log(item)
// })
arrs.forEach((item)=>{ // 多的参数用不上可省略
    console.log(item)
})
//参数类型
let xx = (a:number)=>0
let yy = (b:number)=>0



