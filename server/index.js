const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./route/api/posts");
const mongoose = require("mongoose");
// Initialise express into an app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// direct routes to the router
app.use("/api/posts", router);
// Create PORT
const port = process.env.PORT || 5000;
// connect db
mongoose
  .connect(
    "mongodb+srv://abc123:abc12345@cluster0-aoarg.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("DB Connected"))
  .catch(e => console.log("DB Connect Error " + e));

// Start Server
app.listen(port, () => console.log(`server running on port ${port}`));
