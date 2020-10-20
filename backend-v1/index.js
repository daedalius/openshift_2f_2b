const http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url);

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
      res.writeHead(200);
      res.end();
      return;
    }

    res.end(JSON.stringify({ version: "v1" }));
  })
  .listen(8080);
