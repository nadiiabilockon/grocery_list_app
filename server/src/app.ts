import express from "express";
import cors from "cors";
import pool from "../db";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/products", async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await pool.query(
      "INSERT INTO product (name) VALUES($1) RETURNING *",
      [name]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/products", async (_req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM product");
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/", function (_req, res) {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
