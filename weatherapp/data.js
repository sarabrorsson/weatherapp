import apiData from './API.js'

class Data{
    static getWeatherData(){
        let fetchData = fetch(apiData.apiAdress)
        .then((result) => result.json())
        return fetchData
        
    }
    
}


export default Data