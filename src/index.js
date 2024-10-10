/*
 Inicializa o servidor
 Carrega os serviços 
*/

import e from "express";
import "dotenv/config";
import "./db.js";
import Workshop_router from "./routes/Workshop_route.js";
import Maintenance_router from "./routes/Maintenance_route.js";
import Vehicle_router from "./routes/Vehicle_route.js";

const app = e();

app.use(e.json());

app.use("/Workshop", Workshop_router);
app.use("/Maintenance", Maintenance_router);
app.use("/Vehicle", Vehicle_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));
