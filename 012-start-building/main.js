//Update the DOM

const updateDOM = (input) => {
    divEl = document.querySelector('#output')
    const h1 = document.createElement('h1')
    h1.textContent = input
    divEl.appendChild(h1)
}

const mileage = (mi = 10, gal = 1, cost = 2) => mi/gal*cost

updateDOM(mileage(300, 10, 4.20))