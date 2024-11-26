const express = require('express');
const {router} = require("./router")
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

app.use("/api", router)

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
