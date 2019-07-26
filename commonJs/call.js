


Function.prototype.callMy = function(obj){
    let args = []
    for(let i=1,len=arguments.length;i<len;i++){
        args.push(arguments[i])
    }
    obj['handle'] = this;
    let ret = eval(`obj["handle"](${args.join(',')})`)
    delete obj['handle']
    return ret
}

function test(){
    this.mix = 3
}

test.prototype.handle = function(a,b){
    return +a + +b + this.mix
}

let testObj = {
    mix:4
}

let ret = test.prototype.handle.callMy(testObj,1,2)

console.log(ret)

