// Selecciona todos los elementos con la clase "slide" y "dot"
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");

// Inicializa el índice en 0
var index = 0;

// Función para mostrar el slide anterior
function prevSlide(n){
    // Incrementa el índice
    index += n;
    console.log("prevSlide is called");
    // Llama a la función para cambiar el slide
    changeSlide();
}

// Función para mostrar el siguiente slide
function nextSlide(n){
    // Incrementa el índice
    index += n;
    // Llama a la función para cambiar el slide
    changeSlide();
}

// Función para cambiar el slide actual
function changeSlide(){
    // Si el índice es mayor que la cantidad de slides, reinicia el índice
    if(index > slides.length - 1)
        index = 0;
    
    // Si el índice es menor que 0, establece el índice al último slide
    if(index < 0)
        index = slides.length - 1;

    // Oculta todos los slides y remueve la clase "active" de los dots
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    
    // Muestra el slide actual y agrega la clase "active" al dot correspondiente
    slides[index].style.display = "block";
    dots[index].classList.add("active");
}

// Llama a la función changeSlide para mostrar el slide inicial
changeSlide();
