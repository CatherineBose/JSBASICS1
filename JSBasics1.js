
// Create a variable x as an empty array []. Log this array to your console.

// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.

// • Use .pop() to remove the final element of your array.

// • Log the final value of x, what is it?

var x = []
console.log(x);
x.push("coding");
console.log(x);
x.push("dojo");
x.push("rocks");
console.log(x);
x.pop();
console.log(x);

//  Create a const called y, and store an empty array there. Log this to your console.
//  Use .push() to add the number 88 to array y.
const y = []
y.push(88);

// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].

// • Print every element to the console.

// • Now print every element except the final number.


var z = [9, 10, 6, 5, -1, 20, 13, 2]
console.log(z);
for (var i=0; i< z.length-1; i++)
 {
   console.log( z[i]);
 }

//  • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
 
//  • Print the length of all names to the console.
 
//  • Now modify your code so only names with a length of 5 print.

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
for (i=0; i<names.length; i++)
{  
    console.log(names[i].length);
}


var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
for (i=0; i<names.length; i++)
{  
    if (names[i].length == 5){
        console.log(names[i]);
    }
    
}

// • Create a function yell that takes one parameter called string.

// • Make yell return that string in all uppercase.

// • Where could you look to find out more about uppercasing strings in JavaScript?
function yell(x)
{
    if(x.constructor === String)
    {  var y =x.toUpperCase();
        console.log(y)
    }
}
 yell ("hello");