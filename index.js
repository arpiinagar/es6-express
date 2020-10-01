import express from 'express';
let app = express();
const PORT = process.env.PORT|| 3000;

import body from 'body-parser';

app.use(body.json());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.get('/home',(req,res) => {
  return res.send('You`'`re at home cry now');
});

app.listen(PORT, (err) => {
  console.log(err || `Server listening at ${PORT}`);
});
