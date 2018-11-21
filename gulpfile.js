var gulp = require('gulp'), // Подключаем Gulp
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)

    gulp.task('scripts', function() {
        return gulp.src([ // Берем все необходимые библиотеки
            'js/src/*.js' // Берем все скрипты
            ])
            .pipe(concat('script.min.js')) // Собираем их в кучу в новом файле libs.min.js
            .pipe(uglify()) // Сжимаем JS файл
            .pipe(gulp.dest('js/dist')); // Выгружаем в папку app/js
    });
