import "dotenv/config";
import servidor from "./servidor.js";
import conexionbd from "../conexionbd/conexionbd.js";

try {
  const puerto = process.env.PUERTO || 3000;
  servidor.listen(puerto);
  conexionbd.conexion();
  console.log(`Escuchando por el puerto ${puerto}`);
} catch (error) {
  console.log("Error al conectar el puerto");
}
