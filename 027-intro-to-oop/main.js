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

const chris = new Person("Chris", "Acosta", "1337 Anonymous Dr")
chris.showStatus()
const walter = new Person("Walter", "White", "308 Negra Arroyo Lane")
walter.showStatus()