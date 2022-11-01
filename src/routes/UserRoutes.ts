import { Router } from "express";
import { getUsers } from "../controllers/UserController";

const routes = Router();

routes.get("/", getUsers);

export default routes;
