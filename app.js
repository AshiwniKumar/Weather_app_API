const apiKey = "fa92eb8ec296630fef077c961148e249" 
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const inputEl = document.querySelector('.search input');
const btnEl = document.querySelector('.search button');

const tempEl = document.querySelector('.temp')
const cityEl = document.querySelector('.city')
const humidityEl = document.querySelector('.humidity')
const windEl = document.querySelector('.wind')
const imgEl = document.querySelector('.weather img')

function updateImg(cityData){

    if(cityData.weather[0].main == "Clouds"){
        imgEl.src = 'images/clouds.png'
    }
    else if(cityData.weather[0].main == "Clear"){
        imgEl.src = 'images/clear.png'
    }
    else if(cityData.weather[0].main == "Drizzle"){
        imgEl.src = 'images/drizzle.png'
    }
    else if(cityData.weather[0].main == "Mist"){
        imgEl.src = 'images/mist.png'
    }
    else if(cityData.weather[0].main == "Rain"){
        imgEl.src = 'images/rain.png'
    }
    else{
        imgEl.src = 'images/snow.png'
    }

}

function updateData(cityData){

    tempEl.innerText=`${Math.round(cityData.main.temp)}°c`
    cityEl.innerText=`${cityData.name}`
    humidityEl.innerText=`${cityData.main.humidity}%`
    windEl.innerText=`${cityData.wind.speed}km/h`
}

async function getWeatherData(cityName){

    const response =await fetch(`${URL}${cityName}&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    updateData(data);
    updateImg(data);
}

btnEl.addEventListener('click', ()=>{
    const cityName = inputEl.value;

    getWeatherData(cityName);
})

