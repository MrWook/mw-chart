'use strict';
angular.module('mw-chart').factory('$chart', ['$log', function($log){
	try{
		if(Chart !== undefined){
			//generate random number
			let random_number = function(max){
				return Math.floor(Math.random()*max);
			};

			//generate random color
			Chart.create_random_color = function(){
				return 'rgba('+random_number(255)+','+random_number(255)+','+random_number(255)+', 0.5)';
			};

			return Chart;
		}
	}catch(e){
		$log.error('mw-chart requires Chart.js.');
		return {};
	}
}]);