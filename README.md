[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/MrWook/mw-alert/blob/master/LICENSE.txt)
[![codebeat badge](https://codebeat.co/badges/3aca7417-3502-4052-9086-d817f24df1d8)](https://codebeat.co/projects/github-com-mrwook-mw-chart-master)
[![Dependency Status](https://www.versioneye.com/user/projects/5b02a5790fb24f0e5baacc8c/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/5b02a5790fb24f0e5baacc8c)
[![npm version](https://badge.fury.io/js/mw-chart.svg)](https://badge.fury.io/js/mw-chart)

# mw-chart

mw-chart is an AngularJS module that make [ChartJS](https://www.chartjs.org/) available inside AngularJS.

## Requirements (tested in)
- Angular (v1.6.10)
- Chart.js (v2.7.2)

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install mw-chart --save
```

### bower

```shell
bower install mw-chart
```

## Usage

Once the script is included in your html file, simply include the module in your app:
```javascript
angular.module('myApp', ['mw-chart']);
```
    

And use the included 'mwChart' directive thusly:
```html
<mw-chart options="chartOptions"></mw-chart>
```

You can freely use the ChartJS [documentation](http://www.chartjs.org/docs/latest/) for the options attribute.
```javascript
$scope.chartOptions = {
	type:    'bar',
	data:    {
		datasets: [{
			borderWidth: 1,
			data: [
				{"x":"2018-05-01","y":"58"},
				{"x":"2018-06-01","y":"60"}
			]
		}]
	},
	options: {
		scales:     {
			xAxes: [{
				type: 'time',
				time: {
					displayFormats: {
						month: 'MM.YYYY'
					},
					unit: 'month'
				},
				offset: true,
				ticks: {
					source: 'data',
				}
			}],
		},
	}
};
```

Everything beside the "data" parameter will be automaticly updated. 
This is duo the fact that inside the "data" parameter is a reference to the canvas element inside the HTML. 
Therefore it can't be watched by AngularJS.

To Update your data you just need to trigger the update function. It will be availabe on the "chartOption" variable after the DOM is rendered.
```javascript
$scope.chartOptions.data_update();
```

If you want to use ChartJS without the directive or set the default values you can use the factory "$chart".
```javascript
angular.module('myApp').controller('MainCtrl', ['$scope', '$chart', function($scope, $chart){
	$chart.defaults.global.legend.display = false;
}]);
```

$chart was also extendet with the function `create_random_color()` to create a random color for you.


## Demo

<a href='https://plnkr.co/edit/LC6lpjwu6QNijGwZJxYF?p=preview' target='_blank'>View demo on Plunker</a>


## Tasklist 
- [ ] add more examples
- [ ] fix spelling, grammar mistakes
- [ ] add badges
