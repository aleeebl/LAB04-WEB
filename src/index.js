import express from "express";
import morgan from "morgan";
import {engine} from "express-handlebars"
import {join, dirname} from "path";
import { fileURLToPath } from "url";
import clientesRoutes from "./routes/clientes.routes.js"
import categoriaRoutes from "./routes/categoria.routes.js"
import productoRoutes from "./routes/producto.routes.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


app.set("port", process.env.PORT || 4000);

app.set("views", join(__dirname, "views"));

app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs"
}))
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"))


app.use(express.urlencoded({extended: false}))
app.use(express.json());


//Routes
app.get("/", (req,res) =>{
    res.render("index")
})

app.use(clientesRoutes)
app.use(categoriaRoutes)
app.use(productoRoutes)


//Publicfiles
app.use(express.static(join(__dirname,"public")))


//Run server
app.listen(app.get("port"),()=>
    console.log("cargando el puerto", app.get("port"))
)
