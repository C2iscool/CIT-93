const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}
async function photos() {
fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => updateDOM)
}

photos()