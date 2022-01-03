import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

let port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(__dirname);
  console.log('Listening Port ' + port);
});
