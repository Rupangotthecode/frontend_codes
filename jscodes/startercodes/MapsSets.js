//Maps are similar to objects in js, but dont have qualities like prototypes and inheritance
let bestSingers=new Map();
bestSingers.set(1,"champ")
bestSingers.set(2,"Runners UP")
bestSingers.set(3,"good job")
console.log(bestSingers)
//Sets are like maps but only hold unique members, hence can be used to sort arrays very fast
var veggies=['tomato','potato','turnip','radish','tomato','potato','turnip']
var uniqueveggies=new Set(veggies)
console.log(uniqueveggies);