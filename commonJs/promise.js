


console.log("start")

new Promise((resolve,reject)=>{
    console.log("promise 1")
    resolve()
}).then(()=>{
    console.log("promise 1 then")
})

console.log("1-2")

// setTimeout(()=>{
//     console.log("setTimeout1")
// },0)

new Promise((resolve,reject)=>{
    resolve(console.log("promise 2"))
}).then(()=>{
    console.log("promise 2 then")
})


setTimeout(()=>{
    new Promise((resolve,reject)=>{
        console.log("promise 3")
        resolve()
    }).then(()=>{
        console.log("promise 3 then")
    })
    console.log("setTimeout2")
},0)

setTimeout(()=>{
    console.log("setTimeout3")
},0)