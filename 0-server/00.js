const http = require("http");
const fs = require("fs");
// https://metanit.com/web/nodejs/3.4.php
const server = http.createServer();

server.listen(3000);

// server.on("request", ((req, res) => res.end("server")));

// server.on("request", (req, res) => {
//     let url = req.url;
//     if (url === "/") namefile = "index.html";
//     if (url === "/style.css") namefile = "style.css";
//     console.log(url);
//     fs.readFile(namefile, (error, content) => {
//         res.end(content);
//     })
// });

server.on("request", (req, res) => {
    let url = req.url;
    console.log(url);
    let namefile = "index.html";
    fs.createReadStream(namefile).pip(res);
});
