//Update the DOM

const updateDOM = (input) => {
    divEl = document.querySelector('#output')
    const p = document.createElement('h1')
    p.textContent = input
    divEl.appendChild(p)
}

updateDOM(7)