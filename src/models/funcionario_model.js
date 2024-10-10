import { Schema, model } from "mongoose";

const FuncionarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },

  
});

const Funcionario = model("Funcionario", FuncionarioSchema);

export default Funcionario;
