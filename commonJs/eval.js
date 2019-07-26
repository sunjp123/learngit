


// (function(){
//     console.log(this)
//     eval("console.log(this)")
// }())


function test(){
    this.handle = function(){
        console.log(this)
        eval("console.log(this)")
    }
}

let obj = new test()

obj.handle()