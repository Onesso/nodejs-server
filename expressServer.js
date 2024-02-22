const http = require("http");
const fs = require("fs");

const serve = http.createServer((req, res) => {
  //   console.log(req);
  console.log(req.url);

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    const homePageHtml = fs.readFileSync("node.html");
    res.write(homePageHtml);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h4> this is the wrong page</h4>");
    res.end();
  }
});

serve.listen(8001);
