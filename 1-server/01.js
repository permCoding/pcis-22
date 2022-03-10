const http = require("http");

const server = http.createServer();

server.listen(3000, () =>
    console.log("http://localhost:3000")
);

server.on("request", (req, res) => {
    // console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write("server");
    res.write("<br>");
    res.write("listening");
    res.end();
});
