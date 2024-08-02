const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(espress.joson());
app.use(express.static("public"));

