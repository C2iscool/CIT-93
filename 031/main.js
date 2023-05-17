function fetchData() {
    return new Promise(function(resolve, reject){
        fetch('https://api.weather.gov/gridpoints/HNX/52,100/forecast')
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[0].temperature));
    })
}

function displayData(weather) {
    console.log(weather)
}

function onError(err) {
    console.log(`Error ${err}`)
}

fetchData().then(displayData).catch(onError)