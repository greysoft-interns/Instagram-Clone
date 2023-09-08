const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/utils/db")

//Import App routing
const authRoutes = require("./routes/auth.routes")
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/post.routes")

connectDB();
const app = express();

//app settings
app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


// app routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/post", postRoutes)


app.get("*", (req, res) => {
    res.send("Error 404: PAGE NOT FOUND!")
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Running on port ${port}⚙️`)
})