import alunos from "../models/Aluno.js";

class AlunoController{
    
    static listarAlunos = (req, res) => {
        alunos.find((err, alunos) => {
            res.status(200).json(alunos)
        })
    }

    static cadastrarAluno = (req, res) => {
        let aluno = new alunos(req.body)
        aluno.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message}`})
            } else {
                res.status(201).send(aluno.toJSON())
            }
        })
    }
}

export default AlunoController