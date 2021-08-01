const getWeather = async () => {
    const getlocation = await fetch('https://api.weatherapi.com/v1/current.json?key=7ecae9c0df9f48b6b9d61023210108&q=lagos');
    const location = await getlocation.json();
    // console.log(location);
    document.querySelector('.name').innerHTML = location.location.name + ', ' + location.location.country;
    document.querySelector('.temp').innerHTML = location.current.temp_c + '<sup>°C</sup>';
    document.querySelector('#low').innerHTML = location.current.temp_c + '<sup>°C</sup>';
    document.querySelector('#feel').innerHTML = location.current.feelslike_c  + '<sup>°C</sup>';
    document.querySelector('#high').innerHTML = location.current.temp_c + '<sup>°C</sup>';
    document.querySelector('img#img').src = location.current.condition.icon;
    document.querySelector('#main').innerHTML = 'Clouds';
    document.querySelector('#wind').innerHTML = location.current.wind_mph + ' mph';
    document.querySelector('#feel').innerHTML = location.current.feelslike_c  + '<sup>°C</sup>';
    document.querySelector('#humidity').innerHTML = location.current.humidity + '%';
    document.querySelector('#desc').innerHTML = location.current.condition.text;
}
getWeather()