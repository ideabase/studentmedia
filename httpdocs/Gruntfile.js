
module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
        'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },
    criticalcss: {
      home: {
        options: {
          url: "http://studentmedia.web/index.php",
                width: 1200,
                height: 900,
                outputfile: "../craft/templates/_includes/critical-home.css",
                filename: "assets/css/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
                buffer: 800*1024,
                ignoreConsole: true
        }
      },
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/min/scripts-min.js': ['assets/js/jquery.js','assets/js/carousel.js','assets/js/jquery.fitvids.js','assets/js/scripts.js'],
          'assets/js/min/loadcss-min.js': ['assets/js/loadcss.js'],
        }
      }
    },
    autoprefixer: {
      your_target: {
        files: {
          'assets/css/style.css': 'assets/css/style.css'
        }
      },
    },
    shell: {
      patternlab: {
        command: "php lab/core/console -gp"
      }
    },
    watch: {
      css: {
				files: '**/sass/*.scss',
				tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        },
			},
      js: {
				files: '**/js/*.js',
				tasks: ['uglify'],
        options: {
          livereload: true,
        },
			},
      html: {
        files: ['lab/source/_patterns/**/*.mustache', 'lab/source/_patterns/**/*.md',  'lab/source/**/*.json'],
        tasks: ['shell:patternlab'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Tasks
  grunt.registerTask('default', ['watch', 'shell:patternlab']);
  grunt.registerTask('critical', ['criticalcss']);
};
