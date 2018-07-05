
module.exports = function (grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		sass: {
				options: {
					sourceMap: true
				},
			dist: {
				files: {
					'src/styles/main.css': 'src/scss/main.scss'
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('default', ['sass']);

}