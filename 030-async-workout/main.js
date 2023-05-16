const formEl = document.getElementById('form')
const output = document.getElementById('output')

// function updateDOM(input, id) {
//     const formEl = document.querySelector(id);
//     const p = document.createElement('p');
//     p.textContent = input;
//     formEl.appendChild(p);
// }

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)

    // function workoutTimer (type, reps, time, updateDOM) {
    //     setTimeout(() => {
    //     return updateDOM(`Good Job! You did ${reps} in ${time}.`)
    //     }, parseFloat(e.target.time.value))
    // }
    formEl.reset()
})