const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

require('../src/routes/index')(app);

app.listen(port, function() {
  console.log("Server is running");
});
