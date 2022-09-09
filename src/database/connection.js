const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully."))
  .catch((err) => {
    console.log(err);
    console.log("Database connection failed.");
  });
