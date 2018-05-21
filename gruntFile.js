'use strict';
module.exports = function(grunt){
	let copyright = '/**\n'+
					' * @version v<%= pkg.version %>\n'+
					' * @link <%= pkg.homepage %>\n'+
					' * @license <%= pkg.license %>\n'+
					' * Copyright (c) '+(new Date()).getFullYear()+' <%= pkg.author %>\n'+
					' */\n\r';
	let name      = '<%= pkg.name %>';
	// Load all grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long grunt task take. Can help when optimizing build times
	require('time-grunt')(grunt);

	//Configure grunt
	grunt.initConfig({
						 pkg:    grunt.file.readJSON('package.json'),
						 babel:  require('./grunt/babel')(),
						 clean:  require('./grunt/clean')(),
						 concat: require('./grunt/concat')(copyright, name),
						 uglify: require('./grunt/uglify')(name),
						 watch: require('./grunt/watch')()
					 });


	// Build distribution files
	grunt.registerTask('default', [
		'babel',
		'uglify',
		'concat',
		'clean',
		'watch'
	]);
};