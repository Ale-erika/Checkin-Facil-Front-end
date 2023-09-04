import express from "express";
import dadosCheckin from "./routes/checkin.route.js";
import cors from "cors";
import sendEmail from "./sendEmail.js";
import sendLink from "./sendLink.js";

const app = express();

// middleware para receber os dados no corpo da requisição
app.use(express.json());

// middlware para permitir requisição externa
app.use((req, res, next) => {
  // qqer endereço pode fazer a requisição
  res.header("Access-Control-Allow-Origin", "*");
  // tipo de método que a API aceita
  res.header("Access-Control-Allow-Methods", "POST");
  // permitir o envio de dados para API
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // executar o cors
  app.use(cors());
  next();
});

// Criar rotas
app.use("/checkin", dadosCheckin);

sendLink("ricardo.botelho@gmail.com");

app.listen(8080, () => console.log("API Started"));
