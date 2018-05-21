/**
 * @version v0.1.0
 * @link https://github.com/MrWook/mw-chart
 * @license MIT
 * Copyright (c) 2018 MrWook
 */
'use strict';
(function(ng, undefined){
angular.module('mw-chart', []);
angular.module('mw-chart').directive('mwChart', ['$chart', function ($chart) {
	return {
		restrict: 'E',
		scope: {
			'options': '='
		},
		template: '<canvas></canvas>',
		replace: true,
		link: function link(scope, el, attrs) {
			var ctx = el[0].getContext('2d');
			if (scope.chart) {
				scope.chart.destroy();
			}
			//set chart
			scope.chart = new $chart(ctx, scope.options);

			//get the chart
			scope.options.get_chart = function () {
				return scope.chart;
			};

			//update the chart
			scope.options.data_update = function () {
				scope.chart.update();
			};

			//watch for option changes
			scope.$watch(['options.options', 'options.plugins'], function (value_new) {
				scope.chart.update();
			}, true);

			scope.$watch('options.type', function (value_new) {
				scope.chart.update();
			});
		}
	};
}]);

angular.module('mw-chart').factory('$chart', ['$log', function ($log) {
	try {
		if (Chart !== undefined) {
			//generate random number
			var random_number = function random_number(max) {
				return Math.floor(Math.random() * max);
			};

			//generate random color
			Chart.create_random_color = function () {
				return 'rgba(' + random_number(255) + ',' + random_number(255) + ',' + random_number(255) + ', 0.5)';
			};

			return Chart;
		}
	} catch (e) {
		$log.error('mw-chart requires Chart.js.');
		return {};
	}
}]);

})();
//# sourceMappingURL=mw-chart.js.map