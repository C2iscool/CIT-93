class Person { // When creating classes, Pascal casing is used rather than Camel casing. e.g. "ChrisAcosta"
    constructor(firstName, lastName, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address
    }
    showStatus() {
        console.log(`${this.firstName} lives at ${this.address}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this.classList = classList
    }
    showStatus() {
        console.log(`${this.firstName} lives at ${this.address} and is taking ${this.classList}`)
    }
}

const chris = new Student("Chris", "Acosta", "1337 Anonymous Dr", ["PE17B", "CIT93"])
chris.showStatus()
const walter = new Person("Walter", "White", "308 Negra Arroyo Lane")
walter.showStatus()