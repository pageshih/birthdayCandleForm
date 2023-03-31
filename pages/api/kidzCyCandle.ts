import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://forstar_mo:Ed96enHwxlsFNzRb@cluster0.igr5fkv.mongodb.net/?retryWrites=true&w=majorit';
const client = new MongoClient(uri);

async function connect() {
  try {
    const db = client.db('forUNUS');
    const kidzCyCandleCollection = db.collection('kidzCyCandle');
    console.log(kidzCyCandleCollection);
  } finally {
    await client.close();
  }
}
export default connect;
