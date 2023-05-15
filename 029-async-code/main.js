// let pizza

// function orderPizza() {
//     console.log('Order pizza')
//     setTimeout(() => {
//         pizza = `🍕`
//         console.log(`Eat ${pizza}`)
//     }, 2000)
// }
// pizza = orderPizza()

function orderPizza(callback) {
    setTimeout(() => {
        const pizza = `🍕`
        callback(pizza)
    }, 2000)
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady)
console.log(`Call Qoli`)

window.addEventListener('click', callback)

function callback() {
    console.log('Clicked')
}

function thing1 (callback) {
    callback()
}

function thing2 (callback) {
    callback()
}

function thing3 (callback) {
    callback()
}

thing1(() => {
    thing2(() => {
        thing3()
    })
})