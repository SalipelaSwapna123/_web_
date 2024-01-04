// 1
var a = 10;
var b = 25;
var c = 15;

let greatestNumber;

if (a >= b && a>= c) {
  greatestNumber = a;
} else if (b>= a && b >= c) {
  greatestNumber = b;
} else {
  greatestNumber = c;
}

console.log("The greatest number is:", greatestNumber);
// 2
var a = 10;
var b = 25;
var c = 15;

let small;

if (a <= b && a<= c) {
  small = a;
} else if (b<= a && b <= c) {
  small = b;
} else {
  small= c;
}

console.log("The smallest number is:", small);
// 3
var a=10;
var b=20;
var c=30;
let avg=(a+b+c)/3;
console.log("avg of three numbers is : ",avg);
// 4
var arr=[10,20,30,40,50];
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
// 5
var array=[10,20,30,40,50];
var max=array[0];
for(var i=0;i<array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i];
    }
    
}
console.log("greatest number in array ",max);
// 6
var array=[10,20,30,40,50];
var min=array[0];
for(var i=0;i<array.length;i++)
{
    if(array[i]<min)
    {
        min=array[i];
    }
    
}
console.log("smallest number in array ",min);
// 7
var array=[10,20,30];
let sum=0;
for(var i=0;i<array.length;i++)
{
    sum +=array[i];
}
var average=sum/array.length;
console.log("avg of an array elements : ",average);
// 9
var num=10;
if(num%2==0)
{
    console.log(num,"is even");
}
else
{
    console.log(num ,"is odd");
}
