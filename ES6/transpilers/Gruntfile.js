'use strict';

module.exports = function(grunt){

require('load-grunt-tasks')(grunt); 
require('time-grunt')(grunt);

grunt.initConfig({
    babel: {
        options: {
            sourceMap: true
        },
           dist: {
               files: [{
                   expand: true,
                   src: 'classes.js',
                   dest: 'dist/es5/babel'
               }]
            }   
    },

    traceur: {
        options: {
            experimental: true,
            copyRuntime: 'dist/es5/traceur'
        },
        custom: {
            files: [{
                expand: true,
                src: ['classes.js'],
                dest: 'dist/es5/traceur'
            }]
        }
    },
      
    clean: {
         options: {
             force:true
         },
         output: ['dist']
       }
});

grunt.registerTask('default', ['clean', 'babel', 'traceur']);

};