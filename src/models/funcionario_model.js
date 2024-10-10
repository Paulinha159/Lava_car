/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const funcionarioSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
});

const funcionario = model("funcionario", funcionarioSchema);

export default funcionario;
