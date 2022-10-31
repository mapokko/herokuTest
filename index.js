import express from "express";
const app = express();

app.listen(process.env.PORT || 5000, () => console.log(`Listening on 5000`));

app.get("/:campaingID/:workerID", (req, res) => {
  // res.send("hello world");
  console.log(req.params.campaignID);
  console.log(req.params.workerID);
  res.send(
    `campaignID is ${req.params.campaingID} and workerID id ${req.params.workerID}`
  );
});
