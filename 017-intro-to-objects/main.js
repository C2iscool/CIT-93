const myArray = []

// console.log(typeof myObject)
// console.log(typeof myArray)
// console.log(myArray === myObject) //These are both objects, but are different types of object

const myNumber = 7
const myObject = {
    name: 'Chris',
    age: 21,
    likes : 0,
    hobbies: ['computers', 'video games', 'music'],
    mobilePhone: {
        make: 'Apple',
        model: 'iPhone 13',
        os: 'iOS 16'
    },
    myGreeting: function(person) {
        return `${this.name} who loves ${this.hobbies}, says: Heyo ${person}!`
    },
    increaseLikes: function() {
        this.likes += 1
    },


    myPetAction: function () {
        return `${this.name} started petting ${myDog.name}, who loves ${myDog.hobbies}`
    }
}
const chrisObj = myObject
chrisObj.increaseLikes()
console.log(chrisObj)
chrisObj.age = 21

const myDog = {
    name: 'Maya',
    age: 13,
    hobbies: ['going on walks', 'sleeping', 'playing with toys']
}

const greeting = myObject.myGreeting('Rio')
console.log(greeting)

const petAction = myObject.myPetAction()
console.log(petAction)

console.log(myObject.mobilePhone.make.length)

for(key in myObject) {
    console.log(` key ${key} and value ${myObject[key]}`)
}




// I played with the number value method mostly. It was interesting to see that it returned a number corresponding to the letter in the string. 

//const myObjectTwo = new Object (part of another potential way to implement objects.)