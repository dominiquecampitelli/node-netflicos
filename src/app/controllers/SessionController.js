import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";
class SessionController {
    async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(400).send({ error: "Usuário não existe" });
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(400).send({ error: "Senha incorreta" });
        }

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
        });

        res.send({
            user,
            token,
        });
    }
}

export default new SessionController();
