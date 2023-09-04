import hospedeInfoRepository from "../repositories/hospedeInfo.repository.js";

async function insertHospedeInfo(hospedeInfo) {
  await hospedeInfoRepository.insertHospedeInfo(hospedeInfo);
}

async function getHospedesInfo() {
  return await hospedeInfoRepository.getHospedesInfo();
}

export default { insertHospedeInfo, getHospedesInfo };
