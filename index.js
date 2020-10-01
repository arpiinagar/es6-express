var express=require('express');
var body=require('body-parser');
var path=require('path');
let app = express();
const PORT = process.env.PORT|| 3000;

app.use(body.json());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.get('/home',(req,res) => {
  res.statusCode=200;
  res.setHeader('Content-Type','text/html');
  res.sendFile(path.join(__dirname,'home.html'));
});

app.listen(PORT, (err) => {
  console.log(err || `Server listening at ${PORT}`);
});
