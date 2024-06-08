
to run directly
tsc-node file_name.ts

to run by JS
1.tsc file_name
2.node file_name

let num:number = 1;
function calc(num1:number,num2:number){
    return num1 + num2;
}
console.log(calc(20,30))


function getTotal(numbers:number[] /*Array<number>*/ ){
    return numbers.reduce((acc , item) =>{
        return acc + item;
    },0);
}
console.log(getTotal([1,2,4]));


const user = {
    firstName : 'Jhon',
    lastName : 'Doe',
    role : 'professor'    
}
console.log(user);


Type Alias
type User = {
    name : string,
    age : number,
    address? : string //using ? to make it optional
}

const user:User = {
    name : 'Vinay',
    age : 21,
    address : 'Uttar Pradesh, India'
}

function login(userData:User): User{ //creating the return type of function to User
    return userData;
}

console.log(login({
    name : 'Vinay',
    age : 21
}));


type ID = number | string;
const userId:ID = 123;



Interfaces
interface Transaction {
    payerAccountNumber : number;
    payeeAccountNumber : number;
}

const transaction1 : Transaction = {
    payerAccountNumber : 123,
    payeeAccountNumber : 232
}

const transaction2 : Transaction = {
    payerAccountNumber : 123,
    payeeAccountNumber : 200
}

interface BankAccount {
    accountNumber : number;
    accountHolder : string;
    balance : number;
    isActive : boolean;
    transactions : Transaction[];
}

const bankAccount:BankAccount = {
    accountNumber : 123,
    accountHolder : 'Vinay',
    balance : 999,
    isActive : true,
    transactions : [transaction1,transaction2]
}


Generics
function logString(str:string) : string {
    console.log(str);
    return str;
}

function logNumber(num:number) : number {
    console.log(num);
    return num;
}

function logArray(arr:any[]){
    console.log(arr);
    return arr;
}

function logAnything<T>(arg:T):T{
    console.log(arg);
    return arg;
}