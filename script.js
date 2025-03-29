const API_key = "223c2a947f1e49c6eb8bcb25a2e88941";
const API_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
//let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city_input) {                                     //handle task that take time
    const response = await fetch(API_url + city_input + `&appid=${API_key}`);  // fetch the http response which is given by API
    var data = await response.json()                           //converts the json data into js object
    console.log(data)

    document.querySelector(".city_name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind_speed").innerHTML = data.wind.speed + "km/h";

    // if(data.weather[0].main == 'Clouds'){
    //     weatherIcon.src = "https://www.flaticon.com/free-icon/cloudy_3313983";
    // }
    // else if(data.weather[0].main == 'Clear'){
    //     weatherIcon.src = "\weather_app\weather-app-img\images\clear.png"
    // }
    // else if(data.weather[0].main == 'Rain'){
    //     weatherIcon.src = "https://www.flaticon.com/free-icon/rainy_3313966"
    // }
    // else if(data.weather[0].main == 'Drizzle'){
    //     weatherIcon.src = "\weather_app\weather-app-img\images\drizzle.png"
    // }
    // else if(data.weather[0].main == 'mist'){
    //     weatherIcon.src = "\weather_app\weather-app-img\images\mist.png"
    // }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

