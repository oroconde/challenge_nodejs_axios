import { Router } from "express";
import callApi from "../controllers/index.mjs";
const route = Router();

route.get("/", callApi);

export default route;
