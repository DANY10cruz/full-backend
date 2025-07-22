import express, { Router } from "express";
import UserController from "../controlador/controlador_usuarios.js";

const ruta = Router();

ruta.post("/", UserController.crearUsuario);
ruta.get("/", UserController.leerUsuarios);
ruta.get("/:id", UserController.obtenerUsuarioPorId);
ruta.put("/:id", UserController.actualizarUsuario);
ruta.delete("/:id", UserController.eliminarUsuario);

export default ruta;
