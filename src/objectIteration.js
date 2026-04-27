
let user = 
{
    name: 'Tom',
    age: 30,
    city: 'LA',
    address:{
        flat: 101,
        pin: 411017
    },
    
devices: ['iphone','mouse','keyboard'],
}

for(let key in user.address)
console.log(user.address[key]);
console.log(user.devices[2]); 

let jsString = JSON.stringify(user,null,2);
console.log(jsString);
console.log(typeof jsString);
console.log('===================');
let jsObject = JSON.parse(jsString);
console.log(jsObject);
console.log(typeof jsObject);