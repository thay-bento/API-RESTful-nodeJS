const express = require("express");
//permiti receber requisições de domínios diferentes
const app = express();
const port = 3000;

app.use(express.json());

require('../src/routes/index')(app);

app.listen(port, function() {
  console.log("Server is running");
});
