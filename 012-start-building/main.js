//Update the DOM

const myArray = ['MPG for Chris']

const updateDOM = (input) => {
    divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const trackMPGCost = (mi = 10, gal = 1, cost = 2) => {
    const MPG = mi/gal * cost
    const tripCost = MPG * cost
    myArray.push(MPG, tripCost)
    myArray.shift()
}

updateDOM(trackMPGCost(300, 10, 4.20))
updateDOM(trackMPGCost(320, 12, 4))