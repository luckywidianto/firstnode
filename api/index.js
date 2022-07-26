const express = require('express')
const app = express()
var antares = require("antares-http");
const cors = require("cors");

antares.setAccessKey("2c90c5b7dfb14ded:66c0b292bf7c153d");
const port = process.env.PORT | 8080

app.use(cors())

app.get("/", async (req, res) => {
    let result;
    try {
        await antares.get("AntaresTry","new-sender").then(function (response) {
            result = response.content;
        });
        res.status(200).send({
            status: 200,
            success: true,
            message: "Antares data fetched successfully",
            data: result,
        });
    } catch (e) {
        res.status(500).send({
            status: 500,
            success: false,
            message: "Failed to fetch Antares data",
            data: {},
        });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})