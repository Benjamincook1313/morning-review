const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getItems, getSingleItem, addItem } = require("./controllers/ctrl");

app.get("/api/items", getItems);
app.get("/api/item", getSingleItem);
app.post("/api/item", addItem);



app.listen(4040, () => console.log(`Server listening on port 4040`));