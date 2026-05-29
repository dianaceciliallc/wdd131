let country_data = {
    'Area': '587,041sq km',
    'Population': '27,691,018',
    'Capital': 'Antananarivo',
    'Currency': 'Malagasy Ariary',
    'Time Zone': 'UTC+3',
    'Calling Code': '261',
    'Internet TLD': '.mg'
}
let weather_data = { 
    'Temperature': '10ªC',
    'Conditions': 'Partly Cloudy',
    'Wind': '5 km/h',
    'Wind Chill': '9.8ªC' 
}

const data_selector = document.querySelector('.data-wrapper')
const weather_selector = document.querySelector('.weather-data')

function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

function data_map(data, selector) {
    let keys = Object.keys(data)
    let content = ""

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'Wind Chill') {
            let temp = parseFloat(data['Temperature']);
            let speed = parseFloat(data['Wind']);

            if (temp <= 10 && speed > 4.8) {
                let chillWind = calculateWindChill(temp, speed);
                data['Wind Chill'] = `${chillWind} °C`;
            } else {
                data['Wind Chill'] = 'N/A'
            }

        }
        content += `<p> ${keys[i]}: ${data[keys[i]]}</p>`
    }
    return selector.innerHTML = content
}



data_map(country_data, data_selector)
data_map(weather_data, weather_selector)