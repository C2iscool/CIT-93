let testSubject = 'Milk' // testSubject is now a string
console.log('testSubject is Milk which is typeof', (typeof testSubject))

testSubject = 7 // testSubject is now a number
console.log('testSubject is 7 which is typeof', (typeof testSubject))

testSubject = true // testSubject is now a boolean
console.log('testSubject is true which is typeof', (typeof testSubject))

testSubject = 7 // testSubject is a number
const result = testSubject + "2" // JavaScript coerces testSubject to a string, so it can be concatenated with the other operand
console.log('result is 7 + 2 is typeof - ', (typeof result)) // string