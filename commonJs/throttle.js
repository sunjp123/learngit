

const throttle = function(fn,delay){
    let last , delayTimer;
    return ()=>{
        let now = +new Date()
        let args = arguments
        if(last && now < last + delay){
            clearTimeout(delayTimer)
            delayTimer = setTimeout(()=>{
                last = now
                fn.apply(this,args)
            },delay)
        }else{
            last = now
            fn.apply(this,args)
        }
    }
}