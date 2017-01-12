module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');
    // var jpegtran = require('imagemin-jpegtran');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: { // Task
            static: { // Target
                options: { // Target options
                    optimizationLevel: 3,
                    svgoPlugins: [{
                        removeViewBox: false
                    }],
                    use: [mozjpeg()]
                },
                files: { // Dictionary of files
                    'img/profilepic.min.jpg': 'img/profilepic.jpg' // 'destination': 'source'
                    // 'img/mobilewebdev.min.jpg': 'img/mobilewebdev.jpg',
                    // 'img/cam_be_like.min.jpg': 'img/cam_be_like.jpg',
                    // 'img/2048.min.png':'img/2048.png'
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
            static: {
                options: {
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: false,
                    jpegoptim: true,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true
                },
                files: {
                    'img/profilepic.min.jpg': 'img/profilepic.jpg', // 'destination': 'source'
                    'img/mobilewebdev.min.jpg': 'img/mobilewebdev.jpg',
                    'img/cam_be_like.min.jpg': 'img/cam_be_like.jpg',
                    'img/2048.min.png': 'img/2048.png'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'img/'
                }]
            }
        }

    });

    // 加载包含 "htmlmin" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['htmlmin']);

    // 加载包含 "cssmin" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 加载包含 "imagemin" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-image');

};
