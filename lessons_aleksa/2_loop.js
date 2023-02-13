// pptx pp-27-30 read again

// a single execution of the loop body is called an iteration
// ---------------------------WHILE
while (condition) {
    // do this
    // loop body
}

// ---------------------------
while (x) alert(x--)
let i = 0;
while (i < 3){
    alert(i); // 0  1  2
    i++; // if this part mission, infinite loop
}

let j = 3;
while (j){
    // when j becomes 0
    // the condition becomes falsy
    // and the loop stops
    alert(j); // 3  2  1
    j--;
}

let x = 3;
while (x) alert(x--) // 3  2  1
while (x) alert(--x) // 2  1  0


let sum = 0;
while (true){
    let value = +prompt("enter a number", "");
    if(!value) break; // if valus is false
    sum += value; // the INITIAL sum adding new value
}
alert("sum: " + sum);

// ---------------------------DO WHILE
do {
    // loop body
} while (condition)

let y = 0;
do {
    alert(y);
    y++;
} while(y < 3); // 0  1  2

// ---------------------------FOR
for (begin; condition; stop){
    //
}

for (let i=0; i<4; i++){
    //
}

let arr = [1,2,3]
let a = 100;
for (let i=0; i<arr.length; i++){ // 0,, 1, 2
    arr[i]
} 
// this loop will have 3 iterations

// ---------------------------CONTINUE
// if this is true, skip the rest of the code
for (let i=0; i<6; i++){
    // if true, skip the remaining part of the body
    if(i%2==0) continue;
    alert(i); // 1  3  5
}

// ---------------------------NESTED LOOPS
// check out on F12
for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        let input = prompt(`value at codes (${i},${j})`, "");
        // what if we want to exit from here to Done?
    }
}
alert("Done"); // 9 times in total
// (0,0)
// (0,1)
// (0,2)
// (1,0)
// (1,1)
// (1,2)
// (2,0)
// (2,1)
// (2,2)
// Done