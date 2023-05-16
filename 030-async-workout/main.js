const formEl = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}

function startWorkout (type, reps, time, fn) {
    fn(`Start doing ${type}. Your target is ${reps} of them.`, `p`)
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            // resolve(fn(`Time is Up! Did you do all your ${type}?`, 'p'))
            reject(fn(`OH NO BRO`, 'p'))
        }, time * 1000)
    })
}

function onError(err) {
    console.log(`Error ${err}`)
}

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM).then().catch(onError)
    formEl.reset()
})