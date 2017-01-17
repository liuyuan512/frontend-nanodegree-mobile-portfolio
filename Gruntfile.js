module.exports = function(grunt) {

    var mozjpeg = require('imagemin-mozjpeg');
    var jpegtran = require('imagemin-jpegtran');
    // Project configuration.
    grunt.initConfig({


        pkg: grunt.file.readJSON('package.json'),

        imagemin: { // Task
            static: { // Target
                options: { // Target options
                    optimizationLevel: 7,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                    use: [mozjpeg()]
                },
                files: { // Dictionary of files
                    'img/profilepic.min.jpg': 'img/profilepic.jpg', // 'destination': 'source'
                    'img/mobilewebdev.min.jpg': 'img/mobilewebdev.jpg',
                    'img/cam_be_like.min.jpg': 'img/cam_be_like.jpg',
                    'img/2048.min.png':'img/2048.png',
                    'img/pizzeria.min.jpg':'img/pizzeria.jpg'
                }
            },

                  dynamic: { // Another target
                      files: [{
                          expand: true, // Enable dynamic expansion
                          cwd: 'img/', // Src matches are relative to this path
                          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                          dest: 'img/' // Destination path prefix
                      }]
                  }
              },

  //           imagemin: {
  //   png: {
  //     options: {
  //       optimizationLevel: 5
  //     },
  //     files: [
  //       {
  //         // Set to true to enable the following options…
  //         expand: true,
  //         // cwd is 'current working directory'
  //         cwd: 'img/',
  //         src: ['img/*.png'],
  //         // Could also match cwd line above. i.e. project-directory/img/
  //         dest: 'img/compressed/',
  //         ext: '.png'
  //       }
  //     ]
  //   },
  //   jpg: {
  //     options: {
  //       progressive: true
  //     },
  //     files: [
  //       {
  //         // Set to true to enable the following options…
  //         expand: true,
  //         // cwd is 'current working directory'
  //         cwd: 'img/',
  //         src: ['img/pizzeria.jpg'],
  //         // Could also match cwd. i.e. project-directory/img/
  //         dest: 'img/compressed/',
  //         ext: '.jpg'
  //       }
  //     ]
  //   }
  // },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'index.min.html': 'index.html', // 'destination': 'source'
                }
            }
            // dev: { // Another target
            //     files: {
            //         'dist/index.html': 'src/index.html',
            //         'dist/contact.html': 'src/contact.html'
            //     }
            // }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },


        uglify: {
            my_target: {
                files: {
                    'js/perfmatters.min.js': 'js/perfmatters.js'
                }
            }
        },
        image: {
          options: {
            optimizationLevel: 10
          },
            static: {
                options: {
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: true,
                    jpegoptim: true,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true
                },
                files: {
                    // 'img/profilepic.min.jpg': 'img/profilepic.jpg', // 'destination': 'source'
                    // 'img/mobilewebdev.min.jpg': 'img/mobilewebdev.jpg',
                    // 'img/cam_be_like.min.jpg': 'img/cam_be_like.jpg',
                    // // 'img/2048.min.png': 'img/2048.png',
                    // 'img/pizzeria.jpg':'img/pizzeria.jpg'
                    'views/images/pizzeria.jpg':'views/images/pizzeria.jpg'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'views/images',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'img/'
                }]
            }
        },

        img: {
          options: {
            optimizationLevel: 7
          },
        // using only dirs with output path
        task1: {
            src: 'img/652245.jpg',
            dest: 'img/652245.min.jpg'
        }
      }

    });

    // 加载包含 "htmlmin" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['imagemin']);

    // 加载包含 "cssmin" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 加载包含 "imagemin" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-image');

    grunt.loadNpmTasks('grunt-img');

    // grunt.registerTask('imagemin', ['imagemin']);
    grunt.registerTask('imagejpg', ['imagemin:jpg']);

};
