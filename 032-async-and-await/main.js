// async function start() {
//     const data = await fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
//     const result = await data.json()
//     console.log(result.properties.periods[1].shortForecast)
// }

// async function start2() {
//     fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
//         .then(data => data.json())
//         .then(result => {
//     console.log(result.properties.periods[1].shortForecast)
//         })
// }

// start()

function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            //resolve('THIS IS DATA')
            reject('OH NO BRO')
        }, 1)
    })
}

async function start() {
    try {
        const result = await getData()
        // SUCCESS
    } catch (error) {
        // FAILURE
    }
}

start()