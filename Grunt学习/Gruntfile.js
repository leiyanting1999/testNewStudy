module.exports = function(grunt) {

  //初始化配置grunt任务
  // Project configuration.
  grunt.initConfig({
    concat: { //任务名称
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/js/build.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'build/js/build.min.js': ['build/js/build.js']
        }
      }
    },

    jshint : {
      options: {
        jshintrc : '.jshintrc' //指定配置文件
      },
      build : ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/css/build.min.css': ['src/css/*.css']
        }
      }
    },

    watch : {
      scripts : {
        files : ['src/js/*.js', 'src/css/*.css'],
        tasks : ['concat', 'jshint', 'uglify', 'cssmin'],
        options : {spawn : false}
      }
    }

  });

  //当grunt任务执行的时候去加载对应的任务插件
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //注册grunt的默认任务
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify','jshint','cssmin']);
  grunt.registerTask('myWatch',['default','watch'])

};