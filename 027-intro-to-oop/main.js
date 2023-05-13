class Person { // When creating classes, Pascal casing is used rather than Camel casing. e.g. "ChrisAcosta"
    constructor(firstName, lastName, address){
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address
    }
    getfirstName() {
        return `${this._firstName}`
    }
    setFirstName(newFirstName) {
        this._firstName = newFirstName
    }
    getLastName() {
        return `${this._lastName}`
    }
    setLastName(newLastName) {
        this._lastName = newLastName
    }
    getAddress() {
        return `${this._address}`
    }
    setAddress(newAddress) {
        this._address = newAddress
    }
    showStatus() {
        console.log(`${this.getfirstName()} lives at ${this.getAddress()}`)
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address)
        this._classList = classList
    }
    getClassList() {
        return `${this._classList}`
    }
    setClassList(newClassList) {
        this._classList = newClassList
    }
    showStatus() {
        console.log(`${this.getfirstName()} lives at ${this.getAddress()} and is taking ${this.getClassList()}`)
    }
}

const chris = new Student("Chris", "Acosta", "1337 Anonymous Dr", ["PE17B", "CIT93"])
chris.showStatus()
const walter = new Person("Walter", "White", "308 Negra Arroyo Lane")
walter.showStatus()

console.log(chris.getfirstName())