import express from "express";
import dadosCheckin from "./controllers/dadosCheckin.js";
import { promises as fs } from "fs";
import cors from "cors";

const { readFile, writeFile } = fs;

const app = express();

app.use(express.json());

// Criar middlware para permitir requisição externa

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

app.use("/checkin", dadosCheckin);

app.listen(8080, async () => {
  try {
    await readFile("dadosHospede.json");
    console.log("API Started");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      dadosHospede: [],
    };
    writeFile("dadosHospede.json", JSON.stringify(initialJson))
      .then(() => {
        console.log("API Started and File Created");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
