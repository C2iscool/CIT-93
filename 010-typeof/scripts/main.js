let testSubjectOne = '7' // testSubjectOne is a string
console.log('testSubjectOne is Milk which is typeof', (typeof testSubjectOne))

let testSubjectTwo = 7 // testSubjectTwo is a number
console.log('testSubjectTwo is 7 which is typeof', (typeof testSubjectTwo))

let testSubjectThree = true // testSubjectThree is a boolean
console.log('testSubjectThree is true which is typeof', (typeof testSubjectThree))

console.log(testSubjectTwo == testSubjectOne) // "==" is the abstract equality operator, which will do a type conversion
console.log(testSubjectTwo === testSubjectOne) // "===" is the strict equality operator, which does not do a type conversion

let chrisVar
console.log(`chrisVar is typeof ${typeof chrisVar}`) //chrisVar is "undefined" because a value has not been assigned to it

let chrisVarTwo = null
console.log(`chrisVarTwo is typeof ${typeof chrisVarTwo}`) //chrisVarTwo is "null"/"object" because it has been intentionally set to this null value

const chrisConst = 77 //const is a variable type that only lets you declare it once
//chrisConst = 'Chris' <-- this code would cause an error in the console

//if (false) {
//    const chrisConst = 77
//    console.log(chrisConst)
//} else {
//    
//}

//do not use var 