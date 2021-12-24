
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
      },
      dist: {
        files: {
          'build/spectrum-min.js': ['spectrum.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  //Build Task.
  grunt.registerTask('build', ['uglify']);

};
