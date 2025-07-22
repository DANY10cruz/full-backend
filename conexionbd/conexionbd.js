import mongoose from "mongoose";

class conexionbd {
  constructor(parameters) {}

  async conexion() {
    try {
      const linkbaseDatos = process.env.BASEDATOS;
      await mongoose.connect(linkbaseDatos);
      console.log("Conectado a la base de datos");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new conexionbd();
