import express from "express";
import sendEmail from "../sendEmail.js";
import hospedeInfoController from "../controllers/hospedeInfo.controller.js";

const router = express.Router();

router.post("/", hospedeInfoController.insertHospedeInfo);
router.get("/", hospedeInfoController.getHospedesInfo);

export default router;
