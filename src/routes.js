import Router from "express";
import MovieController from "./app/controllers/MovieController.js";
import TVController from "./app/controllers/TVController.js";
import MediaController from "./app/controllers/MediaController.js";
import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";

import authMiddleware from "./app/middleware/AuthMiddleware.js";

const routes = new Router();

routes.post("/user", UserController.store);
routes.post("/session", SessionController.login);

routes.get(
    "/trending/movie/:time_window",
    authMiddleware,
    MovieController.trending
);
routes.get("/movie/:id", authMiddleware, MovieController.show);

routes.get("/trending/tv/:time_window", authMiddleware, TVController.trending);
routes.get("/tv/:id", authMiddleware, TVController.show);

routes.get("/search/multi", authMiddleware, MediaController.search);

routes.put("/user", authMiddleware, UserController.update);
routes.delete("/user", authMiddleware, UserController.delete);

export default routes;
