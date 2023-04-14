// // ts variables
// // const character = "Miles"
// // const age = 23
// // const isLogedIn = true

// //ts functions
// const circumference = (diameter:number)=>{
// return diameter*Math.PI
// }
// console.log(circumference(7.5))

// //arrays

// let names = ['miles', 'Kwesi']
// names.push('Ben') // only accept strings because thats what is initialy assigned to
// // names.push(23) === will give error
// // names.push(true) === will give error

// //mix array

// let mixedArray = [true, "Miles",34]
// mixedArray.push(false)
// // mixedArray=[23,'Me', true]
// // console.log(mixedArray)

// //objects

// // let obj = {name:'Ben', skills:'Calculate', age:23}
// // console.log(obj)
// // obj={name:'Miles', age:34, skills:'Read'}
// // console.log(obj)

// //explicit types

// // let namex:string
// // let age:number
// // // namex= 32 //this will give error
// // namex = 'Miles'
// // age = 33

// // //arrays
// // let myAr: string[]=[]
// // myAr.push('Miles')
// // // myAr.push(32) this will throw an error


// // //union types for array

// // let mixed:(string|number)[] =[]
// // mixed.push('ben')
// // mixed.push(33)
// // // mixed.push(true) this will throw an error cos it has not been initialized to accwpt booleans

// // //union types for variables

// // let uid:string|number|boolean
// // uid='Miles'
// // uid=23
// // uid = true

// // //objects
// // let miles:object 

// // miles={ages:32, name:'Miles'}

// // let miles2:{name:string, age:number}

// // miles2={name:'Nyanskon', age:23}
// // // miles2={name:'Nyanskon', age:23, skills:'mmm'} will throw an error


// //any type
//  //not advisabel to use it
// let age:any
// age = true
// console.log(age)
// age =32
// console.log(age)
// age = "Miles"
// console.log(age)

// age = {name:'Ben'}
// console.log(age)

// //any array

// let mixed1:any[] =[]
// mixed1.push(23, 'yours', true)
// console.log(mixed1)

// let anyObj:{name:any, age:any}

// anyObj={name:"Miles", age:33}

// // ts functions


// let greet:Function=()=>{
//     console.log('Hello')
// }
// // greet = 'Mile'  will throw error

// greet =()=>{
//     console.log('Hello world')
// }
// greet()

// const add = (a:number, b:number)=>{
//     console.log(a+b)
// }
// add(4,6)

// // add(2,'5') throws error

// //optional argument <>when you don't want to include a certain parameter when calling the function<> 

// const add2 =(a:number, b:number, c?:number|string)=>{
//     //withou the question mark, it will throw an error
// console.log(a+b)
// console.log(c)//will output undefined
// }
// add2(2,5)

// //optional parameter with default value

// const subtract =(a:number, b:number, c:number|string=10)=>{
//     //NB: always declear the required paremeters first, before the optional one
// console.log(c)
// }
// subtract(2,4)

// //return 

// const mult = (x:number, y:number):number=>{
// return x*y
// }

// const result = mult(6,7)

// //type alias
// //helps to create one type, which can be used anywhere in the code, ie. it prevents code repetition
// type StringOrNum=string|number

// let example1:StringOrNum
// example1=43
// console.log(example1)
// example1="Miles"
// console.log(example1)

// const myFunct:Function =(name:StringOrNum, item:number)=>{
// return {name,item}
// }
// const invokeFunction = myFunct(true,false)
// console.log(invokeFunction)

//function signature <>Define the general structure of a function<>

// example1
let greet: (a:string, b:string)=>void;
greet=(name:string, greeting:string)=>{
    console.log(`${name} says ${greeting}`)
}

// example 2

let calc:(a:number, b:number, c:string)=>number
calc =(num1:number, num2:number,action:string)=>{
    if(action==='add'){
        return num1+num2
    }
    else{
        return num1-num2
    }
}


//example3 

let logDetails:(obj:{name:string, age:number})=>void


logDetails= (person:{name:string, age:number,})=>{
console.log(`${person.name} is ${person.age} years old`)
}

    //you can replace the above code with
    type personType = {name:string, age:number}
    logDetails= (person:personType)=>{
        console.log(`${person.name} is ${person.age} years old`)
    }

    