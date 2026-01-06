const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.use(express.static(path.join(__dirname)));

app.get('/',(req,res) => {
    res.send('hello world!');
});

app.get('/bulb',(req,res) => {
    res.sendFile(path.join(__dirname,'bulb.html'));
});
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'login.html'));
});
app.get('/weather',(req,res) => {
    res.sendFile(path.join(__dirname,'weather.html'));
});

app.listen(port,() => {
  console.log(`Example app listening at http://localhost:${port}`)
});
