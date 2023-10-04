const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");
const socketIo = require("socket.io");
const { join } = require('node:path');
const connectDB = require("./config/utils/db");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const messageRoutes = require("./routes/Chat/message.routes");
const chatRoutes = require("./routes/Chat/chat.routes");

connectDB();
const app = express();
const server = http.createServer(app); 
const io = socketIo(server);

// ... other middleware and routes ...
//app settings
app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get('/test', (req, res) => {
  res.json("You got here");
})

// app routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/chat", messageRoutes);
app.use("/api/chat", chatRoutes);

app.get("*", (req, res) => {
  res.send("Error 404: PAGE NOT FOUND!");
});

io.on('connection', (socket) => {
  console.log('user connected');  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

const port = process.env.PORT || 8001;

server.listen(port, () => { 
  console.log(`Server Running on port ${port}⚙️`);
});
