const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

// import routes//
const agencyRoutes = require("./routes/agencyRoute");
app.use(agencyRoutes);
const bookingRoutes = require("./routes/bookingRoute");
app.use(bookingRoutes);

app.all("*", (req, res) => {
  res.status(400).json("this route doesn't exist");
});

app.listen(process.env.PORT, () => {
  console.log("the server has started 🏎🏎🏎🏎");
});
