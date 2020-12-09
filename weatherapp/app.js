import Data from './data.js'

(function app(){
    Data.getWeatherData().then(data => {
        console.log(data)
    })
}());