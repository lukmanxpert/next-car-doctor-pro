import { MongoClient } from "mongodb";
import { ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  serviceCollection: "services",
  userCollection: "users",
};
const dbConnect = (collection) => {
  const uri = process.env.db_uri;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.db_user).collection(collection);
};

export default dbConnect;
