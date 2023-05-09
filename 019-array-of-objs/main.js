const updateDOM = (input, id) => {
    const divEl = document.getElementById(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const myArrObjs = [
    {
        name: 'chris',
        hairColor: 'black',
    },
    {
        name: 'rio',
        hairColor: 'red',
    },
    {
        name: 'Maya',
        hairColor: 'Golden Brown',
    }

]

myArrObjs.forEach(obj => {
    const str = `${obj.name[0]}, has ${obj.hairColor[0]} hair color`
    updateDOM(str, 'output')
})