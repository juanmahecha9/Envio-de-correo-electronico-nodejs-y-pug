// Configuración rapida de proyecto Node.js by juanmahecha9
import express from "express";
import morgan from "morgan";
import path from "path";

const router = require("./routes/routes.js");

const app = express();

app.set("port", process.env.PORT || 4000);

// concatenar el directorio de las vistas de motores de plantillas
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(router);

app.listen(app.get("port"), () => {
  console.log("server running at http://localhost:" + app.get("port"));
});
