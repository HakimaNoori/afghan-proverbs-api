const express = require("express");
const app = express();
const mongoose = require("mongoose");
const proverbRoutes = require("./routes/proverbRoutes");

app.use(express.json());
app.use(express.static("public"));
app.use("/api/proverbs", proverbRoutes);

mongoose
  .connect("mongodb://localhost:27017/afghan-proverbs")
  .then(() => {
    console.log("MongoDB connected: mongodb://localhost:27017/afghan-proverbs");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
