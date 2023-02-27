//Update the DOM

const myArray = []

const updateDOM = (input) => {
    divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const trackMPGCost = (mi = 10, gal = 1, cost = 2) => {
    const MPG = Math.round(mi/gal)
    const tripCost = gal * cost
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`)
    myArray.push(MPG, tripCost)
}

(trackMPGCost(300, 10, 4.20))
updateDOM(myArray)