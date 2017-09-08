function getAverage(arr) {
	var sum = arr.reduce(function(a, b) { return a + b; });
	console.log(sum);
	return (sum / arr.length);
}

function generateTableHeader(cityName) {
	return '<thead><tr><th>' + cityName + '</th><th>Temperature</th><th>Variance</th></tr></thead>';
}

function generateTableFooter(temperature, variance) {
	return '<tr><td><strong>Average</strong></td><td><strong>' + temperature.toFixed(0) + 'C</strong></td><td><strong>' + variance.toFixed(2) + 'C</strong></td></tr>';
}

function generateTableData(date, temperature, variance) {
	return '<tr><td>' + date + '</td><td>' + temperature.toFixed(0) + 'C</td><td>' + variance.toFixed(2) +'C</td></tr>';
}

function fetchData(e) {
	var cityId = document.forms['climate-form']['city-list'].value;
	var dates = new Array();
	var temperatures = new Array();
	var variances = new Array();
	var averages = new Array();
	var data = new Array();

	fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityId + '&mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1', {method: 'GET'}).then(function(response) {
		return response.json();
	}).then(function(response) {
		var cityName = response['city']['name'];
		response['list'].forEach(function(condition){
			// Collect temperature data and fix the format
			temperatures.push(parseFloat(condition['temp']['day']));
			
			// Collect variance data and fix the format
			variances.push(parseFloat(condition['temp']['max'] - condition['temp']['min']));
			
			// Collect date data and fix the format
			var date = new Date(condition['dt'] * 1000);
			dates.push(date.toISOString().substring(0, 10));
		});
		
		// debug
		console.dir(temperatures);
		console.dir(variances);
		console.dir(dates);
		
		// Generate table data
		var header = generateTableHeader(cityName);
		var footer = generateTableFooter(getAverage(temperatures), getAverage(variances));
		for(i = 0; i < temperatures.length; i++) {
			data.push(generateTableData(dates[i], temperatures[i], variances[i]));
		}
		document.getElementById('result-table').innerHTML = header + data.join('') + footer;
	});
	
	// prevent page to reload
	return false;
}