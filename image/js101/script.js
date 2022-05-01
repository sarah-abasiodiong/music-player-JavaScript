//This is a comment//
/**Thisnis a mutiline */
/*this is a name i called my.self*/
//



//
let myName = 'Micheal;'
// let myNumber = 24;
let occupation = 'software Guy';

//variable can be reassigned

myName = "Augustuse"
occupation = 'software Guy';

const Planet='earth;'


// reassigne const?
// Planet= Uranus'; never reassign constants

//alert(Successful)

//Rules of variables creation
/**
 * Don't use resereved keywords as variable name
 * variable names or identifiers cannot startb with numbers or symbols except the symbols are either an (_)undersccore or a ($)Dollar Sign
 */
let $90 = 'Ninety Dollars';

// Naming Conventions
// camelCase -  Javascript's standard naming convention
// PascalCase-Rarely use in javascript except when for when we do OOP(Object Oriented Programming)
// kebab-case - Not allowed javascript
// snake_case - This naming convention is very popular in the Pytho  Programming Language. it is also valid in javascript, but it's rarely used'

let phoneBrand = 'infinix'; //camelCase
let Phonebrand = 'infinix'; //PascalCase
//let phone-brand = 'infinix';//kebab-case
let phone_brand = 'Infinix';//snake case

//Convention for constants
const RED ='#ff0000';

//introduction to Data Types

// Primitive types

// primitive types

/**
 * strings
 * number
 * boolean
 * null
 * underfined
 * bigint
 * symbol
 */

//STRINGS
let sentence="my back aches.";
let anotherSetence='my home is very far';
let thirdSenctence='This string is in a backtick';

let tax =100;
let amount = 1000;

//let statement= 'The sum total of the product is '+ (amount+tax) +'. 'Thank you for shopping with us';
let statement = `The sum total nof the products is ${amount + tax}. Thank youm for shopping with us`;


//NUMBERS
let myNumber=20;
console.log(myNumber/2);

//BOOLEANS
let mikeIsAsian = false;
let rachaelIsDarkSkinned =false;
let samuelIsADoctor = true;


//Null
let isEmpty = null;
let myDiv =document.querySelector('div');
//myDiv.innerHTML = 'I a micheal';
console.log(myDiv);

//undefined
let someone =undefined;
console.log(someone);

//REFERENCE/OBJECT TYPES
/** 
 * OBJECT
 * Array
 * Map and Weakness(*)
 * Set and Weakset(*)
*/


let person={
    name : 'sarah',
    age:150,
    occupation:'Developer',
    gender: 'male',
    isMarried:false,
    hobbies:['Reading', 'Singing', 'Making money'],
    address:{
        city:'lagos',
        country:'Nigeria',
        postalcode:00176,

    }

}

//reference/object types
// object data type 
// Array
// map and WeakMap
// set and weakset 


let Laptopo ={
    brand: "Hp",
    model:'elitebook',
    year:2020,
    color:'silver,'
}

//Accessing Object Propertties
console.log(person);
//Dot Notation(.)
console.log(person.name)
console.log(person.address)
console.log(person.age)
//Square Bracket notation['']
console.log(person['gender'])
console.log(person['isMarried'])
console.log(person['hobbies'])

//Primitive vs Reference
//Primitives are also known as immutable types because their data cannot be modified
let str ='Random String';
console.log(str.lenght);
console.log(str[str.length - 1]);
str[2] = 'e'
console.log(str);

//Reference types are also known as mutable types because their properties can be modified

person.name= 'Tobi';
person.nationality = 'Nigerian';
delete person. address;
console.log(person)

let myObj ={};
myObj.value = 'Something';
console.log(myObj.value);

//Array
let myList =['Sarah', 'Adebanke', 'Tochukwu', 'Charles', false, 229];
console.log(myList.length);
console.log(myList[5]);
myList[1] = 'Mustapha';
console.log(myList)


//TYPE CONVERSION
//STRING TO NUMBER CONVERSION
let num = '100.50';
// console.log(Number(num)) + 50);
console.log(parseInt(num) + 50);
console.log(parseFloat(num) + 50);

// number to string conversion
let y =290;
let z = y +''

//console.log(type of string(y));
//console.log(y.tostring());

//value to boolean
// Truthy                        //  Falsy//
//.........................................      
//n > 0 or n< 0                 //  0   //
//string                       //      //
//Infinity/ -infinity         //  NAN  //
//Empty {} []                //  Null //
//                           //  Undefined  //



//OPERATORS
//UNARY OPERATOR
// ( INCREMENT AND DECREMENT OPERATORS 
let a = 0;
console.log(a--);
console.log(a);

 //UNARY PLUS)(+)
 let val ='800';
 console.log(typeof +val);
//BINARY OPERATOR(
//ASSIGNMENT
// =, +=, -=,*=, /=, %=
let food = 'yum';
food += 'my'; //food = food +'my'
console.log(food);
//ARITHMETIC
//+, -, *, /, %

//COPARISONS
//<, >, ==, ===, <=, >=, !==
//LOGICAL


//TERNERY




