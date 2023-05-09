const formEl = document.getElementById('form-input')
const err = document.getElementById('err')
const avg_output = document.getElementById('output-avg')

// const MY_MPG = []
// const MY_TRIP_COST = []

const MY_DATA = [

const updateDOM = (input, id) => {
    divEl = document.querySelector(id)
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}, //keep this 

const trackMPGandCost = (obj) => {
    const MPG = Math.round(obj.mi/obj.gal)
    const tripCost = Math.round(obj.gal * obj.cost)
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`, '#output')
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
},

// const calcSUM = (arr) => {
//     let sum = 0
//     for(value of arr) {
//         sum += value
//     }
//     return sum
// }
const calcAvg = () => {
    let sumMPG = calcSUM(MY_MPG)
    let sumTripCost = calcSUM(MY_TRIP_COST)
    let avgMPG = Math.round(obj.sumMPG/MY_MPG.length)
    let avgTripCost = Math.round(obj.sumTripCost/MY_TRIP_COST.length)
    updateDOM(`Average MPG: ${obj.avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost: ${obj.avgTripCost}`, '#output-avg')
},
]
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