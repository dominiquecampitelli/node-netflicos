import User from "../models/User.js";
import bcrypt from "bcryptjs";

class UserController {
    async store(req, res) {
        try {
            const { email, password } = req.body;

            if (await User.findOne({ email }))
                return res.status(400).send({ error: "Usuário já existe" });

            const user = await User.create(req.body);

            user.password = password;

            return res.send({
                user: user.id,
                message: "Usuário criado com sucesso",
            });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Registration failed" });
        }
    }

    async update(req, res) {
        try {
            const { name, password } = req.body;
            const userId = req.userId;

            if (name) {
                await User.updateOne({ id: userId }, { name });
            }

            if (password) {
                const hash = await bcrypt.hash(password, 10);
                await User.updateOne({ id: userId }, { password: hash });
            }

            return res.status(200).send({
                user: userId,
                message: "Usuário atualizado com sucesso",
            });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Erro ao atualizar" });
        }
    }

    async delete(req, res) {
        try {
            const { password } = req.body;
            const userId = req.userId;

            const user = await User.findOne({ id: userId }).select("+password");

            if (await bcrypt.compare(password, user.password)) {
                await User.deleteOne({ id: userId });
            } else {
                return res.status(400).send({ error: "Senha incorreta" });
            }

            return res.status(200).send({
                user: userId,
                message: "Usuário deletado com sucesso",
            });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Erro ao deletar usuário" });
        }
    }
}

export default new UserController();
