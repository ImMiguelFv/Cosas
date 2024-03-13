document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
                dots[i].classList.add("active");
            } else {
                slide.style.display = "none";
                dots[i].classList.remove("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Función para cambiar automáticamente al siguiente slide
    function autoNextSlide() {
        nextSlide();
    }

    // Mostrar el primer slide
    showSlide(currentIndex);

    // Agregar eventos para el carrusel
    document.querySelector("#nextBtn").addEventListener("click", () => {
        nextSlide();
        clearInterval(intervalId); // Detener el intervalo al hacer clic en "Siguiente"
        intervalId = setInterval(autoNextSlide, 3000); // Restablecer el intervalo
    });

    document.querySelector("#prevBtn").addEventListener("click", () => {
        prevSlide();
        clearInterval(intervalId); // Detener el intervalo al hacer clic en "Anterior"
        intervalId = setInterval(autoNextSlide, 3000); // Restablecer el intervalo
    });

    // Agregar eventos para los puntos indicadores
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
            clearInterval(intervalId); // Detener el intervalo al hacer clic en un punto indicador
            intervalId = setInterval(autoNextSlide, 3500); // Restablecer el intervalo
        });
    });

    // Configurar intervalo para el cambio automático de slide (cada 3,5 segundos en este ejemplo)
    let intervalId = setInterval(autoNextSlide, 3500);
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("sticky-header");
    const headerTitle = document.querySelector(".header-title");
    const initialHeight = header.clientHeight;
    const initialFontSize = parseInt(getComputedStyle(headerTitle).fontSize);

    window.addEventListener("scroll", function () {
        if (window.scrollY > initialHeight) {
            header.classList.add("small-header");
            headerTitle.style.fontSize = "20px"; /* Tamaño de fuente más pequeño */
        } else {
            header.classList.remove("small-header");
            headerTitle.style.fontSize = initialFontSize + "px"; /* Restablecer el tamaño de fuente */
        }
    });
})