//basic objects in js
var purchase1={
    shoeprice:100,
    quantity:20,
    total: function()
    {
        return purchase1.shoeprice*purchase1.quantity;
    }
}
var purchase2={
    shoeprice:50,
    quantity:20,
    total: function()
    {
        return this.shoeprice*this.quantity;
    }
}
console.log(purchase1.total(),purchase2.total());

//making classes now
class Animal{
    name='tom';
    func(){
        console.log("Hello!");
    }
};
var myDog=new Animal()
myDog.name="kittu";
console.log(myDog.name);
myDog.func();

//bit more advanced now:
class Train
{
    constructor(color,lightson)
    {
        this.color=color;
        this.lightson=lightson;
    }
    toggleLightsOn()
    {
        this.lightson=!this.lightson;
    }
    lightsStatus()
    {
        console.log("lights on?",this.lightson);
    }
    getSelf()
    {
        console.log(this);
    }
    getPrototype()
    {
        var proto=Object.getPrototypeOf(this);
        console.log(proto);
    }
}
var train1=new Train("fed",true);
train1.getPrototype();
train1.getSelf();
train1.lightsStatus();
train1.toggleLightsOn();
train1.lightsStatus();
console.log(Object.getPrototypeOf(train1));

//creating polymorphism and inheritance
class HighSpeedTrain extends Train{
    constructor(passengers,highspeedOn,color,lightson)
    {
        super(color,lightson);
        this.passengers=passengers;
        this.highspeedOn=highspeedOn;
    }
    toggleHighspeed()
    {
        this.highspeedOn=!this.highspeedOn;
        cout<<"status of high speed:"<<this.highspeedOn<<endl;
    }
    toggleLightsOn()
    {
        super.toggleLightsOn();
        super.lightsStatus();
        console.log("lights are 100% operational");
    }
}
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
highSpeed1.toggleLightsOn();

//another example:
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) 
console.log(boxingGym.stationaryBike) 
console.log(boxingGym.treadmill)
//defensive approach with default values implemented on constructor
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); 



