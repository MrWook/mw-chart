module.exports = function(copyright, name){
	return {
		options: {
			sourceMap: true,
			banner:    copyright,
		},
		modules: {
			options: {
				banner:    copyright+"'use strict';\n",
				process: function(src, filepath) {
					return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
				},
			},
			src:  [
				'src/extra/.prefix',
				'src/'+name+'.js',
				'tmp/modules/**/*.js',
				'tmp/templates.js',
				'src/extra/.suffix'
			],
			dest: 'dist/js/'+name+'.js'
		},
		modules_min: {
			src:  [
				'src/extra/.prefix',
				'tmp/'+name+'.min.js',
				'src/extra/.suffix'
			],
			dest: 'dist/js/'+name+'.min.js'
		}
	};
};