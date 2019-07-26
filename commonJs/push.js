


let arr = new Array(10).fill(1)

console.time("push")

arr.push(1)

console.timeEnd("push")

console.time("length")
arr[arr.length] = 1;

console.timeEnd("length")
