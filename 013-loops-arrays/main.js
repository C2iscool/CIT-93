const myMPG = []
const myTripCost = []

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
    myMPG.push(MPG)
    myTripCost.push(tripCost)
}

const calcAvgMPG = () => {
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++) {
        totalMPG = totalMPG + myMPG[i]
    }
    let avgMPG = Math.round(totalMPG/myMPG.length)
    updateDOM(`Average MPG is ${avgMPG}`)
}

//code challenge

const calcAvgTripCost = () => {
    let totalTripCost = 0
    for (let i = 0; i < myTripCost.length; i++) {
        totalTripCost = totalTripCost + myTripCost[i]
    }
    let avgTripCost = Math.round(totalTripCost/myTripCost.length)
    updateDOM(`Average Trip Cost: ${avgTripCost}`)
}

trackMPGandCost(300, 10, 4)
trackMPGandCost(300, 10, 2)
trackMPGandCost(200, 11, 3)
trackMPGandCost(200, 9, 5)
trackMPGandCost(100, 12, 2)
trackMPGandCost(100, 18, 4)
calcAvgMPG()
calcAvgTripCost()