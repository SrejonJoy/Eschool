import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const clientOptions: MongoClientOptions = {};

const client = new MongoClient(uri, clientOptions);

export async function connectToDatabase() {
  await client.connect();
  const db = client.db('mydatabase');
  return { db, client };
}
