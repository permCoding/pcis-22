const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(3000);

server.on("listening", () => { console.log("http://localhost:3000"); })

server.on("request", (req, res) => {
    let url = req.url;
    let name_file = url === "/"? "index.html": "style.css";
    console.log(`${url} => ${name_file}`);
    let content = fs.readFileSync(name_file, "utf-8");
    res.end(content);
});
