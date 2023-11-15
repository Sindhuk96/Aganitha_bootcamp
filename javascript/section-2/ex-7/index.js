const initialArr=[ 
    {name: "Sindhu",
    age:27,
    address:["Hyderabad","Vijayawada","Mumbai","Vizag"]
    },
    {
    name: "Dhruva",
    age:2,
    address:["Hyderabad","Mumbai"]
    }
];

const copyArr=initialArr.slice();
copyArr[1].address.push("Kolkata");
console.log("Initial array", initialArr);
console.log("copied array", copyArr);


//Any Modification of initial person address leads to change in copied person address also the copied arr is refering tosam object
