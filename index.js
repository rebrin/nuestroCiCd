const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "mi primer CI/CD" });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
module.exports = app;
