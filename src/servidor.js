import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import ruta from "./rutas/rutas_usuarios.js";

const servidor = express();

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use(urlencoded({ extended: false }));
servidor.use("/usuarios", ruta);

export default servidor;
