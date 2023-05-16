const formEl = document.getElementById('form')
const output = document.getElementById('output')

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    output.appendChild(newEl)
}

function startWorkout (type, reps, time, fn) {
    fn(`Start doing ${type}. Your target is ${reps} of them.`, `p`)
    setTimeout(() => {
        fn(`Time is Up! Did you do all your ${type}?`, 'p')
    }, time * 1000)
}

// function startWorkoutPromise () {
//     return new Promise((resolve, reject) => {
//         resolve(`Start doing ${type}. Your target is ${reps} of them.`, 'p')
//         setTimeout(() => {
//             resolve(`Time is up! Did you do all your ${type}?`, 'p')
//         }, time * 2000)
//     })
// }

// startWorkoutPromise()

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM)
    formEl.reset()
})