import { Schema, model } from "mongoose";

const LavagemSchema = new Schema({
  horario: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  funcionario:  {
    type: Schema.Types.ObjectId,
    ref: "Funcionario",
    required: true
  },
  veiculo: {
    type: Schema.Types.ObjectId,
    ref: "Veiculo",
    required: true
  }
  
});

const Lavagem = model("Lavagem", LavagemSchema);

export default Lavagem;