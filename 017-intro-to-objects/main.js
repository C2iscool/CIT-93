const myArray = []

// console.log(typeof myObject)
// console.log(typeof myArray)
// console.log(myArray === myObject) //These are both objects, but are different types of object

const myNumber = 7
const myObject = {
    name: 'Chris',
    age: 21,
    hobbies: ['computers', 'video games', 'music'],
    mobilePhone: {
        make: 'Apple',
        model: 'iPhone 13',
        os: 'iOS 16'
    },
    myGreeting: function(person) {
        return `Heyo ${person}!`
    }
}

const greeting = myObject.myGreeting('Rio')
console.log(greeting)

//const myObjectTwo = new Object (part of another potential way to implement objects.)