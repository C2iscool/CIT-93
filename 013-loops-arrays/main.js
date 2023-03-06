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

const calcAvg = () => {
    const avgMPG = (myArray[0] + myArray[2]) / 2
    updateDOM(`Average MPG: ${avgMPG}`)
}

trackMPGCost(300, 10, 4)
trackMPGCost(300, 10, 2)
calcAvg()