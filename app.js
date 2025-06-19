const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

const io = require("socket.io")(server);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Track connected clients
const connectedClients = new Set();

io.on("connection", (socket) => {
  connectedClients.add(socket.id);
  io.emit("client-connected", connectedClients.size);

  socket.on("disconnect", () => {
    connectedClients.delete(socket.id);
    io.emit("client-connected", connectedClients.size);
  });

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});
