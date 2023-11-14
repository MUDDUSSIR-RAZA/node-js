const express = require("express");
const bodyParser = require("body-parser");
const form = require("./routes/form");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use((req, res, next) => {
    req.data = "MUDDUSSIR";
    next();
})

app.use("/form" , form)

app.listen(3000);
