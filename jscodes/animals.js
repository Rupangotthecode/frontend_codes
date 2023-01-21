class Animal {
    constructor(color="yellow",energy=100)
    {
        this.color=color;
        this.energy=energy;
    }
    isActive()
    {
        
        if(this.energy>0)
        {
            this.energy-=20;
            console.log('Energy is decreasing, currently at:', this.energy);
        }
        else if (this.energy <= 0)
        {
            this.sleep();
        }
    }
    sleep()
    {
        energy += 20;
        console.log ("energy rejuvenation",energy);
    }
}
class Cat extends Animal {
     constructor(sound="meow", canJumpHigh=true, canClimbTrees=true, color, energy)
     {
        super(color,energy);
        this.sound=sound;
        this.canJumpHigh=canJumpHigh;
        this.canClimbTrees=canClimbTrees;
     }
    makeSound()
    {
        console.log(this.sound);
    }
        
}
class Bird extends Animal {
    constructor( sound='chirp', canFly=true, color, energy)
    {
        super(color,energy);
        this.sound=sound;
        
        this.canFly=canFly;
    }
    makeSound()
    {
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(houseCatSound='purr', sound, canJumpHigh, canClimbTrees, color, energy)
    {
        super(sound,canJumpHigh,canClimbTrees,color,energy);
        this.houseCatSound=houseCatSound;
        
    }
    makeSound(option)
        {
            if (option)
            {
               super.makeSound();
            }
        console.log(this.houseCatSound);
        }
}
class Tiger extends Cat {
    constructor( tigerSound="roar", sound, canJumpHigh, canClimbTrees, color, energy)
    {
        super( sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound=tigerSound;
    }
    makeSound(option)
    {
        if (option)
            {
                super.makeSound()
            }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk, sound, canJumpHigh, canClimbTrees, color, energy)
    {
        super( sound, canJumpHigh, canClimbTrees, color, energy)
        this.canTalk=canTalk;
    }
    makeSound(option)
        {
            if(option)
            {
                super.makeSound();
            }
            if(this.canTalk)
            {
                console.log("talking!");
            }
        }
    
}
var polly = new Parrot(true); 
var fiji = new Parrot(false); 

polly.makeSound(); 
fiji.makeSound(); 

polly.color;
polly.energy;

polly.isActive(); 

var penguin = new Bird("shriek", false, "black and white", 200);
penguin; 
penguin.sound;
penguin.canFly; 
penguin.color; 
penguin.energy; 
penguin.isActive();
var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // purr
// leo, both purr and meow now:
leo.makeSound(true); // meow,purr

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!