const person={
    name: Sindhu,
    age:27,
    address:["Hyderabad","Vijayawada","Mumbai","Vizag"]
};
console.log("Person Details:");
console.log(` Name : ${person.name}`);
console.log(`Age : ${person.age}`);
console.log(`Address:`);

for(let i=0;i<person.address.length;i++){
    console.log(`${person.address[i]}`);
}
