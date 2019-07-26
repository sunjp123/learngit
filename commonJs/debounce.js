

const debounce = function(fn,delay){
    let delayTimer;
    return function(){
        let args = arguments;
        clearTimeout(delayTimer)
        delayTimer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}