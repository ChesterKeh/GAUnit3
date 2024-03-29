//* require block
require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const usersRouter = require("./routes/userRoutes");

const app = express();

//* middleware block
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

//* routes block
// app.get("/api/", (req, res) => {
//   res.json({ hi: "world" });
// });

app.use("/api/users", usersRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//* listen block
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
