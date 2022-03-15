const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(3000);

server.on("listening", () => { console.log("http://localhost:3000"); })

server.on("request", (req, res) => {
    let url = req.url;
    if (url === "/") name_file = "index.html";
    if (url === "/style.css") name_file = "style.css";
    console.log(url);
    let content = url;
    fs.readFile(name_file, (error, content) => {
        res.end(content);
    });
    console.log(`content => ${content}`); // не успевает считаться
    console.log("===========");
});
