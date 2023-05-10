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

const trackMPGandCost = (miles, gallons, price) => {
    const MPG = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`, '#output')
    return {
        MPG: MPG,
        tripCost: tripCost,
        miles: miles,
        gallons: gallons,
        price: price
    }

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

const isFormValid = (miles, gallons, price) => {
    const errMsg = []
    if(miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Miles input must be greater than zero')
    }
    if(price > 1000) {
        errMsg.push('Wow, are the prices really this bad? I think an EV is your best option now.')
    }
    if(errMsg.length > 0) {
        err.textContent = errMsg
        return false
    } else {
        return true
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    
    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {
        err.textContent = ''
        avg_output.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        calcAvg()
    }
    formEl.reset()
})

