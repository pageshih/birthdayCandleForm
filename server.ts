import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  );
});
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://forstar_mo:Ed96enHwxlsFNzRb@cluster0.igr5fkv.mongodb.net/?retryWrites=true&w=majorit';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    const db = client.db('forUNUS');
    const kidzCyCandleCollection = db.collection('kidzCyCandle');
    const data = await kidzCyCandleCollection.find({}).toArray();
    console.log('data', data);
  } finally {
    await client.close();
  }
}
connect().catch(console.dir);
