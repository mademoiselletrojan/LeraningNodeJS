const http = require("http");
const fs = require("fs");
const path = require("path");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (req.url == "/") fs.createReadStream("./temp/index.html").pipe(res);
  else if (req.url == "/about")
    fs.createReadStream("./temp/about.html").pipe(res);
  else fs.createReadStream("./temp/error.html").pipe(res);
});

const Port = 3000;
const Host = "127.0.0.1";

server.listen(Port, Host, () => {
  console.log(`Server has started: http://${Host}:${Port}`);
});
