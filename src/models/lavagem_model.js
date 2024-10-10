/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const lavagemSchema = new Schema({
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
  funcionario: {
    type: Schema.Types.ObjectId,
    ref: "funcionario",
    required: true
  },
  veiculo: {
    type: Schema.Types.ObjectId,
    ref: "Veiculo",
    required: true
  }
});

const lavagem = model("lavagem", lavagemSchema);

export default lavagem;
