//importando os pacotes do node
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//funcoes 

//funcao para compilar o scss

function styles() { 
    return gulp.src('./src/styles/*.scss') //captura os arquivos de origem     //A funcao pipe encadeia as compilacoes 
        .pipe(sass({outputStyle: 'compressed'})) //codigo que comprime o scss
        .pipe(gulp.dest('./dist/css')); // manda os arquivos para a parte destino ja comrprimidos 
}

//exportando as tarefas (funcoes)
//configura a execucao das tarefas assim como a sua ordem de compilacao 

//funcao padrao 
exports.default = styles

//a funcao watch observa e automatiza as atualizacoes dos arquivos e funcoes escolhidas  
//comando --> nom run build watch
exports.watch = function () { 
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}