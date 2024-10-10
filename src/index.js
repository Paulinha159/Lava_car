/*
 Inicializa o servidor
 Carrega os serviços 
*/

import e from "express";
import "dotenv/config";
import "./db.js";
import cliente_router from "./routes/cliente_route.js";
import veiculo_router from "./routes/veiculo_route.js";
import lavagem_router from "./routes/lavagem_route.js";
import funcionario_router from "./routes/funcionario_route.js";

const app = e();

app.use(e.json());

app.use("/cliente", cliente_router);
app.use("/veiculo", veiculo_router);
app.use("/lavagem", lavagem_router);
app.use("/funcionario", funcionario_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));
