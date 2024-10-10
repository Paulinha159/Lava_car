import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 } // Validar que o preço não seja negativo
});

const maintenanceSchema = new Schema({
  workshop: { type: Schema.Types.ObjectId, ref: 'Workshop', required: true },
  vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  services: [serviceSchema],
  date: { type: Date, required: true },
  totalCost: { type: Number, default: 0 }
});

maintenanceSchema.pre('save', function (next) {
  this.totalCost = this.services.reduce((total, service) => total + service.price, 0);
  next();
});

const Maintenance = model('Maintenance', maintenanceSchema);

export default Maintenance;
