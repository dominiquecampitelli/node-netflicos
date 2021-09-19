import tmdb from "../../services/tmdb.js";

class MediaController {
    async search(req, res) {
        const { query, page = 1 } = req.query;
        console.log(req.query);
        console.log(req);
        try {
            const value = await tmdb(`/search/multi`, { query, page });

            return res.status(200).json({ success: true, result: value });
        } catch (err) {
            console.log(err);

            return res.status(400).json({
                success: false,
                message: "Erro na autenticação do media",
            });
        }
    }
}

export default new MediaController();
