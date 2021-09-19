import Router from "express";
import MovieController from "./app/controllers/MovieController.js";
import TVController from "./app/controllers/TVController.js";
import MediaController from "./app/controllers/MediaController.js";

const routes = new Router();

routes.get("/trending/movie/:time_window", MovieController.trending);
routes.get("/movie/:id", MovieController.show);

routes.get("/trending/tv/:time_window", TVController.trending);
routes.get("/tv/:id", TVController.show);

routes.get("/search/multi", MediaController.search);

export default routes;
