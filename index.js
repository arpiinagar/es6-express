import express from 'express';
let app = express();
const PORT = 3000;

import body from 'body-parser';

app.use(body.json());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.listen(PORT, (err) => {
  console.log(err || `Server listening at ${PORT}`);
});
