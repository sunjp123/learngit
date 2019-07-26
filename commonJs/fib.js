
let argvs = process.argv.slice(2)
let execCount = 0
const fib = (function(){
    let cache = {}
    return function fibr(n){
        execCount++
        if(n == 1 || n == 2) return 1;
        if(cache[n]) return cache[n]
        return cache[n] = fib(n - 1) + fib(n - 2)
    }
}())

console.log(argvs[0])
console.time("fib-recur")
console.log(fib(argvs[0] || 1))
console.timeEnd("fib-recur")
console.log(execCount)

function fib2(n){
    if(n == 1 || n == 2) return 1;
    let p = 0, res = 1, pre = 1,i = 3;
    while(i<=n){
        p = res;
        res = res + pre;
        pre = p
        i++
    }
    return res;
}
console.time("fib2-while")
console.log(fib2(argvs[0] || 1))
console.timeEnd("fib2-while")