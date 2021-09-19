import tmdb from "../../services/tmdb.js";

class TVController {
    async show(req, res) {
        const { id } = req.params;

        try {
            const value = await tmdb(`/tv/${id}`);

            return res.status(200).json({ success: true, result: value });
        } catch (err) {
            console.log(err);

            return res.status(400).json({
                success: false,
                message: "Erro na autenticação do movie",
            });
        }
    }

    async trending(req, res) {
        const { time_window } = req.params;

        try {
            const value = await tmdb(`/trending/tv/${time_window}`);

            return res.status(200).json({ success: true, result: value });
        } catch (err) {
            console.log(err);

            return res.status(400).json({
                success: false,
                message: "Erro na autenticação de tv",
            });
        }
    }
}

export default new TVController();
