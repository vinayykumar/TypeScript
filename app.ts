
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

EXAMPLE 1
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

using T as a placeholder
function logAnything<T>(arg:T):T{
    console.log(arg);
    return arg;
}


EXAMPLE 2
interface HasAge{
    age : number
}

function getOldest(people:HasAge[]):HasAge{
    return people.sort((a,b) => b.age - a.age)[0];
}

Using Generics as placeholder 
function getOldest<T extends HasAge>(people:T[]):T{
    return people.sort((a,b) => b.age - a.age)[0];
}

const people : HasAge[] = [
    { age : 40},
    { age : 30},
    { age : 20},
    { age : 55}
];

interface Player {
    name : string;
    age : number;
}

const players : Player[]  = [
    { name : 'John Doe' , age : 30},
    { name : 'Kevin 11' , age : 20},
    { name : 'Vinay Kumar' , age : 22},
]

const person = getOldest(players) as Player;
const person = getOldest(players);
const person = getOldest(people);
console.log(getOldest(players));


EXAMPLE 3

interface IPost{
    title : string;
    id : number;
    description : string
}

interface IUser{
    id : number;
    name : string;
    age : number;
}

const fetchPostData = async (path:string): Promise<IPost[]> => {
    const response = await  fetch(`http://example.com${path}`);
    return response.json();
}

const fetchUserData = async (path:string): Promise<IUser[]> => {
    const response = await  fetch(`http://example.com${path}`);
    return response.json();
}

const fetchData = async <ResultType>(path:string):Promise<ResultType> => {
    const response = await  fetch(`http://example.com${path}`);
    return response.json();
}  

( async () => {
    const users = await fetchData<IUser[]>('/users');
})

( async () => {
    const posts = await fetchPostData('/posts');
})

( async () => {
    const users = await fetchUserData('/users');
    users[0].name;
})
