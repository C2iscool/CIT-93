const myMPG = []
const myTripCost = []

const updateDOM = (input) => {
    divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const trackMPGCost = (mi = 10, gal = 1, cost = 2) => {
    const MPG = Math.round(mi/gal)
    const tripCost = Math.round(gal * cost)
    updateDOM(`MPG: ${MPG} Trip Cost: ${tripCost}`)
    myMPG.push(MPG)
    myTripCost.push(tripCost)
}

const calcAvgMPG = () => {
    // const avgMPG = (myArray[0] + myArray[2]) / 2
    // updateDOM(`Average MPG: ${avgMPG}`)
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++) {
        totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = totalMPG/myMPG.length
    updateDOM(`Average MPG is ${avgMPG}`)
}

//to calculate average, we must total the amount of occurernces and divide by that number of occurrences

trackMPGCost(300, 10, 4)
trackMPGCost(300, 10, 2)
trackMPGCost(200, 11, 3)
trackMPGCost(200, 9, 5)
trackMPGCost(100, 12, 2)
trackMPGCost(100, 18, 4)
calcAvgMPG()