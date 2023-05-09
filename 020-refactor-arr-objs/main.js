const formEl = document.getElementById('form-input')
const err = document.getElementById('err')
const avg_output = document.getElementById('output-avg')

const MY_DATA = []

const updateDOM = (input, id) => {
    divEl = document.querySelector(id)
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const trackMPGandCost = (obj) => {
    const MPG = Math.round(obj.miles/obj.gallons)
    const tripCost = Math.round(obj.gallons * obj.price)
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`, '#output')
    obj.MPG = MPG
    obj.tripCost = tripCost
 
    return obj
}

const calcAvg = () => {
    let sumMPG = 0
    let sumTripCost = 0
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost =+ obj.tripCost
    })
    let avgMPG = Math.round(sumMPG/MY_DATA.length)
    let avgTripCost = Math.round(sumTripCost/MY_DATA.length)
    updateDOM(`Average MPG: ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost: ${avgTripCost}`, '#output-avg')
}

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
        const newDataObj = {
            miles: miles,
            gallons: gallons,
            price: price
        }
        err.textContent = ''
        avg_output.textContent = ''
        const updateDataObj = trackMPGandCost(newDataObj)
        MY_DATA.push(updateDataObj)
        calcAvg()

    }
    formEl.reset()

})

//feedback left in README.md