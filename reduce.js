

// let arr = [10,20,30,40,50,60]

// //  let x = arr.reduce( (sum,value,index)=>{ 
// //     // console.log("sum",sum)
// //     return sum+value
// // }, 0 )

// let x = arr.reduce( (sum,value,index)=>{ return sum+value } , 0 )

// 
// console.log(x)


// arr.reduce(p1,p2)


//  sum = sum+value



// let arr = [10,20,[30,40],50,60,[70,80,90],100]


//   let x = arr.reduce((brr, value)=>{
//       console.log(brr, value)

//     if(Array.isArray(value)){
//         return [...brr, ...value]
//     }
//     else{
//         return [ ...brr, value]
//     }

//   }, [])


//   console.log(x)









// [10,20,30,40,50,60,70,80,90,100]

// let x = arr.flat()

// console.log(x)
// let brr =[]
// for(let  t of arr){
//      if(Array.isArray(t)){
//         // [30,40]
//         for(let x of t){
//             brr.push(x)
//         }
//      }
//      else{
//          brr.push(t)
//      }
// }

// console.log(brr)


// let a1 = [10,20,30,40,50]
// let x = a1.push(100)
// console.log(x) // 6



let person = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 30 }
  ];


//   let x = person.reduce((obj, value) =>{
//     //    obj[value.age] = [value]
//     console.log("value", value, obj)
//       if(value.age in obj){
//             obj[value.age].push(value)
//       }
//       else{
//             obj[value.age] = [value]
//       }
//       return obj
//   },{})


// let x = person.reduce((obj, item) =>{
//      let key = item.age // 25
//      console.log(obj)


//      if(key in obj){
//          obj[key].push(item) // [{ name: 'Alice', age: 25 }]
//      }
//      else{
//         obj[key] = [item] // {25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]}
//         // {25: [{ name: 'Alice', age: 25 }]
//         // 30: [{ name: 'Bob', age: 30 }]}
//    //  }
//         // obj[key].push(item)
//      }


//      return obj
    
      
//   },{})


//   console.log(x)

//   {
//     '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//     '30': [{ name: 'Bob', age: 30 }, { name: 'Dave', age: 30 }]
//   }


let fruits = ['grapes','apple', 'banana', 'grapes','banana','apple', 'mango', 'orange','banana','grapes']

// let s = new Set()

// let x = fruits.reduce((s,value) =>{
//     console.log("set", s)
//     s.add(value)
//     return s

// }, new Set())

let x = fruits.reduce((crr,value) =>{
    if(!crr.includes(value)){
        crr.push(value) 
    }

    return crr

}, [])


console.log(x)



// let y = fruits.reduce((obj, value)=>{

//     if(value in obj){
//         obj[value] = obj[value]+1
//     }
//     else{
//         obj[value] = 1 // {grapes: 1, apple: 1, banana: 1}
//     }

//     return obj

// }, {})

// console.log(y)


// return an object with the count of each fruit
// { grapes: 3, apple: 2, banana: 3, mango: 1, orange: 1 }

// return an array of unique fruits
  



// 1 crore millisecond  to hours =  277.777778 hours = 11.5740741 days = 0.0317 years
