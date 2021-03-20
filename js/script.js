function getAPIdata() {

	// construct request
	var request = 'https://api.nasa.gov/insight_weather/?api_key=4zZZS2w9bbRWXdUbcV0KSGqD9afgj4fxKb1e2naX&feedtype=json&ver=1.0';

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var weatherBoxMars = document.getElementById('weatherMars');
		document.getElementById("weatherMars").innerHTML = weatherBoxMars;
		//weatherBox.innerHTML = response;
		//weatherBox.innerHTML = response.weather[0].description;
		//weatherBox.innerHTML = response.main.temp;

		// var degC = Math.floor(response.main.temp - 273.15);
		// var weatherBox = document.getElementById('weatherMars');
		// weatherBox.innerHTML = degC + '&#176;C <br>';
	});
}

// init data stream
getAPIdata();






/*
function getAPIdata() {

	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		//document.getElementById('weather').innerHTML = response;
		//document.getElementById('weather').innerHTML = response.weather[0].description;
	})
	// catch error
	.catch(function (error) {
		console.log('Request failed', error);
	});
}
*/









