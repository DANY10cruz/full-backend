import { Schema, model } from "mongoose";

const modeloUsuarios = new Schema(
  {
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("usuariosBack", modeloUsuarios);
