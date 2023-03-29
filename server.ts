import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://PageShih:qEStl2YSujlNnlCy@cluster0.8na6esc.mongodb.net/?retryWrites=true&w=majority';
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
