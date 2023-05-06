const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      console.log("error de usuario aca");
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    if (user.password !== password) {
      return res.status(403).json({ error: "Usuario no encontrado" });
    }
    return res.status(200).json({ access: true });
  } catch (error) {
    console.log("error de usuario");

    return res.status(500).json({ error: error.message });
    console.log("error de usuario");
  }
};

module.exports = {
  login,
};
