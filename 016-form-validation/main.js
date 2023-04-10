const formEl = document.getElementById('form-input')
const err = document.getElementById('err')

const MY_MPG = []
const MY_TRIP_COST = []

const updateDOM = (input) => {
    divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const trackMPGandCost = (mi = 10, gal = 1, cost = 2) => {
    const MPG = Math.round(mi/gal)
    const tripCost = Math.round(gal * cost)
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`)
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
}

const calcSUM = (arr) => {
    let sum = 0
    for(value of arr) {
        sum += value
    }
    return sum
}
const calcAvg = () => {
    let sumMPG = calcSUM(MY_MPG)
    let sumTripCost = calcSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
    updateDOM(`Average MPG: ${avgMPG}`)
    updateDOM(`Average Trip Cost: ${avgTripCost}`)
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if(miles === 0) {
        errMsg.push('Miles input must be greater than zero')
    }

    if(errMsg.length > 0) {
        err.textContent = errMsg
    } else {
        trackMPGandCost(miles, gallons, price)
    }


})