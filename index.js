import express from 'express';
let app = express();

import body from 'body-parser';

app.use(body.json());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.get('/home',(req,res) => {
  return res.send('Youre at home cry now');
});

app.listen(3000, () => {
  console.log('Server start at 3000');
});
