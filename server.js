const express = require ('express');
const PORT = 3000;
const app = express();
const cors = require ('cors');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
  res.status(200).send('<h1>HELLO THERE</h1>')
})

app.listen(PORT, () =>{
  console.log(`app is listening on ${PORT}`)
})