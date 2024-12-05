const http = require("http");
const fs = require("fs");
const path = require("path");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const filePath = path.join(__dirname, "temp", "index.html");
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);

  stream.on("error", (err) => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
    console.error("Error reading file:", err);
  });
});

const Port = 3000;
const Host = "127.0.0.1";

server.listen(Port, Host, () => {
  console.log(`Server has started: http://${Host}:${Port}`);
});
