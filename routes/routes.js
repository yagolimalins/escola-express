import express from "express"
import alunos from "./alunosRoutes.js"
import cors from "cors"

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send({titulo: "Bem vindo ao Sistema da Escola"})
        })
    
    app.use(
        express.json(),
        cors(),
        express.static('public'),
        alunos
    )
}

export default routes