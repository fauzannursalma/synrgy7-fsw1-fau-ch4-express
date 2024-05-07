const express = require("express");
const app = express();
const { PORT = 8000 } = process.env;

const Router = require("./routes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add ejs
app.set("view engine", "ejs");

app.use(Router);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:8000");
});
