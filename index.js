/**
* 数组元素交换位置
* @param {array} arr 数组
* @param {number} index1 添加项目的位置
* @param {number} index2 删除项目的位置
* index1和index2分别是两个数组的索引值，即是两个要交换元素位置的索引值，如1，5就是数组中下标为1和5的两个元素交换位置
*/
function swapArray(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
}

//上移 将当前数组index索引与后面一个元素互换位置，向数组后面移动一位

function zIndexUp(arr,index,length){
    if (index + 1 != length) {
        swapArray(arr, index, index+1);
    } else {
        alert('已经处于置顶，无法上移');
  }
}

//下移 将当前数组index索引与前面一个元素互换位置，向数组前面移动一位

function zIndexDown(arr,index,length){
    if (index != 0) {
        swapArray(arr, index, index-1);
    } else {
        alert('已经处于置底，无法下移');
  }
}

//置顶，即将当前元素移到数组的最后一位

function zIndexTop(arr,index,length){
    if (index + 1 != length) {

        //首先判断当前元素需要上移几个位置,置底移动到数组的第一位
        var moveNum = length - 1 - index;

        //循环出需要一个一个上移的次数
        for (var i = 0; i<moveNum; i++) {

            swapArray(arr, index, index + 1);

            index++;

     }
    } else {
        alert('已经处于置顶');
    }
}

//置底，即将当前元素移到数组的第一位

function zIndexBottom(arr,index,length){
    if (index != 0) {

        //首先判断当前元素需要上移几个位置,置底移动到数组的第一位
        var moveNum = index - 0;

        //循环出需要一个一个上移的次数
        for (var i = 0; i<moveNum; i++) {

            swapArray(arr, index, index - 1);

            index--;
        }
    } else {
        alert('已经处于置底');
    }
}



// 迭代方法 ES5为数组定义了5个迭代方法
// 1 every  对数组中每一项进行给定函数，如果每一项都返回true，则返回true;
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function(item,index,array){
    return item>2;
});

alert(everyResult);   //false

// 2 some 对数组中每一项进行给定函数，如果任意一项都返回true，则返回true;
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.some(function(item,index,array){
    return item>2;
});

alert(everyResult);   //true

// 3 filter 对数组中每一项进行给定函数,返回该函数会返回true的项组成的数组;
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.filter(function(item,index,array){
    return item>2;
});

alert(everyResult);   //  [3,4,5,4,3]

// 4 map 对数组中每一项进行给定函数,返回每次函数调用的结果组成的数组
var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.map(function(item,index,array){
    return item*2;
});

alert(everyResult);   //  [2, 4, 6, 8, 10, 8, 6, 4, 2]

// 5 forEach 对数组中每一项进行给定函数,没有返回值，和for循环类似
var numbers = [1,2,3,4,5,4,3,2,1];

numbers.forEach(function(item,index,array){
    if(item!=2){
        numbers.splice(index,1,2);
    }
});

alert(numbers);   //  [2, 2, 2, 2, 2, 2, 2, 2, 2]

// 归并方法 ES5新增了两个归并数组的方法：reduce()和reduceRight()。这两个方法迭代数组所有项，然后构建一个最终返回的值。reduce从左到右，reduceRight从右到左。
var values = [1,2,3,4,5];

var sum = values.reduce(function(prev,cur,index,array){
    return prev + cur;
});
alert(sum); //15

// 检测数组 ES3的方法：instanceof  ES5的方法：Array.isArray

var values = [1,2,3];
if(values instanceof Array){
    //对数组进行某些操作
}

var values = [1,2,3];
if(Array.isArray(values)){
    //对数组进行某些操作
}

// 转换方法 1 toLocaleString() toString() valueOf() 2 join() 将数组转换为字符串，且用分隔符分割

var colors = [1,2,3];
alert(colors.join("|"));  // 1|2|3

// 栈方法 栈方法是指Last-In-First-Out后进先出

push() 从数组末尾添加
pop()  从数组末尾移除

// 队列方法 队列方法是First-In-First-Out先进先出

unshift()  从数组前端添加
shift()    从数组前端移除

// 重排序方法 

reverse()  反转数组
sort()     排序
var values = [0,1,5,10,15];
values.sort(function(a,b){
    return b-a;
});
console.log(values);  //[15, 10, 5, 1, 0]

// 操作方法
// 1 concat() 用于复制或者从尾部添加–>创建新数组 先创建一个当前数组的副本，然后jiang将接到的数组添加到末尾，返回新的数组。如果没有传参数，直接复制返回新构建的数组。
var values = [1,2,3];
var v1 = values.concat();
var v2 = values.concat(4);

console.log(values);  //[1,2,3]
console.log(v1);      //[1,2,3]
console.log(v2);      //[1,2,3,4]

// 2 slice() 用于复制或截取数组–>创建新数组 截取当前数组的一部分创建一个新数组。可以接受一个或者两个参数，只有一个参数时返回指定位置到尾部的数组。两个参数时，返回指定位置到结束位置之前但不包括结束位置的数组。

var values = [1,2,3];
var v1 = values.slice();
var v2 = values.slice(1);
var v3 = values.slice(1,3);

console.log(values);  //[1,2,3]
console.log(v1);      //[1,2,3]
console.log(v2);      //[2,3]
console.log(v3);      //[2,3]

// 3 splice() 用于删除、插入、替换，号称最强大的数组方法
// 3.1 删除：可以删除任意数量的项，需要两个参数，要删除的第一项的位置和要删除的项数。

var values = [1,2,3,4,5,6];
var v = values.splice(0,2);

console.log(values);  //[3,4,5,6]
console.log(v);       //[1,2]

// 3.2 插入和替换：至少三个参数，第一个是起始位置，第二个是要删除的项，第三个及以后shi yao是要插入或替换的值。

插入demo：
var values = [1,2,3,4,5,6];
var v1 = values.splice(1,0,1,1,1);

console.log(values);  //[1,1,1,1,2,3,4,5,6]
console.log(v1);      //[]

替换demo：
var values = [1,2,3,4,5,6];
var v1 = values.splice(1,2,1,1,1);

console.log(values);  //[1,1,1,1,4,5,6]
console.log(v1);       //[2,3]

// 位置方法

var values = [1,2,3,4,5];
indexOf() 从头找指定项的位置
var v1 = values.indexOf(3);

lastIndexOf() 从后往前查位置
var v2 = values.lastIndexOf(3);
