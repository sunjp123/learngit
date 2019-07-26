



function findr(s,p1,p2){
    if(p1>=p2) return 0
    else if(p2 > s.length) return p2 - p1 - 1;
    let substr = s.slice(p1,p2).split('').reverse().join('')
    if(~s.indexOf(substr)) {
        return findr(s,p1,++p2)
    }
    else{
        return findr(s,++p1,++p2)
    } 
}
