import modeloUsuarios from "../modelo/modelo_usuarios.js";

class UserController {
  async crearUsuario(req, res) {
    try {
      const { nombre, correo, password } = req.body;
      const nuevoUsuario = new modeloUsuarios({ nombre, correo, password });
      await nuevoUsuario.save();
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async leerUsuarios(req, res) {
    try {
      const usuarios = await modeloUsuarios.find();
      res.status(200).json({ mensaje: "Usuarios leidos", data: usuarios });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async obtenerUsuarioPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await modeloUsuarios.findById(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { nombre, correo, password } = req.body;
      const usuarioActualizado = await modeloUsuarios.findByIdAndUpdate(
        id,
        { nombre, correo, password },
        { new: true } // Esto hace que devuelva el objeto actualizado
      );
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      await modeloUsuarios.findByIdAndDelete(id);
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UserController();
