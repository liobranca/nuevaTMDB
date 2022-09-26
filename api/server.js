const express = require("express");
const cookieparser= require("cookie-parser")
const app = express();
const morgan = require("morgan");
const routes = require("./routes");
const models= require("./models")
const db = require("./db");
const path = require("path");
var cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(cookieparser())


app.use("/api", routes);

const PORT = process.env.PORT || 3001;
db.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

}); 


