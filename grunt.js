/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-requirejs');

  // Project configuration.
  grunt.initConfig(
    {
      pkg: '<json:package.json>',
      meta: {
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
          '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
      },

      requirejs: {
        all: {
          baseUrl: 'lib',
          name: '../vendor/almond',
          include: 'freezing-octo-hipster',
          out: 'dist/core-built.js',
          wrap: true
        }
      },

      lint: {
        files: ['grunt.js', 'lib/**/*.js']
      },

      qunit: {
        files: ['test/**/*.html']
      },

      concat: {
        dist: {
          src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },

      min: {
        dist: {
          src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
          dest: 'dist/<%= pkg.name %>.min.js'
        }
      },

      watch: {
        files: '<config:lint.files>',
        tasks: 'lint qunit'
      },

      jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          boss: true,
          eqnull: true,
          browser: true
        },
        globals: {
          jQuery: true
        }
      },

      uglify: {}

    });

  // Default task.
  grunt.registerTask('default', 'lint requirejs:all qunit concat min');

};
