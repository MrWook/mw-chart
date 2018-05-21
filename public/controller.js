var app = angular.module('app', ['mw-chart']);

app.controller('MainCtrl', ['$scope', '$timeout', '$filter', '$chart', function($scope, $timeout, $filter, $chart){
	$chart.defaults.global.legend.display = false;
	$scope.chartOptions = {
		type:    'bar',
		data:    {
			labels: ['Red', 'Green', 'Blue', 'Yellow'],
			datasets: [{
				backgroundColor: ['#f00', '#008000', '#00f', '#ff0'],
				borderWidth: 1,
				borderColor:     '#1e77b4',
				fill:            false,
				data:[400, 263, 412, 217]
			}]
		},
		options: {
			scales:     {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},

		},
		plugins: [
			{
				afterDatasetsDraw: function(chart) {
					var ctx = chart.ctx;
					chart.data.datasets.forEach(function(dataset, i) {
						var meta = chart.getDatasetMeta(i);
						if (!meta.hidden) {
							meta.data.forEach(function(element, index) {
								// Draw the text in black, with the specified font
								ctx.fillStyle = 'rgb(0, 0, 0)';
								var fontSize = 16;
								var fontStyle = 'normal';
								var fontFamily = 'Helvetica Neue';
								ctx.font = $chart.helpers.fontString(fontSize, fontStyle, fontFamily);
								// Just naively convert to string for now
								var dataString;
								if(typeof dataset.data[index] == 'object'){
									dataString = dataset.data[index].y.toString();
								}else{
									dataString = dataset.data[index].toString();
								}
								// Make sure alignment settings are correct
								ctx.textAlign = 'center';
								ctx.textBaseline = 'middle';
								var padding = 5;
								var position = element.tooltipPosition();
								ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
							});
						}
					});
				}
			}
		]
	};
	function random_string() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < 5; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
	$scope.add = function(){
		var color = $chart.create_random_color();
		$scope.chartOptions.data.labels.push(color);
		$scope.chartOptions.data.datasets[0].backgroundColor.push(color);
		$scope.chartOptions.data.datasets[0].data.push(Math.floor(Math.random()*500));
		console.log('asd');
		$scope.chartOptions.data_update();
	};
}]);



