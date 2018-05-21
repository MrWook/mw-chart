module.exports = function() {
	return {
		modules:   {
			files: ['src/modules/**/*.js'],
			tasks: ['babel', 'concat:modules', 'clean']
		}
	}
};