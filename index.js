const http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("Bonjour <b>mon ami</b>");
});

const Port = 3000;
const Host = "127.0.0.1";

server.listen(Port, Host, () => {
  console.log(`Server has started: http://${Host}:${Port}`);
});
