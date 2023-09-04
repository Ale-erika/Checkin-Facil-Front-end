import { getClient } from "./mongo.db.js";

async function insertHospedeInfo(hospedeInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("checkin").collection("hospedeinfo").insertOne(hospedeInfo);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getHospedesInfo() {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("checkin")
      .collection("hospedeinfo")
      .find({})
      .toArray();
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default { insertHospedeInfo, getHospedesInfo };
