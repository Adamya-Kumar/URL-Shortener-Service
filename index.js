const express = require("express");
const path=require('path')
const url = require("./models/url");
const UserRouter = require("./routes/url");
const StaticRoute=require('./routes/StaticRouter')
const { handleConnectMongoDB } = require("./connect");
const app = express();
const PORT = 4000;
//Middlewares
app.use(express.urlencoded({ extended: false }));
app.set('views', path.resolve('views'));
app.set("view engine", "ejs");
app.use(express.json());
// Connect MongoDB
handleConnectMongoDB("mongodb://127.0.0.1:27017/piyush_garg_NodeJS").then(() =>
  console.log("Connect MongoDB")
);
// Routers
app.use('/',StaticRoute);
app.use("/url", UserRouter);
//port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
