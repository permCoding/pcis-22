const http = require("http");
const fs = require("fs");

const public_dir = "./public_1";

const server = http.createServer();

server.listen(3000);

server.on("request", (req, res) => load_url(res, req.url));

let load_url = (res, url) => {
    url = url === "/"? "/index.html": url;
    res.setHeader("Content-Type", "text/html; charset=utf8;");
    fs.readFile(`${public_dir}${url}`, "utf-8", (error, content) => {
        if (error) throw error;
        res.end(content);
    });
};
