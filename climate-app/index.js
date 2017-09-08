function fetchData() {
	var cityId = document.forms["climate-form"]["city-list"].value;

	fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityId + '&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1', {method: 'GET'}).then(function(response) {
		return response.json();
	}).then(function(data) {
		console.dir(data);
	});
}