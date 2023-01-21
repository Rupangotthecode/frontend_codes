try
{
    console.log(a+b);
    console.log("dont print");
} catch(err)
{
    console.log('error detected',err);//if the code in try block is invalid the compiler does not stop, and carries on with catch block and forward
}
console.log("the program moves on")
function addTwoNum(a,b)
{
    try{
        if(typeof(a)!='number')
        {
            throw new ReferenceError('The frist argument is not a number');
        }
        else if(typeof(b)!='number')
        {
            throw new ReferenceError('The second argument is not a number');
        }
        else{
            console.log(a+b);
        }
    }catch(err){
        console.log('Error!',err);
    }
}
addTwoNum(5,ak);
console.log("it still runs!")

/*try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    }
*/
//this code cannot be used with try catch block as syntax errors cannot be caught using try catch blocks