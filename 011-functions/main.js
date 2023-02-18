//Functions are fun!

function myMath (a, b) {
    let result = a * b
    return result 
    // console.log(`Result is ${a + b}`)
    // console.log(`Result is ${a - b}`)
    // console.log(`Result is ${a * b}`)
    // console.log(`Result is ${a / b}`)
}

const result = myMath(7, 7)
console.log(`function result returned as ${result}`)

function ozToCups (a) {
    let result = a / 8
    return result
}

console.log(`${ozToCups(1)}`)

//functions may also be created by declaring a constant variable as like this:
//const myMath = () {
//
//}