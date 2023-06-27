import express from "express";
export const app = express();
import morgan from "morgan";
import route from "./routers/router.mjs";


app.use(morgan("dev"));
app.use(express.json());
app.use(route);
