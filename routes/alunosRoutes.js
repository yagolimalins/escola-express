import express from "express";
import AlunoController from "../controllers/alunosController.js";

const router = express.Router();

router
    .get("/alunos", AlunoController.listarAlunos)
    .post("/alunos", AlunoController.cadastrarAluno)

export default router;