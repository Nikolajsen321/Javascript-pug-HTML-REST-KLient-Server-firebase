// bubbleSort.js
let list = ["Hej","Med","Dig"];
for (let i = list.length - 1; i >= 0; i--) {
for (let j = 0; j <= i - 1; j++) {
if (list[j] > list[j + 1]) {
let temp = list[j];
list[j] = list[j+1]; 
list[j+1] = temp;
}
}
}
console.log(list); // => 0,1,2,4,7,8,9,13,16

let