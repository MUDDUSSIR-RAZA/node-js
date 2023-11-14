const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

const form = require("./routes/form");
app.use((req, res, next) => {
    req.data = "MUDDUSSIR";
    next();
})

app.use("/form" , form)

app.listen(3000);
