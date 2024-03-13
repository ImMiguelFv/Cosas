import  express  from "express";
//Fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


//Server
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));
app.use(express.static(__dirname + "/pages/css"));
app.use(express.static(__dirname + "/pages/js"));


/* rutas */

app.get("/login", (req, res) => res.sendFile(__dirname + "/pages/login.html"));
app.get("/registro", (req, res) => res.sendFile(__dirname + "/pages/registro.html"));
app.get("/", (req, res) => res.sendFile(__dirname + "/pages/index.html"));
