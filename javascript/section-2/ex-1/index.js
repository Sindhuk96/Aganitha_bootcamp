const arr=[1,2,3];
console.log(`Initial Array : ${arr}`);

arr.unshift(4);
console.log(`Array after adding ele 4 at front : ${arr}`);
arr.splice(2,0,5);
console.log(`Array after adding ele 5 at index 2 : ${arr}`);
arr.push(6);
console.log(`Array after adding ele 6 at end : ${arr}`);

