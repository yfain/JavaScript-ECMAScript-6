'use strict';

module.exports = function(grunt){

    // Load tasks that start with grunt-* automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       clean: {
         options: {
             force:true
         },
         output: ['dist']
       },

       cssmin: {
           dist: {
               files: [{
                   expand: true,
                   cwd: 'assets/css',
                   src: '*.css',
                   dest: 'dist/assets/css'
               }]
           }
       },

       uglify: {
           dist: {
               files: [{
                   expand: true,
                   cwd: 'js',
                   src: '{,*/}*.js',
                   dest: 'dist/js'
               }]
           }
       },

       copy: {
         dist:{
             files: [{
                 expand: true,
                 cwd: 'assets/data',
                 src: '*',
                 dest: 'dist/assets/data'
             },
                 {       expand: true,
                     cwd: 'assets/fonts',
                     src: '*',
                     dest: 'dist/assets/fonts'
             },
             {
                 expand: true,
                 cwd: 'js/lib',
                 src: ['**/dist/**/*','handlebars/handlebars.min.js'],
                 dest: 'dist/js/lib'
             }]
         }

       },

       imagemin:{
           dist:{
               files: [{
                   expand: true,
                   cwd: 'assets/img',
                   src: '*.{jpg,png,jpeg}',
                   dest: 'dist/assets/img'
               }]
           }
       },

       htmlmin: {
           dist: {
               options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: false,
                    removeRedundantAttributes: false,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
               },
               files: [{
                   expand: true,
                   src: ['index.html'],
                   dest: 'dist'
               }]
           }
       }

   });


    grunt.registerTask('default', ['clean', 'cssmin', 'uglify', 'copy', 'imagemin', 'htmlmin']);

};