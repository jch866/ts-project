const test = 1;
const getIndex = ()=>3;
enum Status {
    Uploading =2,
    Success = getIndex(),
    Failed = 5 
}
console.log(Status);

enum Message {
    Error = 'sorry,error!',
    Success = 'hoho ,success',
    Failed = Error
}

console.log(Message.Error); 
//异构枚举（Heterogeneous enums） 从技术的角度来说，枚举可以混合字符串和数字成员
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
enum Result {
    Faile=0,
    Success = "success"
}


const enum Animal{ // 加了const后编译时什么都没有 把const去掉，就会编译成正常的js
    dog=1
}
const dog = Animal.dog // 1