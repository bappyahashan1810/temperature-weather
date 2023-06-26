const API_KEY = `e0a45d4fa9a9e85e38e0fa69c3566a5f`;

const loadTeampareture = (searchFieldText = 'dhaka') => {
    const city = searchFieldText;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchFieldText}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data, city));
}

const displayTempareture = (temperature, loaction) => {
    console.log(temperature);
    const temperatureField = document.getElementById('Temperature');
    const loactionCity = document.getElementById('loaction-city');
    const weather = document.getElementById('weather');


    temperatureField.innerText = temperature.main.temp;
    loactionCity.innerText = loaction;
    weather.innerText = temperature.weather ? temperature.weather[0].main : temperature.weather[1].main;
}

const getsearchField = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    loadTeampareture(searchFieldText)
    searchField.value = '';
}

document.getElementById('search-field').addEventListener('keydown', function (e) {

    if (e.key === 'Enter') {
        getsearchField();
    }
})


document.getElementById('search-btn').addEventListener('click', function () {
    getsearchField();
})
loadTeampareture();