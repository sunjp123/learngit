


//  当执行时上下文变更


















function bind(fn,obj){
    return function(){
        fn.call(obj,arguments)
    }
}

Function.prototype.bindr = function(){
    let fn = this , obj = [].shift.call(arguments) ,args = [].slice.call(arguments);
    return function(){
        return fn.apply(obj,args.concat([].slice.call(arguments)))
    }
}

function test(name){
    this.name = name;
    console.log(this.value)
    console.log(name)    
}
let obj = {
    value:'123'
}
let testK = test.bindr(obj,12)

testK(11112)

console.log(obj)




