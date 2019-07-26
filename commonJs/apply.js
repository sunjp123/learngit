

function concat(){
    let ret = [],args = [].slice.call(arguments);
    Array.prototype.push.apply(ret,arguments)
    return ret;
}
console.log(concat(1,2,3,4))