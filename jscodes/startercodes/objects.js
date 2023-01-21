var manager={
    name: "Rupan Nag",
    age: 29,
    greeting:"Hello"
}//{}are object literals.
console.log(manager);
manager.salary="8lpa";
console.log(manager);
var dog={};
dog["name"]="tommy";
dog["color"]="white";
dog["age"]=4;
console.log(dog);//[]are brackets
arrofkeys1=["name","color","age"];
for(i=0;i<arrofkeys1.length;i++)
{
    console.log(dog[arrofkeys1[i]]);//using brackets to evaluate dog expressions
}
//arrays are a type of object in js
var fruit=[];
fruit.push('apple');
fruit.push('pear');
fruit.push('mango');//push adds an element to the end of the array
console.log(fruit);
fruit.pop();//pop removes the last element of an array
console.log(fruit);
//push and pop work like array is a stack
function build(a,b,c)
{
    var ar=[];
    ar.push(a);
    ar.push(b);
    ar.push(c);
    return ar;
}
var array=build("How","are","you?");
console.log(array);
var car={};
car.name='swift'
car.mileage=18
car.turnkey=function()
{
    console.log('The engine is running.')
}
console.log(car);
car.turnkey();

