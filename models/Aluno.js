import mongoose, { mongo } from "mongoose";

const alunoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nascimento: {type: Date, required: true},
        cpf: {type: Number, required: true},
        rg: {type: Number, required: true},
        endereco: {type: String, required: true},
        bairro: {type: String, required: true},
        cidade: {type: String, required: true},
        uf: {type: String, required: true},
        cep: {type: String, required: true},
        telefone: {type: Number, required: true},
        email: {type: String, required: true},
    },
    {
        versionKey: false
    }
)

const alunos = mongoose.model("alunos", alunoSchema)

export default alunos;