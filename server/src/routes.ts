import express from "express";
import userController from "./controllers/UserController";
import matchController from "./controllers/MatchController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/match", matchController.create);
routes.get("/match", matchController.get);
routes.delete("/match/:id", matchController.delete);
routes.patch("/match/:id", matchController.update);
routes.get("/match/:id", matchController.getById);

export default routes;
