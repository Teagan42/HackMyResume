module.exports = function (grunt) {

  'use strict';

  var opts = {

    pkg: grunt.file.readJSON('package.json'),

    simplemocha: {
      options: {
        globals: ['expect', 'should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      },
      all: { src: ['test/*.js'] }
    },

    clean: {
      test: ['test/sandbox']
    },

    eslint: {
      target: ['Gruntfile.js', 'src/**/*.js', 'test/*.js']
    }

  };

  grunt.initConfig( opts );
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Use 'grunt test' for local testing
  grunt.registerTask('test', 'Test the HackMyResume application.',
    function() {
      grunt.task.run(['clean:test','eslint','simplemocha:all']);
    }
  );

  // Default task - nothing to do but test
  grunt.registerTask('default', [ 'test' ]);

};
