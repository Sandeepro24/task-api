//Requiring module
const mongoose = require("mongoose");

// connecting to mongodb atlas database
mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {   //process.env.MONGO_CONNECTION_URL fetching url from .env file
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully."))
  .catch((err) => {
    console.log(err);
    console.log("Database connection failed.");
  });
