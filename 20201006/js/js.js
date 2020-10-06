//js.js document

console.log('Det kører!');

const token = "c55283147e5e2dcdf6decfc75d9b0681"; // save your token in this variable

const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=" +
    token +
    "&units=metric";

$(document).ready(function () {

    // get the weather data: henter api'en 
    fetch(aarhus).then(response => {
        return response.json();
    }).then(data => {

        console.log(data); 
        $('#result').append(
            '<div class="weatherInfo">' + '<img src="../images/temperatur.png">' +
            '<h4>Temperaturen er ' + data.main.temp + ' grader</h4>' + '<figure><img src="http://openweathermap.org/img/w/50d.png">'+ '<h4>Vindhastigheden er ' + data.wind.speed + ' m/s</h4>' + 
            '<figure><img src="http://openweathermap.org/img/w/' +
            data.weather[0].icon +
            '.png" alt="The weather : ' +
            data.weather[0].main +
            '"></figure>' + data.weather[0].main +
            ' i ' +
            data.name + ', ' + data.sys.country +
            '</div>');

    }).catch(err => {
        // Do something for an error here
        console.log('There was an error ...');

        
    });


}); // document ready end

mapboxgl.accessToken = 'pk.eyJ1IjoicGF1bGluZXNhIiwiYSI6ImNrZnFrZW94cjE1NjYyem9lYXg5dm5xbDEifQ.q_A2UiOFc2bEjL8-yUUwVg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/paulinesa/ckfxq1dq90hae19mkt5pc590j', // style URL
    center: [10.218797, 56.164464], // starting position [lng, lat]
    zoom: 16 // starting zoom
});


