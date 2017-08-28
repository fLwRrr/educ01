module.exports = function (grunt) {

require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    sass: {
      style: {
        files: {
          "css/style.css" : "scss/style.scss"
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers:
            [
            "last 1 version",
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
            ]
          }),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      style: {
        src: "css/*.css"
      }
    },
    watch: {
      style: {
        files:
          "scss/**/*.scss",
        tasks: [
          "sass", "postcss"
        ]
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: "."
        }
      }
    }

  });

};
