import userInfoFunc, {user as username, add, flag} from './utils.js';


console.log(username.name);

function test({name})
{
    console.log(name);
}

userInfoFunc();
test(username);
console.log( add(5,10));
console.log(flag);

class Employee{

    name;
    age;
    salary;

    constructor(name, age, salary)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getInfo(){
        console.log('Info');
    };

    getInfo(name, age){
        console.log(`${this.name}, ${this.age}`);
    };


    getInfo(name, age, salary){
        console.log(`${this.name}, ${this.age}, ${this.salary}`);

    };
}

let e1 = new Employee('Tom',40,455500);

e1.getInfo();
//e1.getInfo('Tim',30);
//e1.getInfo('David',50,111111);