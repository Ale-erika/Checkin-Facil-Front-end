import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://alerikacs:admin@cluster0.ygrchcr.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}

export { getClient };
