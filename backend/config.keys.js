require("dotenv").config();

exports.PORT = process.env.PORT || 5000;
exports.CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
exports.MONGO_URI = process.env.MONGO_URI;
