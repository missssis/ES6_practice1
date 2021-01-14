// let a =18;
// console.log(a)

// function taiji(...arg){
//     for(let i = 0;i < arg.length;i++){
//         console.log(arg[i]);
//     }
// }
// taiji(1,2,3,4,5);

// let a = "a";
// a = undefined;
// console.log(a);

// function taiji2(four,...arg){
//     console.log(arg.length);
// }
// taiji2(1,1,1,1,1,1);


// let[a,b="a"]=[1,undefined];
// console.log(a+b)

//最大安全整数2的53次方
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// //
// let json={
//     '0':'lsj',
//     '1':'aaa',
//     '2':'sss',
//     length:3   //length必须写，不然不能转换成数组
// }
// let arr = Array.from(json);
// console.log(arr);

// //find实例方法



// //entries里面包含index,value键值对
// let arr=['lj','梁娟','太极公司'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// } 

// let list = arr.entries();

// //判断0位置上是否为空
// let arr = [1,,,,];
// console.log(0 in arr);

//filter的实现 b可以以替换成a
// let a = [1,2,3,3,4,4];
// let b = [1,2,3,3,4,4];
// let c = [];
// for(let i=0;i<a.length;i++){
//     if(b.indexOf(a[i])===i){
//         c.push(a[i]);
//     }
// }
// console.log(c);


// let arr = Array.of(3,4,5,6);
// console.log(arr);


//数组循环
let arr = ['a','b','c'];
// for(let item of arr){
//     console.log(item);
// }

// for of 索引
// for(let index of arr.keys()){
//     console.log(index);
// }

//类似于entryset（包含键值对索引和值）
// for(let [index,val] of arr.entries()){
//     console.log(index+","+val)
// }


//迭代器
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);


