const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
};

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});