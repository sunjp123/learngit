


let arr1 = [],arr2 = new Array(100000).fill([1,1,1,1,1]);

console.time("concat")

arr1.concat(...arr2)

console.timeEnd("concat")

console.time("push")

let arr3 = []
arr3.push(...arr2);

console.timeEnd("push")

console.time("push prototype")

Array.prototype.push.apply([],arr2)

console.timeEnd("push prototype")
