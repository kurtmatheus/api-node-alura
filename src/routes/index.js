import express from "express";
import livroRouter from "./livrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Helo World from NodeJs!")
    });

    app.use(express.json(), livroRouter);
};

export default routes;