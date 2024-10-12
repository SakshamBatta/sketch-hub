const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend of Sketch Hub");
});

io.on("connection", (socket) => {
  console.log("New Client Connected" + socket.id);

  socket.on("disconnect", () => {
    console.log("Client Disconnected: " + socket.id);
  });
});
