/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const veiculoSchema = new Schema({
  placa: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7
  },
  nome: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    enum: ["VERMELHO", "PRETO", "AZUL", "AMARELO", "BRANCO"],
    required: true
  },
  categoria: {
    type: String,
    enum: ["MOTO", "CARRO", "VAN", "ONIBUS", "CAMINHÃO"],
    required: true
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
    required: true
  }
});

const Veiculo = model("Veiculo", veiculoSchema);

export default Veiculo;
