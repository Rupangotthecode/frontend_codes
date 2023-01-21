var food=[
    'italian pasta',
    'rice with veggies',
    'chicken with potatoes',
    'vegetarian pizza'
];
var foodprice=[300,290,350,450];
function receipt(arg,...food)
{
    if(arg==true)
    {
        return foodprice.map(item=>item+(item*20/100));
    }
    else if(arg==false)
    {
        return foodprice.map(item=>item*1);
    }
}
var notax=receipt(false,foodprice);
var tax=receipt(true,foodprice);
var i;
for(i=0;i<4;i++)
{
    console.log('Price of ',food[i],' including tax is Rs',tax[i]);
}
for(i=0;i<4;i++)
{
    console.log('Price of ',food[i],' without tax is Rs',notax[i]);
}

try {
    throw new Error();
    console.log('Square');
} catch(err) {
    
}