const formEl = document.getElementById('form-input')
const err = document.getElementById('err')
const avg_output = document.getElementById('output-avg')

const trackCalcObject = {
MY_MPG: [],
MY_TRIP_COST: [],

updateDOM: (input, id) => {
    const divEl = document.querySelector(id)
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
},

trackMPGandCost: function(mi, gal, cost = 2.22) {
    const MPG = Math.round(mi/gal)
    const tripCost = Math.round(gal * cost)
    this.updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`, '#output')
    this.MY_MPG.push(MPG)
    this.MY_TRIP_COST.push(tripCost)
},

calcSUM: (arr) => {
    let sum = 0
    for(value of arr) {
        sum += value
    }
    return sum
},

calcAvg: function() {
    let sumMPG = this.calcSUM(this.MY_MPG)
    let sumTripCost = this.calcSUM(this.MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/this.MY_MPG.length)
    let avgTripCost = Math.round(sumTripCost/this.MY_TRIP_COST.length)
    this.updateDOM(`Average MPG: ${avgMPG}`, '#output-avg')
    this.updateDOM(`Average Trip Cost: ${avgTripCost}`, '#output-avg')
},

validateForm: function (e) {
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
        this.trackMPGandCost(miles, gallons, price)
        this.calcAvg()
    }
    formEl.reset()
},
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    trackCalcObject.validateForm(e)
})