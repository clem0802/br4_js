// pptx pp8-19, read again

let obj = {
    name: "appel",
    color: "red",
    category: "food"
}

let arr = ["dog", "cat", "bird"];
for (let i = 0; i < arr.length; i++){
    arr[i] // 0 - 1 -2
}
console.log(arr[3]) // undefined
console.log(arr[arr.length - 1]) // bird
console.log(arr[- 1]) // undefined
console.log(arr.indexOf("cat")); // 1
console.log(arr.indexOf("cat") !== -1); // true
console.log(arr.includes("dog")) // true
console.log(arr.includes("fish")) // false

let newArr = arr.push("lamb");
console.log(arr); // ['dog', 'cat', 'bird', 'lamb']
console.log(arr.pop()); // lamb
console.log(arr); // ['dog', 'cat', 'bird']

// -----------------------------
let cars = ["Toyota", "Peugeot", "Audi", "Volkswagen"];
let start = 2;
let removeItems = cars.splice(start);
console.log(cars); // (2) ['Toyota', 'Peugeot']


//              0          1        2           3
//                                 -2          -1
let cars1 = ["Toyota", "Peugeot", "Audi", "Volkswagen"];
let start1 = -3;
let removeItems1 = cars1.splice(start1);
console.log(cars1); // (1) ['Toyota']

// .SPLICE(start, deleteCount)
// start (start from ...)
// deleteCount (delet how many items)

// .PLICE(start, deleteCount, "Multipla", "Veyron")


// shift removes the first one
// unshift adds an item on the first place
// pop removes the last item
// push adds an item from the end

// -----------------------------
let arr1 = [1,2,300,20,505,3000,11,404,14,333,444,5055,5051]
arr1.includes(14) // true (to find number 14 is in this array)
arr1.indexOf(14) !== -1 // true
arr1.splice(arr1.indexOf(14), 1) // we want to delet ONLY number 14
// arr1.unshift(arr1.splice(arr.indexOf(14), 1),14) // remove number 14 and replaced by 14
// console.log(arr1)
let newNum = arr1.shift();
arr1.splice(arr1.indexOf(14),1,newNum);

// if there is num 3000, remove 1st and last element
if (arr1.includes(3000)){
    arr1.shift()
    arr1.pop()
}
console.log(arr1) // [300, 20, 505, 3000, 11, 404, 333, 444, 5055]

// if there is not num 3003, add num 3 as first element
if (!arr1.includes(3003)){
    arr1.unshift(3)
}
console.log(arr1); // [3, 300, 20, 505, 3000, 11, 404, 333, 444, 5055]

// if there is a num 3000, add +3 to that num
if (arr1.includes(3003)){
    // arr1.splice(arr1.indexOf(3000), 1, 3003); // one way to do it
    let x = arr1.indexOf(3000); // better way to do it
    arr1[x] += 3;
}
console.log(arr1);



// -----------------------------
// -----------------------------
let arr2 = [1,2,300,20,505,3000,11,404,14,333,444,5055,5051]
let cars2 = ["Toyota", "Peugeot", "Audi", "Volkswagen", "BMW"];
let numbers = [1,3,4] // 2,4,5
cars2.forEach(car => { // it will take each car element individually
    if (car == "Audi"){
        // ... do something
    }
})

numbers.forEach(number => {
    let x = number + 1
    console.log(x);
})
console.log(numbers); // 1,3,4


// -----------------------------
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element); // a b c
}
