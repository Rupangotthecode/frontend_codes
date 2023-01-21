class Person
{
    constructor(name,age,energy)
    {
        this.name=name;
        this.age=age;
        this.energy=energy;
    }
    sleep()
    {
        this.energy+=10;
    }
    doSomethingFun()
    {
        this.energy-=10;
    }
}

class Worker extends Person
{
    constructor(name,age,energy,xp=0,hourlyWage=10)
    {
        super(name,age,energy);
        this.xp=xp;
        this.hourlyWage=hourlyWage;
    }
    sleep() {      

        super.sleep();   

    }    

    doSomethingFun() {         

    super.doSomethingFun();   

     }    
    gotoWork()
    {
        this.xp=this.xp+=10;
    }
}

function intern() {
    var intern=new Worker("Bob",21,110,0,10);
    intern.gotoWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager=new Worker("Alice",30,120,100,30);
    manager.doSomethingFun();
    return manager;
}
intern();
manager();