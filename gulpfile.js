const { series, src, dest, watch, parallel } = require('gulp'); //cuando hay llaves quiere decir que este paquete tiene multiples funciones
const sass = require('gulp-sass')(require('sass')); //cuando no hay llaves es porque solo hay una funcion en el paquete
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp')
const concat = require('gulp-concat')

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');


const paths = {
    imagenes: 'src/img/**/*',
    scss : 'src/scss/**/*.scss',
    js: 'src/js/**/*'
}

//Funcion que compila SASS
function css(){
    return src(paths.scss)
      .pipe( sass({
        outputStyle: 'expanded'
       }) )
       .pipe( postcss(autoprefixer(), cssnano()))
       .pipe(dest('./build/css'))
}

function minificarcss(){
    return src(paths.scss)
      .pipe( sass({
          outputStyle: 'compressed'
      }) )
      .pipe(dest('./build/css'))
}

function javascript(){
    return src(paths.js)
     .pipe( concat('bundle.js'))
     .pipe( dest('./build/js'))

}

function imagenes(){
  return src(paths.imagenes)
   .pipe( imagemin() )
   .pipe(dest('./build/imag'))
   .pipe(notify({message: 'Imagen Minificada'}));
}

function versionWebp(){
    return src(paths.imagenes)
     .pipe(webp())
     .pipe( dest('./build/imag'))
     .pipe( notify({message: 'Version webp lista'}))
}

function watchArchivos(){
    watch(paths.scss, css); // * = Los archivos de La carpeta actual, del primer nivel -- ** = Todos los archivos con esa extension
    watch(paths.js, javascript)
}                                   


exports.css = css;
exports.minificarcss= minificarcss;
exports.imagenes= imagenes;
exports.watchArchivos= watchArchivos;

exports.default= series(css, javascript, watchArchivos);