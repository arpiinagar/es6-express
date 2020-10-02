var express=require('express');
var body=require('body-parser');
var path=require('path');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(body.json());

app.get('/', (req, res) => {
  return res.send('Hello');
});

app.get('/home',(req,res) => {
  res.statusCode=200;
  res.setHeader('Content-Type','text/html');
  res.sendFile(path.join(__dirname,'home.html'));

app.get('/greet/:greeting/:to', (req, res) => {
  return res.send(`${req.params.greeting} ${req.params.to}`);
});

app.get('/home', (req, res) => {
  return res.send(`You're at home cry now`);
});
  
app.get('/Evra', async (req,res)=>{
  return res.send('I love this game');
})

app.get('/About', async (req,res)=>{
  return res.send('Read what this game is all about');
})

app.listen(PORT, (err) => {
  console.log(err || `Server listening at ${PORT}`);
});
