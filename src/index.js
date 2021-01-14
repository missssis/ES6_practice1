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
// let arr = ['a','b','c'];
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


//传入值，索引，当前数组（传地址）
// let b = arr.filter((value,index,brr)=>{
//     brr[index]=0;
// })
// console.log(arr.toString())
// console.log(b)


//字符串拼接(注意：后面要用``tab键上面那个点)
// let str1 = 'hello';
// let str2 = `<b> ${str1} world!</b>`;
// console.log(str2.startsWith('<b> hello'))
// console.log(str2.includes('hello'));
// document.write(str2)

//复制字符串
// document.write('$'.repeat(8));

//ES6数字操作
//ES6数字验证 NAN非数字特殊字符 finite有限的
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(undefined));

//ES5数字验证 区别：ES6更加严谨
// console.log(isNaN(NaN));  //true
// console.log(isNaN(undefined));  //ture
// console.log(isNaN('taiji'));  //true
// console.log(isNaN(123));     //false
// console.log(isNaN({}));         //true
// console.log(isNaN(null));       //false

//ES6新增的数组知识
//find实例方法
// let arr = [9,2,3,6,5,6,7,8];
// //箭头函数
// //find(参数：1.值，2.索引 3.数组)
// //value表示当前查找的值
// //index表示当前查找的数组的索引
// //arr：表示当前数组
// var v = arr.find((value,index,arr)=> index > 4 );  //首先找到索引比4大的5，返回值6
// var v2 = arr.findIndex((value,index,arr)=> {return value > 4} );
// console.log(v);
// console.log(v2)

//fill() 实例方法
let arr = ['a','b','c','d'];
arr.fill('fff',1,3);  //左开右闭 
console.log(arr)
//filter() 数组去重 传入的参数value和index一一对应
var arr2 = ['a','a','d','d','f'];
console.log(arr2.filter((value,index,arr2)=>arr2.indexOf(value)===index));










