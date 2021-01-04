module.exports = function(grunt) {

  //初始化配置grunt任务
  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        dest: 'dist/built.js',
      },
    },
  });

  //当grunt任务执行的时候去加载对应的任务插件
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //注册grunt的默认任务
  // 默认被执行的任务列表。
  grunt.registerTask('default', []);

};