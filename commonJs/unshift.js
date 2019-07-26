


let arr = new Array(1000000).fill(1)

console.time("unshift")

arr.unshift(1)

console.timeEnd("unshift")

console.time("concat")
let num = [1];
num.concat(arr)

console.timeEnd("concat")
