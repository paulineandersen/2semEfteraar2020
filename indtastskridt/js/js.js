/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');


$(document).ready(function () {

            console.log("jQuery 3.5.1 running. Alert level");
            $('#navul').hide();


            $('#bar').click(function () {
                $('#navul').toggle("slow")
            });

            fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=c55283147e5e2dcdf6decfc75d9b0681").then(response => {
                return response.json();
            }).then(data => {

                console.log(data);
                $('#result').append(
                    '<h4>' + data.name +  '</h4>' + '<p>Vejret i dag: </p>' + '<div id="vejr">' + '<figure><img src="../images/' +
                    data.weather[0].icon +
                    '.png" alt="The weather' +
                    '"></figure>'+ '<h6>' + data.main.temp + ' &#730</h6>' + '</div>' + '<p>' + 'Der er ' + data.weather[0].description + '. </p>');

            }).catch(err => {
                // Do something for an error here
                console.log('There was an error ...');


            });

          fetch("http://api.openweathermap.org/data/2.5/forecast?q=Aarhus&units=metric&lang=da&appid=091ba5fb1468a27422d021d02155ae9b").then(response => {
                return response.json();
            }).then(data => {

                console.log(data);

                for (var i=0; i<data.list.length; i++) {

                  console.log( data.list[i].dt_txt );

                  $('#forecast').append(
                    '<h2>' + data.list[0].main.temp + '</h2>' + data.list[0].weather[0].description

                  );

                }

            }).catch(err => {
                // Do something for an error here
                console.log('There was an error ...')
            });


            });
