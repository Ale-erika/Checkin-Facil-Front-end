import sendEmail from "../sendEmail.js";
import hospedeInfoService from "../services/hospedeInfo.service.js";

async function insertHospedeInfo(req, res, next) {
  try {
    let hospedeInfo = req.body;

    await hospedeInfoService.insertHospedeInfo(hospedeInfo);

    const email = hospedeInfo.email;
    sendEmail(email);

    return res.json({
      error: false,
      message: "Dados enviados com sucesso!",
    });
  } catch (err) {
    next(err);
  }
}

async function getHospedesInfo(req, res, next) {
  try {
    res.send(await hospedeInfoService.getHospedesInfo());
  } catch (err) {
    next(err);
  }
}

export default { insertHospedeInfo, getHospedesInfo };
