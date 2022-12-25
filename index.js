const express = require('express')
const employeRoutes = require("./routes/employeRoutes");
const dotenv =require('dotenv');
const connectDB = require("./config/dbAccessor");
const cors = require('cors')
const path= require("path")

const app = express();
dotenv.config();
connectDB(); 
app.use(express.json());
const PORT = process.env.PORT;

var cors = require(cors());
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api", employeRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
