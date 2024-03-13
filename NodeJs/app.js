
/* iMPORTAMOS */
const express = require('express');
const mysql = require('mysql');
/* oBJETO para llamar a los metodos */
const app = express();
/* CONEXION */
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
});
/* VISTAS */
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* Rutas estaticas */
app.get('/',function(req, res) {
    res.render('index');
});
/* Ruta de prueba */
app.post('/validar',function(req, res) {
const datos= req.body;
let nombre =  datos.nombre;
let apellido = datos.apellido;
let sql = `INSERT INTO usuarios (nombre, apellidos) VALUES ('${nombre}','${apellido}')`;
conexion.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);})

});
/* Servidor */ 
app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});
