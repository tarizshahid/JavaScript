let firstName  = 'Mosh' , lastName = 'Hamedeni';
console.log("First Name : " , firstName  , "\tLast Name : " , lastName);

//Objects
let Person = 
{
    name:'Tariz' ,
    age:23 
};

//Accessing object
//dot notation , can be used to change value of properties of objects, i.e in this case name , age
console.log(Person.name)
Person.name = 'Tariz Shahid'
console.log('After updating : ' , Person.name)

//bracket notation
console.log(Person['age'])

//Arrays , accessing them is same as in C++
let Colours = ['Green' , 1 , 'Red'] //can have numbers , string etc in same array
console.log(Colours[2])
Colours[3] = 'Black' //add 4th item to array, JS is dynamic
console.log(Colours)

//funtions

function SUM (a , b) // a, b parameters
{
return a/b
}

console.log(SUM(2,3)) // 2,3 arguments

//if else
let nbr1 = 121
let nbr2 = 121
let nbr3 = 121
if(nbr1===nbr2)
{
    if(nbr1==nbr3)
    {
        console.log("nbr1 = nbr2 = nbr3")
    }
}

else if(nbr1!=nbr3)
{
    pass
}

else
{
    console.log("ELSE EXECUTED")
}

//Loops

for (let i = 1; i<=5; i++)
{
    console.log(i)
}
let names = ['Tariz' , 'Arham' , 'Shabrez' , 'Muzzumil' , 'Ahsan' , 'Zunair']
for (const i of names) //itterateable objects  , for in : properties of objects 
{ 
    console.log(i)
}

