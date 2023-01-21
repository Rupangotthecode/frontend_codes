console.log(10+3);
console.log(10-3);
console.log(10*3);
console.log(10/3);
console.log(10%3);
console.log(10**3);
console.log(10>3);
console.log(10=='10');//equality operator doesnt care if the operands are strings/number
console.log(10==='10');//strict equality operator cares if the operands are strings/number
console.log(10!='10');//inequality operator doesnt care if the operands are strings/number
console.log(10!=='10');//strict inequality operator cares if the operands are strings/number
console.log("Ru"+"pan");//cocatenation
console.log("Rupan"+19);//coercion
console.log(1+'2');//res=12

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); 

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString);//in js, we can increment variables with strings or numbers

//typeof operator

var test;
test=typeof("hello world");
console.log(test)
test=typeof(3);
console.log(test)
test=typeof(3.14);
console.log(test)
test=typeof(true);
console.log(test)
test=typeof(1>2);
console.log(test)
test=typeof([1,2,3]);
console.log(test)
test=typeof({a:1});
console.log(test)
test=typeof(function b(){console.log('noice')});
console.log(test)

//spread operator(...)  VERY IMP. It is used to divide an array into distinct elements
var top3=['rupan','sujoy','sonali']
function family(var1,var2,var3)
{
    console.log(var1+" is son of "+var2+" and "+var3)
}
family(...top3);
//rest operator([...]) VERY IMP.It is used divide an array into lists and distinct variables
var bestcars=['Rolls',"Bugatti",'Lambo','Bentley','benz','bmw','lotus']
var [best,secbest,...remcars]=bestcars;
console.log(best)
console.log(secbest)
console.log(remcars);
//APPLICATIONS OF SPREAD AND REST OPERATORS
//1.doing repitetive tasks 

function calcTotal(tax,...amount)
{
    return amount.map(items=>items*tax/100)
}
var total=calcTotal(7.5,140,132,882,10221,42);
console.log(total)

//2.Cocatenation
var places=['rome','india','paris']
var food=['pasta','naan','baguette']
var eat=[...places,...food]
console.log(eat)//array cocatenation
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // object cocatenation

//3.push()
let heroes=['napoleon','shivaji','ertugrul']
heroes=[...heroes,'ashoka','akbar']
console.log(heroes)

//4.string element in a single array
var name="rupan";
var letters=[...name]
console.log(letters)

//5.copy an object
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)
//spread and rest operators only perform a shallow copy of an object
