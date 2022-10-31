import express from "express";
const app = express();

app.listen(process.env.PORT || 5000, () => console.log(`Listening on 5000`));

app.get("/", (req, res) => {
  // res.send("hello world");
  console.log(req.query.campaignId);
  console.log(req.query.workerId);
  res.send(
    `campaignID is ${req.query.campaignId} and workerID id ${req.query.workerId}
    <a href="https://www.w3schools.com" target="_blank">click here</a> 
    `
  );
});
