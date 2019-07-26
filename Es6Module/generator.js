

function log(name){
    return function d(message){

        console.log(name + message)
    }
}

function run(gen){
    let g =  gen()
    function next(data){
        let n = g.next(data)
        if(n.done) return n.value
        n.value(next(data))
    }
    next()
}

run(function* (){
    yield log('test 1')
    yield log('test 2')
    console.log('sdfsdfdsf')
})


function* gen(x){
    let y = yield x + 2
    console.log(y)
    return y
}

let g = gen(1)
g.next()
g.next(2)

