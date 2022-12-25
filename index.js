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

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api", employeRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
