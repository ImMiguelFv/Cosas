let zona = document.getElementById("Workzone");

function palabraMasLarga(cadena) {
    // Eliminar signos de puntuación y caracteres especiales
    const soloPalabras = cadena.replace(/[^\w\s]/gi, '');
    // Dividir la cadena en palabras
    const palabras = soloPalabras.split(' ');
    // Inicializar variable para almacenar la palabra más larga
    let palabraMasLarga = '';
    
    // Iterar sobre cada palabra
    for (let palabra of palabras) {
        // Si la longitud de la palabra actual es mayor que la longitud de la palabra más larga encontrada hasta ahora
        if (palabra.length > palabraMasLarga.length) {
            // Actualizar la palabra más larga
            palabraMasLarga = palabra;
        }
    }
    
    return palabraMasLarga;
}
// Ejemplo de uso:
const cadena = "La playa es un buen lugar para relajarse";

// Obtener la palabra más larga
let palabraLarga = palabraMasLarga(cadena);

let parrafo2 = document.createElement("p");
parrafo2.textContent = "La frase es " +cadena
zona.appendChild(parrafo2);


// Crear un elemento <p> para mostrar la palabra más larga
let parrafo = document.createElement("p");
// Establecer el texto del párrafo como la palabra más larga
parrafo.textContent = "La palabra más larga es " +palabraLarga;
zona.appendChild(parrafo);
// Agregar el párrafo como hijo del elemento con id "Workzone"
