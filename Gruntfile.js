module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-sass");

  grunt.initConfig({
    sass: {
      newConfig: {
        files: {
          "css/style.css":"scss/style.scss"
        }
      }
    }
  });

};
