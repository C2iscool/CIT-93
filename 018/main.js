const formEl = document.getElementById('form-input')
const err = document.getElementById('err')
const avg_output = document.getElementById('output-avg')


trackobj = {
MY_MPG: [],
MY_TRIP_COST: [],

updateDOM: (input, id) => {
    const divEl = document.querySelector(id)
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
},

trackMPGandCost: (mi = 10, gal = 1, cost = 2) => {
    const MPG = Math.round(mi/gal)
    const tripCost = Math.round(gal * cost)
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`, '#output')
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
},

calcSUM: (arr) => {
    let sum = 0
    for(value of arr) {
        sum += value
    }
    return sum
},

calcAvg: () => {
    let sumMPG = calcSUM(MY_MPG)
    let sumTripCost = calcSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost/MY_TRIP_COST.length)
    updateDOM(`Average MPG: ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost: ${avgTripCost}`, '#output-avg')
},

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if(miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Miles input must be greater than zero')
    }

    if(price > 1000) {
        errMsg.push('Wow, are the prices really this bad? I think an EV is your best option now.')
    }

    if(errMsg.length > 0) {
        err.textContent = errMsg
    } else {
        err.textContent = ''
        avg_output.textContent = ''
        trackMPGandCost(miles, gallons, price)
        calcAvg()
    }
    formEl.reset()

})
}