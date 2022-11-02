import express from "express";
const app = express();

app.listen(process.env.PORT || 5000, () => console.log(`Listening on 5000`));

app.get("/", (req, res) => {
  // res.send("hello world");
  console.log(req.query.campaignId);
  console.log(req.query.workerId);
  console.log(req.query.slotId);
  res.send(
    `campaignID is ${req.query.campaignId} and workerID id ${req.query.workerId} and slitId is ${req.query.slotId}
    <a href="/external?slotId=${req.query.slotId}" target="_blank">click here</a> 
    `
  );
});

app.get("/external", (req, res) => {
  res.send(`slot id is ${req.query.slotId}`);
});
