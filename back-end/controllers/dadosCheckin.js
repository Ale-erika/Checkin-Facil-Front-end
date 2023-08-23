import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let fichaHospedagem = req.body;

    const data = JSON.parse(await readFile("dadosHospede.json"));
    fichaHospedagem = { id: data.nextId++, ...fichaHospedagem };

    data.dadosHospede.push(fichaHospedagem);
    await writeFile("dadosHospede.json", JSON.stringify(data, null, 2));

    return res.json({
      error: false,
      message: "Dados enviados com sucesso!",
      fichaHospedagem,
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
