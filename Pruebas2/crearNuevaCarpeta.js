const fs = require('fs');
const path = require('path');

function crearCarpeta(nombreCarpeta) {
  // Crear la carpeta
  fs.mkdirSync(nombreCarpeta);

  // Crear archivos dentro de la carpeta
  const htmlContent = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset='utf-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <title>Page Title</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
      <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
      <script src='main.js'></script>
  </head>
  <body>
      
  </body>
  </html>`;
  fs.writeFileSync(path.join(nombreCarpeta, 'index.html'), htmlContent);

  const cssContent = '/* Tu código CSS aquí */';
  fs.writeFileSync(path.join(nombreCarpeta, 'styles.css'), cssContent);

  const jsContent = '// Tu código JavaScript aquí';
  fs.writeFileSync(path.join(nombreCarpeta, 'script.js'), jsContent);

  console.log(`Se ha creado la carpeta "${nombreCarpeta}" con los archivos HTML, CSS y JS.`);
}

// Obtener el nombre de la carpeta desde la línea de comandos
const nombreNuevaCarpeta = process.argv[2];

// Verificar si se proporcionó un nombre de carpeta
if (!nombreNuevaCarpeta) {
  console.error('Por favor, proporciona un nombre para la carpeta.');
  process.exit(1);
}

// Uso del programa
crearCarpeta(nombreNuevaCarpeta);