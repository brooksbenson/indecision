var name = 'Brooks';
var name = 'Skoorb'; // The name var is redeclared and no error is thrown

let nameLet = 'Brooks';
let nameLet = 'Skoorb'; // The name let is redeclared and an error is thrown

const nameConst = 'Brooks';
nameConst = 'Skoorb'; // The name const is reassigned and an error is thrown

//Block Scoping
{
  let test = true;
  console.log(test); // true
}
console.log(test); // undefined
//let and const declared inside a block can only be accessed within that block