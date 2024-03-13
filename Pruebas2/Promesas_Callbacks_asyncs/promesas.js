function obtenerNumeroAleatorio(min, max){
return new Promise((resolve, reject)=> {
    setTimeout(() => {
        const NumeroAlatorio = Math.ranmdom()*(max-min+1) +min
        resolve(numeroAleatorio);
    },0); 
});
}

function jugar() {
    let continuar = true;
    let puntos = 0;

    function obtenerEntrada(){
        return new Promise((resolve, reject)=> {
            let entrada = prompt("Ingrese un número entre 1 y 6");
            let numeroUsuario = parseInt(entrada)

            if (!isNaN(numeroUsuario) && numeroUsuario >= 1 && numeroUsuario <= 6) {
                resolve(numeroUsuario);
            } else {
                reject(new Error("Por favor, introduce un número válido del 1 al 6."));
            }
        });
    }
}