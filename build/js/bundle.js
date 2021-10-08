// document.addEventListener('DOMContentLoaded', function(){
//     scrollNav();
// });

// function scrollNav(){
//     const enlaces = document.querySelectorAll('.navegacion-principal a');

//     enlaces.forEach(function(enlace){
//         enlace.addEventListener('click', function(e){
//             e.preventDefault();
//             const seccion = document.querySelectorAll(e.target.attributes.href.value);

//             seccion.scrollIntoView({ behavior: "smooth" });


//         });
//     });
// }

document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
});

function navegacionFija() {
 
    const barra = document.querySelector('.header');
 
    //Registrar el interseccion observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) { //nos va a dar la informacion del elemento a observar, isIntersecting nos dice si esta visible o no el elemento
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });
 
    //Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}

document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/imag/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //Añadir la funcion de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId) //permite convertir un string a numero siempre que tenga la estructura de un numero
     
    //Generar Imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/imag/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar la Imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    

    //Boton para cerra imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se da click en el boton , cerrar la imagen
    cerrarImagen.onclick = function(){
        cerrarImagen.remove();
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}