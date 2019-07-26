


function test(){
    this.name = "test"
    this.handle = function(){
        console.log('handle')
    }
}

let testObj = new test()

console.log(testObj.__proto__)



function testF(a){
    let cache = a;
    function child(b){
        return testF(a+b)
    }
    child.value = cache
    return child
}
let kk = testF(1)(2)
console.log(kk(3).value)
console.log(kk(4).value)
console.log(testF(1)(2)(3).value)


function testClass(){
    if(!(this instanceof testClass)){
        return new testClass()
    }
    this.handle = ()=>{
        console.log(this instanceof testClass)
    }
}

let st = new testClass()

st.handle()

let st2 = testClass()

st2.handle()


