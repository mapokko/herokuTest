import axios from "axios";
import express from "express";
const app = express();

const apiKey =
  "dbe39902202c25ac81556135f5fc2d610c3522bc6ce5fc83f0ddc24ce2fe4d0a";

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

app.get("/external", async (req, res) => {
  res.send(
    `slot id is ${req.query.slotId} <a href="/getPayed?slotId=${req.query.slotId}" >get payed</a>`
  );
});

app.get("/getPayed", async (req, res1) => {
  const config = {
    headers: {
      MicroworkersApiKey: apiKey,
      "Content-Type": "application/json",
    },
  };

  await axios
    .put(
      `https://ttv-sandbox.microworkers.com/api/v2/slots/${req.query.slotId}/submitProof`,
      {
        answers: [
          {
            key: "keyName",
            value: "valueName",
          },
        ],
      },
      config
    )
    .then((res) => {
      res1.send(`you got payed at ${req.query.slotId}`);
    })
    .catch((err) => {
      res1.send(`you DID NOT get payed at ${req.query.slotId}`);
      console.log(Object.getOwnPropertyNames(err));
      console.log(err.request);
      console.log("------------------------------------------");
      console.log(err.response);
    });
});
