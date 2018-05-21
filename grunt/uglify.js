module.exports = function(name) {
	return {
		build: {
			options: {
				sourceMap: true,
			},
			files:[
				{
					src:  [
						'src/'+name+'.js',
						'tmp/modules/**/*.js',
						'tmp/templates.js',
					],
					dest: 'tmp/'+name+'.min.js'
				}
			]
		}
	}
};