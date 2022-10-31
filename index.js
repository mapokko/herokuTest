import express from "express";
const app = express();

app.listen(process.env.PORT || 5000, () => console.log(`Listening on 5000`));

app.get("/", (req, res) => {
  res.send("hello world");
});
