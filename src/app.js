const express = require("express");
const { Database } = require("./config");
// Config environment variables
const dotenv = require("dotenv");
const router = require("./routes");
const ResponseMiddleware = require("./middleware/ResponseMiddleware");
dotenv.config();

const port = process.env.PORT;

// Connect to Database
const db = new Database(process.env.MONGODB_URL);

db.connect().catch((err) => {
  console.error(err);
});

const app = express();

app.use(express.json());
app.use(ResponseMiddleware);
app.use("/api", require("./routes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
  next(err.stack);
});

app
  .listen(port, () => {
    console.log(`Users Server is running at http://localhost: ${port}`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
