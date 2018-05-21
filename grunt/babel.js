module.exports = function() {
	return {
		options: {
			presets: ['env']
		},
		dist: {
			files: [
				{
					expand: true,
					cwd: 'src/modules/',
					src: ['**/*.js'],
					dest: 'tmp/modules',
				}
			]
		}
	}
};