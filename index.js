const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;

app.use(express.static("public"));

app.get("/send-id", function (req, res) {
  res.json({ id: "1655815884-rbX9jLbm" });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
