const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const xlsx = require('xlsx');
const PORT = process.env.PORT || 3030;


// app.use(cors({
//     origin: 'https://www.section.io'
// }));
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/saer', (req, res)=> {
    res.send('eagleakbar')
  })
  app.post('/kobra', (req, res)=> {
    let _username=req.body.username;
    let _password= req.body.password;
    if(_username == 'rony' && _password == 'rizk'){
    res.status(200).send('sucess')}
    else{
res.status(403).send('your pass or user is wrong');
    }

  })
  app.get('/ahmad', (req, res)=> {

    let wb= xlsx.readFile('data.xlsx');
    let ws= wb.Sheets['student'];
    let data= xlsx.utils.sheet_to_json(ws);
    res.send(data);

  })

app.listen(PORT)