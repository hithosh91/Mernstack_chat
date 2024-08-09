const express = require("express");
const dotenv = require("dotenv");
const router = require("./Routes/Auth.routes");
const mongooes = require("mongoose");
const cokkies = require("cookie-parser");
const messageroute = require("./Routes/MessageRoutes");

dotenv.config();

const port = process.env.PORT || 4000;
const url = process.env.URL;

const app = express();

//middleware
app.use(express.json());

app.use(cokkies());
app.use("/api/auth", router);
app.use("/message", messageroute);
//to parse the income request with json payload

//mongooes db
mongooes
  .connect(url)
  .then(() => {
    console.log("mongod db atlas is conneted");
  })
  .catch((error) => {
    console.log("error while connect db");
  });

app.listen(port, () => {
  console.log(`server is runnign on port ${port}`);
});
