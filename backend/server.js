const express = require("express");
const { ProductList } = require("./data");

const app = express();

const PORT = 4000;

app.get("/products", (req, res) => {
  res.send({ products: ProductList });
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
