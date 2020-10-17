
const apiKey = process.env.API_KEY;

 button.onclick= function() {

  let city = document.getElementById('weath').value;

  let url ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&lang=it';

  function drawWeather( d ) {
	let celcius = Math.round(parseFloat(d.main.temp)-273.15);
	let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}
  fetch(url)
  .then(function(resp) { return resp.json() })
.then(function(data) {
  drawWeather(data);
});

}

geo.onclick= function() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {

      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let url2 = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey+'&lang=it';

      function drawWeather2( d ) {
      let celcius2 = Math.round(parseFloat(d.list[0].main.temp)-273.15);


        document.getElementById('description').innerHTML = d.list[0].weather[0].description;
        document.getElementById('temp').innerHTML = celcius2 + '&deg;';
        document.getElementById('location').innerHTML = d.city.name;
      }

      fetch(url2)
      .then(function(resp) { return resp.json() })
      .then(function(data2) {
      drawWeather2(data2);


        });


          });

        }
  }
