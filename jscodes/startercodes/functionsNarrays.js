function fun(a,b)
{
    var c=a+b;
    console.log(c);
}
fun(11,10);
var train=["salt","honey","sugar",50];
for(var i=0;i<4;i++)
{
    console.log(train[i]);
}
var str1='hello';
var str2='rupan';
console.log(str1+str2);
console.log(str1.concat(str2));
//recursive function:
let counter=3;
function example(){
    console.log(counter)
    counter--;
    if(counter===0){
        return 0;
    }
    else{
        example();
    }
} 
example()
//foreach,fliter,map techniques in arrays
var fruits=["mango","apple","grapes"]
function appendindex(fruit,index)
{
    console.log(`${index} ${fruit}`);
}
fruits.forEach(appendindex);
//
var arr=[10,20,30,40,50];
var narr=arr.filter(function(num)
{
    return num>20;
})
console.log(narr);
//
var arr2=[100,200,300,400].map(function(num)
{
    return num/100;
})
console.log(arr2)
//in the above 3 snippets, we can use any of the three methods to implement the functions
//Implementing the ForEach tool
var Drone={
    speed:100,
    color:"blue"
}
var result=[]
var DroneKeys=Object.keys(Drone)
DroneKeys.forEach(function(key)
{
    result.push(key,Drone[key])
})
console.log(result)