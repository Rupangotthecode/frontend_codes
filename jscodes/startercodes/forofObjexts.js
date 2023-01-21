//for of can be used directly in arrays but not objects
var ar=["Tom","John","Bholu","Rahim","Xing"];
for(var element of ar)
{
    console.log(element);
}
//if used directly in object renders not iterable error
//object.(extensions):keys,values,entries
var family={
    title:"Nag",
    members:3    
}
console.log("keys:");
console.log(Object.keys(family));
console.log("values:")
console.log(Object.values(family));
console.log("entries:")
console.log(Object.entries(family));
//now using objects extensions to iterate keys in an object
var brands={
    brand1:"audi",
    brand2:"lambo",
    brand3:"porsche",
    brand4:"honda",
    brand5:"caddy"
}
for(var entry of Object.entries(brands))
{
    console.log(entry);
}
//applying it to a realtime problem:Random brand generator
var dynkey=Math.random()>0.5?"brand2":"brand3";
console.log(brands[dynkey]);
//for of VS for in
var car={
    engine:true,
    steering:true,
    speed:"slow"
}
var supercar=Object.create(car);
supercar.speed="fast";
for(key in supercar)
{
    console.log(key,":",supercar[key]);//for in iterates over all the values of the subclass
}
for(k of Object.keys(supercar))
{
    console.log(k,":",supercar[k]);//for of iterates over only assigned values of the subclass
}
