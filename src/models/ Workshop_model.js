/* 
 O modelo define os dados dos documentos que vão 
 pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  specialties: {
    type: String,
    enum:["motor","freios","suspensão"],
    required: true,
  },
  maintenances : {
    type: Schema.Types.ObjectId,
    ref: "maintenances",
    required: true
}
});

const Workshop = model("workshop", workshopSchema);

export default Workshop;
