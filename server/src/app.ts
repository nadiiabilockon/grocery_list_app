
import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json()); //req.body

app.get('/', function (req, res) {
    console.log(req)
res.send('Hello Wfffffforld!');
});

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
