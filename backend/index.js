const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MONGO_URI, CLIENT_URL, PORT } = require("./config.keys");
const allRoutes = require("./routes/allRoutes");

const app = express();

/**
 * MongoDb Connection
 */
mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
  console.log(
    "%s MongoDB connection error. Please make sure MongoDB is running."
  );
  process.exit();
});
db.once("open", () => {
  console.log("DB Connected successfully!!!!!!!");
});

/**
 * CORS middleaware to allow client connection
 */
app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET, PUT, POST, DELETE, PATCH",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", allRoutes);

app.listen(PORT, () => {
  console.log("Server Connected");
});
