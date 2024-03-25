
const API_KEY = `c445fed8736e10dc1f0930914e0952cd`;
function searchTemperature(){
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
// searchTemperature();

function setInnerText (id, text){
    const name = document.getElementById(id).innerText = text;
    console.log(name);
}

function displayTemperature(temperature) {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}