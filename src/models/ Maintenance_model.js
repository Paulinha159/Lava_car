
import { Schema, model } from "mongoose";

const maintenanceSchema = new Schema({
  workshop: {
    type: Schema.Types.ObjectId,
    ref: "workshop",
    required: true
   
  },
  name: {
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

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;
