import express from "express";
import cors from "cors";

const productRouter = require("./routes/product");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);

app.get("/", function (_req, res) {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
