'use strict';
angular.module('mw-chart').directive('mwChart', ['$chart', function($chart){
	return {
		restrict: 'E',
		scope:    {
			'options': '='
		},
		template: '<canvas></canvas>',
		replace:  true,
		link:     function(scope, el, attrs){
			let ctx = el[0].getContext('2d');
			if(scope.chart){
				scope.chart.destroy();
			}
			//set chart
			scope.chart = new $chart(ctx, scope.options);

			//get the chart
			scope.options.get_chart = function(){
				return scope.chart;
			};

			//update the chart
			scope.options.data_update = function(){
				scope.chart.update();
			};

			//watch for option changes
			scope.$watch(['options.options', 'options.plugins'], function(value_new){
				scope.chart.update();
			}, true);

			scope.$watch('options.type', function(value_new){
				scope.chart.update();
			});
		}
	};
}]);