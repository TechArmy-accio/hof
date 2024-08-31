


// function hello(){
//     console.log("A")
//     return ()=>{console.log("B")}
// }


// // let x = hello()

// // //let x= ()=>{console.log("B")}
// // x()

// hello()()



function hello(){
    console.log("A")
    return ()=>{
        console.log("B")
        return ()=>{
            console.log("C")
        }
    
    }
}
// let x = hello()


// x = ()=>{
//     console.log("B")
//     return ()=>{
//         console.log("C")
//     }

// }

// let y = x()
// y = ()=>{ console.log("C")}

// y()


hello()()()








// let x = hello()

// //let x= ()=>{console.log("B")}
// x()

// hello()()



