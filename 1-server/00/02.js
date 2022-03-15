const http = require("http");

const server = http.createServer();

server.listen(3000);

server.on("listening", () => { console.log("http://localhost:3000"); })

let html = `
<!doctype html> 
<html lang="ru"> 
<head>
    <meta charset="utf-8">
    <title>server</title>
</head>
<body>
    <h1>сервер 1</h1>
    <h2>server 2</h2>
</body>
</html>`;

server.on("request", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write(html);
    res.end();
});
