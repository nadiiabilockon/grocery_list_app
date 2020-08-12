import express from "express";
import pool from "../../db";

const router = express.Router();

router.get("/", async (_req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM product");
        res.json(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await pool.query(
            "SELECT * FROM product WHERE product_id = $1",
            [id]
        );

        res.json(product.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

router.post("/", async (req, res) => {
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

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        await pool.query("UPDATE product SET name = $1 WHERE product_id = $2", [
            name,
            id,
        ]);

        res.json("product was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM product WHERE product_id = $1", [id]);
        res.json("product was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
