//importando os pacotes do node
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

//funcoes 

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}


//funcao para compilar o scss

function styles() { 
    return gulp.src('./src/styles/*.scss') //captura os arquivos de origem     //A funcao pipe encadeia as compilacoes 
        .pipe(sass({outputStyle: 'compressed'})) //codigo que comprime o scss
        .pipe(gulp.dest('./dist/css')); // manda os arquivos para a parte destino ja comrprimidos 
}

//funcao para comprimir as imagens 
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

//exportando as tarefas (funcoes)
//configura a execucao das tarefas assim como a sua ordem de compilacao 

//funcao padrao 
exports.default = gulp.parallel(styles, images, scripts)

//a funcao watch observa e automatiza as atualizacoes dos arquivos e funcoes escolhidas  
//comando --> nom run build watch
exports.watch = function () { 
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*js', gulp.parallel(scripts));
}