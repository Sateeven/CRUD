const express = require ('express');
const PORT = 3000;
const app = express();
const cors = require ('cors');
const mongoose = require('mongoose');

//mongoose configuration
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology:true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
  res.status(200).send('<h1>HELLO THERE</h1>')
})

app.listen(PORT, () =>{
  console.log(`app is listening on ${PORT}`)
})


module.exports = app;