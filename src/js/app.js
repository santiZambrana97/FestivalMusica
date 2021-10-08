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
